export const fetchRecentsForAllUsers = `
// Cron job: Fetch recently played Spotify tracks for all users.
// This runs every X minutes/hours
exports.fetchRecentsForAllUsers = async () => {
  const users = await User.getAllUsers();
  let allMerged = [];

  for (let user of users) {
    try {
      let userId = user.id;
      let accessToken = await tokenStore.getAccessTokenOrRefresh(
        userId,
        'spotify_access_token'
      );

      // when was the last time an user listened a song
      const lastTime = await PlayHistory.getLastPlayedAt(userId);

      const after = !lastTime ? null : lastTime + 1000;

      // Fetch recently played tracks from Spotify API
      let recents = await spotifyService.getRecentlyPlayed(accessToken, after);

      recents.items = recents.items.filter((item) => {
        const playedMs = new Date(item.played_at).getTime();
        return lastTime === null || playedMs > lastTime;
      });

      if (!recents?.items?.length) {
        console.log(\`Ei uusia kappaleita käyttäjälle \${userId}\`);
        continue;
      }

      // Structures to collect all new data before saving
      let newSongs = [];
      let songHistory = [];
      let artistNames = new Set();
      let genreNames = new Set();
      let artistSongLinks = [];
      let genreArtistLinks = [];

      // Extract song, artist and genre information from every recent track
      for (let song of recents.items) {
        songHistory.push({
          spotify_track_id: song.track.id,
          played_at: song.played_at,
          User_id: userId,
        });

        newSongs.push({
          spotify_track_id: song.track.id,
          name: song.track.name,
          User_id: userId,
          track_image: song.track.album.images?.[0]?.url,
        });

        // loop through artists of a song and put them in a list
        for (let artist of song.track.artists) {
          let artistData = await spotifyService.getArtist(
            artist.id,
            accessToken
          );

          artistNames.add(artist.name);

          artistSongLinks.push({
            artist_name: artist.name,
            spotify_track_id: song.track.id,
          });

          // loop through genres of an artist and put them in a list
          for (let genre of artistData.genres) {
            genreNames.add(genre);

            genreArtistLinks.push({
              artist_name: artist.name,
              genre_name: genre,
            });
          }
        }
      }

      // Prepare artists and genres for bulk insert
      const artists = [...artistNames].map((name) => ({ name }));
      const genres = [...genreNames].map((name) => ({ name }));

      await Song.save(newSongs);
      await Genre.save(genres);
      await Artist.save(artists);

      // get artists, genres and songs from database
      const allArtists = await Artist.getArtists(artists.map((a) => a.name));
      const allGenres = await Genre.getGenres(genres.map((g) => g.name));
      const allSongs = await Song.getSongsBySpotifyIds(
        userId,
        newSongs.map((s) => s.spotify_track_id)
      );

      // Artist_Song
      const artistSongRecords = artistSongLinks
        .map((link) => {
          const artist = allArtists.find((a) => a.name === link.artist_name);
          const song = allSongs.find(
            (s) => s.spotify_track_id === link.spotify_track_id
          );
          return artist && song
            ? { Artist_id: artist.id, Song_id: song.id }
            : null;
        })
        .filter(Boolean);

      await ArtistSong.save(artistSongRecords);

      // Genre_Artist
      const genreArtistRecords = genreArtistLinks
        .map((link) => {
          const artist = allArtists.find((a) => a.name === link.artist_name);
          const genre = allGenres.find((g) => g.name === link.genre_name);
          return artist && genre
            ? { Artist_id: artist.id, Genre_id: genre.id }
            : null;
        })
        .filter(Boolean);

      await GenreArtist.save(genreArtistRecords);

      // Play_history
      const playHistoryRecords = songHistory
        .map((entry) => {
          const song = allSongs.find(
            (s) => s.spotify_track_id === entry.spotify_track_id
          );
          return song
            ? {
                Song_id: song.id,
                User_id: entry.User_id,
                played_at: entry.played_at,
              }
            : null;
        })
        .filter(Boolean);

      await PlayHistory.save(playHistoryRecords);

      allMerged.push({ userId, count: playHistoryRecords.length });
    } catch (err) {
      console.error(\`Virhe käyttäjältä \${user.id}:\`, err.message);
      continue;
    }
  }
  return allMerged;
};
`;

export const batchInsert = `
exports.save = async (entries) => {
  if (!entries || entries.length === 0) return;

  const values = entries
    .map(
      (e) =>
        (
          \${pool.escape(e.spotify_track_id)},
          \${pool.escape(e.name)},
          1,
          \${pool.escape(e.User_id)},
          \${pool.escape(e.track_image)}
        )
    )
    .join(',');

  const query = \`
    INSERT INTO Song (spotify_track_id, name, amount, User_id, track_image)
    VALUES \${values}
    ON DUPLICATE KEY UPDATE amount = amount + 1;
  \`;

  await pool.query(query);
};
`;

export const favoriteFromLastMonth = `
exports.favoriteFromLastMonth = async (userId) => {
const query = \`SELECT 
s.id,
s.spotify_track_id,
s.name AS song_name,
s.track_image,
GROUP_CONCAT(DISTINCT g.name ORDER BY g.name SEPARATOR ', ') AS genres,
GROUP_CONCAT(DISTINCT a.name ORDER BY a.name SEPARATOR ', ') AS artist_names,
COUNT(ph.Song_id) AS plays,
MAX(ph.played_at) AS last_played
FROM Song s
INNER JOIN Play_history ph ON s.id = ph.Song_id
INNER JOIN Artist_Song ars ON s.id = ars.Song_id
INNER JOIN Artist a ON ars.Artist_id = a.id
LEFT JOIN Genre_Artist ga ON a.id = ga.Artist_id
LEFT JOIN Genre g ON ga.Genre_id = g.id
WHERE ph.played_at >= DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 1 MONTH), '%Y-%m-01')
AND ph.played_at < DATE_FORMAT(CURDATE(), '%Y-%m-01')
AND s.User_id = 5
GROUP BY 
s.id,
s.spotify_track_id,
s.name,
s.track_image
ORDER BY 
plays DESC,
last_played DESC
LIMIT 1;\`;

const [result] = await pool.query(query, [userId]);
return result[0] || null;
};
`;

export const jwtToken = `
// Backend code


// authController.js
const createToken = require('../../createtoken');

// Logs in a user via Spotify and sends a JWT token as a secure cookie.
exports.loginWithSpotify = async (userID, res) => {
  const jwtToken = createToken(userID);

  // Send the JWT as an httpOnly cookie
  res.cookie('jwt', jwtToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    path: '/',
    maxAge: 4 * 60 * 60 * 1000,
  });

  res.json({ login: 'success' });
};

// spotifyController.js

// used when login has been done
// gets code from the spotify url and we get users tokens with that code
exports.callback = async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send('No code returned');

  try {
    const tokens = await spotifyService.getAccessToken(code);
    const me = await spotifyService.getProfile(tokens.access_token);
    const user = new User(me.id);
    let userID = await user.getUserID();

    if (!userID) {
      userID = await user.save();
    }

    const encryptedRefTkn = await encrypt(tokens.refresh_token);

    const userTokens = new UserTokens(
      'spotify_refresh_token',
      encryptedRefTkn,
      null,
      userID
    );

    await userTokens.save();

    const expiresAt = Math.floor(Date.now() / 1000) + (tokens.expires_in - 60);

    const encryptedAccTkn = await encrypt(tokens.access_token);

    const userTokens2 = new UserTokens(
      'spotify_access_token',
      encryptedAccTkn,
      expiresAt,
      userID
    );

    await userTokens2.save();

    return authController.loginWithSpotify(userID, res);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ success: false, message: 'Spotify login failed' });
  }
};

// Frontend code

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code');

    if (!code) {
      this.router.navigate(['']);
      return;
    }

    axios
      .get(\`\${environment.apiUrl}api/callback?code=\` + code, {
        withCredentials: true,
      })
      .then(() => {
        this.callbackSucceeded = true;
      })
      .catch((err) => {
        console.warn(err);
        this.router.navigate(['']);
      });
  }
`;
