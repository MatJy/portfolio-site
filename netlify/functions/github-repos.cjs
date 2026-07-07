const axios = require('axios');
const extraProjectsData = require('../../src/data/projects.json');

const GITHUB_USERNAME = 'MatJy';

const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': 'portfolio-site',
};

exports.handler = async () => {
    try {
        const reposRes = await axios.get(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
            { headers }
        );

        const repos = reposRes.data;

        const projects = await Promise.all(
            repos.map(async (repo) => {
                const [languagesRes, commitsRes] = await Promise.all([
                    axios.get(repo.languages_url, { headers }),
                    axios.get(repo.commits_url.replace('{/sha}', ''), {
                        headers,
                    }),
                ]);

                const extra = extraProjectsData.find(
                    (p) => p.name.toLowerCase() === repo.name.toLowerCase()
                );

                return {
                    name: repo.name,
                    github: repo.html_url,
                    languages: Object.keys(languagesRes.data),
                    latestCommit:
                        commitsRes.data[0]?.commit?.committer?.date ?? null,
                    technologies: extra?.technologies ?? [],
                    type: extra?.type ?? '',
                    deployLink: extra?.link ?? '',
                };
            })
        );

        projects.sort((a, b) => {
            const aDate = a.latestCommit
                ? new Date(a.latestCommit).getTime()
                : 0;
            const bDate = b.latestCommit
                ? new Date(b.latestCommit).getTime()
                : 0;
            return bDate - aDate;
        });

        return {
            statusCode: 200,
            headers: {
                'Cache-Control': 'public, max-age=600', // 10 min
            },
            body: JSON.stringify(projects),
        };
    } catch (err) {
        console.error('GitHub fetch failed:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch projects' }),
        };
    }
};
