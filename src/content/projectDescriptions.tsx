import CodeBlock from '../sections/CodeBlock';
import ImageBlock from '../sections/ImageBlock';
import {
    batchInsert,
    favoriteFromLastMonth,
    fetchRecentsForAllUsers,
    jwtToken,
} from './wavespacerCode';

type Language = 'fi' | 'en';

const projectDescriptions: Record<string, Record<Language, JSX.Element>> = {
    WaveSpacer: {
        fi: (
            <>
                <h2 className="text-lg font-semibold text-[#2D81B2] mb-5 mt-2">
                    Ticorporate opintojakson portfolio ja itsereflektio
                </h2>
                <section className="mb-4 mt-2">
                    <p className="mb-3">
                        Pähkinänkuoressa mitä muunmuassa tein TC:n aikana:
                        kaikki backend kansion alla oleva, johon kuuluu;
                        spotify-api integraatio, spotify kirjautuminen, jwt
                        tokenit, api reittien hyödyntäminen sovelluksessa,
                        sql-kyselyt tietokantaan, aws secret manager
                        integraatio, tietokannan tekeminen, tietojen haku ja
                        tallennus kantaan, sovelluslogiikka, tietokannan datan
                        hyödyntäminen.
                    </p>

                    <p className="mb-3">
                        Valitsin nämä backend-esimerkit portfolioon, koska ne
                        kuvaavat parhaiten omaa rooliani projektissa sekä sitä,
                        missä koin kehittyneeni eniten opintojakson aikana.
                        Esimerkit edustavat oikeaa tuotantokoodia, tietoturvaa
                        ja suorituskykyä huomioivia ratkaisuja.
                    </p>

                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Backend esimerkit
                    </h3>

                    <CodeBlock
                        title="funktio, jota cron job käyttää"
                        code={fetchRecentsForAllUsers}
                        language="javascript"
                        collapsible
                    />
                    <CodeBlock
                        title="Batch insert"
                        code={batchInsert}
                        language="javascript"
                        collapsible
                    />

                    <CodeBlock
                        title="SQL-kysely"
                        code={favoriteFromLastMonth}
                        language="javascript"
                        collapsible
                    />

                    <CodeBlock
                        title="jwt token ratkaisu"
                        code={jwtToken}
                        language="javascript"
                        collapsible
                    />

                    <ImageBlock
                        title="Tietokannan rakenne"
                        src="/database-schema.png"
                        alt="Database schema"
                        collapsible
                    />

                    <ImageBlock
                        title="Alkuperäinen tietokannan rakenne"
                        src="/dbschema_og.png"
                        alt="Original database schema"
                        collapsible
                    />
                </section>
                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Osaaminen ennen ja nyt
                    </h3>

                    <p className="mb-3">
                        TC:n alussa minulla oli mielestäni jo hyvin kokemusta
                        koodaamisesta ja koodin ymmärtämisestä. Tiesin jo miten
                        sovelluksia tehdään ja ymmärsin asioita frontendistä,
                        backendistä sekä tietokannoista, joten tällä osaamisella
                        oli hyvä lähteä kehittelemään uutta. Backendin suhteen
                        ennen TC:tä, minulla oli mielestäni eniten parantamisen
                        varaa ja siinä halusinkin kehittyä enemmän.
                    </p>

                    <p>
                        Opintojakson jälkeen osaan nyt vähän käyttää
                        projektinhallintatyökaluja ja myös git on tullut
                        tutummaksi. Pystyn nyt työskentelemään osana isompaa
                        tiimiä ja koodia kirjoittaessa kommunikoida myös muiden
                        tiimiläisten kanssa, kuten frontend kehittäjän. Osaan
                        rakentaa monimutkaisempia sovelluksia ja ymmärrän
                        kokonaisuutta paremmin sekä osaan ottaa tietoturvan
                        paremmin huomioon kehittäessä sovellusta. Osaan myös
                        hyödyntää ketterää kehitystä scrum-mallilla kehittäessä
                        projektia tiimissä.
                    </p>
                </section>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Opitut asiat
                    </h3>

                    <p className="mb-3">
                        Olen oppinut paljon enemmän backend kehityksestä ja
                        siitä miten kaikki palaset loksahtavat paikoilleen
                        full-stack sovellusta kehittäessä. En esimerkiksi ennen
                        TC:tä osannut hahmottaa sitä, millä tavalla frontend,
                        backend, tietokanta ja AWS toimivat keskenään yhdessä
                        tai miten ne edes yhdistetään toisiinsa. Opin paljon
                        myös itse AWS ympärisöstä, sillä yhden AWS kurssin
                        käyneenä ei minulla siitä paljoa tietoa ollut. Nyt
                        kuitenkin tiedän paremmin miten koodi siellä toimii ja
                        kuinka se sovellus oikeasti siellä pilven päällä on.
                    </p>

                    <p className="mb-3">
                        Itse koodaamisen suhteen olen myös tullut siinä
                        itsevarmemmaksi. Kaikkea ei voi eikä pidäkään tehdä
                        täydellisesti vaan on hyvä tiedostaa se, että asioita ei
                        aina tarvitse viilata ihan loppuun asti vaan seuraavaan
                        asiaan voi jo siirtyä ja myöhemmin voi
                        jatkaa/parannella.
                    </p>

                    <p>
                        Olen myös oppinut työskentelemään tiimissä paremmin ja
                        hyödyntämään kommunikointia sekä itse kommunikoimaan
                        enemmän. On tärkeää tietää mitä kukakin projektissa
                        tekee ja backend kehittäjänä varsinkin konsultoida
                        frontend kehittäjältä asioita, jos on esimerkiksi jotain
                        jota tarvitsee backendin osalta kehittää seuraavaksi.
                        Kommunikointi on myös siltä kannalta tärkeää, että
                        tietää jos meinaa tehdä jotain asioita ristiin tai
                        toisin kuin jokin muu oli ajatellut asian tehtäväksi.
                        Henkilökohtaisesti olen myös oppinut olemaan
                        itsevarmempi omista tekemisistäni esimerkiksi juuri
                        koodin suhteen.
                    </p>
                </section>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Oivallukset
                    </h3>

                    <p className="mb-3">
                        Olen oivaltanut sen, että mitä tahansa ongelmia vastaan
                        tuleekaan, niin apua kannattaa kysyä ja niiden
                        ratkominen muiden kanssa voi nopeuttaa ratkeamista. Jos
                        on suunnitellut tarkasti mitä aina seuraavaksi pitää
                        tehdä, on tehtävän aloittaminen helpompaa. Kun aloittaa
                        tekemään seuraavaa ominaisuutta, on myös aluksi hyvä
                        miettiä miten sitä lähtisi rakentamaan ja tehdä koodi
                        mahdollisimman tehokkaaksi. Tekoälyn hyödyntäminen
                        tällaisissa asioissa auttaa paljon, koska jos on jo
                        tehnyt jotain koodia niin se osaa kertoa hyvin
                        pystyisikö sen toteuttamaan ns. ”paremmin”. Toisaalta
                        tuli myös nähtyä se, ettei tekoälyyn kannata myöskään
                        ihan sokeasti uskoa vaan sen antamat ehdotukset ja
                        koodinpätkät on hyvä arvioida ja testata ensin itse eli
                        toisin sanoen, jos et itse ymmärrä/yritä ymmärtää sen
                        tuotosta, niin suuremmassa kuvassa voi asiat mennä
                        huonosti.
                    </p>
                </section>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Tavoitteet
                    </h3>

                    <p className="mb-3">
                        Alussa tavoitteet olivat suurimmalta osin teknisiä,
                        halusin kehittyä frontend ja backend kehityksessä ja
                        ymmärtää ohjelmistokehityksen tuotantoprosessia
                        paremmin. Odotin oppivani lisää projektityöskentelystä,
                        tiimityöstä ja kommunikoinnista sekä kehittäväni omaa
                        koodaamistani sujuvammaksi.
                    </p>

                    <p>
                        Suurimmaksi osaksi tavoitteet toteutuivat projektin
                        aikana. Frontendiä en päässyt paljoa tekemään, muuta
                        kuin vasta loppupäässä tekemään pientä hiomista ulkoasun
                        suhteen. Kuitenkin eniten halua minulla oli kehittyä
                        backendin suhteen, jossa onnistuin mielestäni hyvin.
                        Voin jopa sanoa, että backend puoli on tällä hetkellä
                        vahvempi kuin frontend. Pääsin työskentelemään Gitin ja
                        Githubin parissa käytännössä, ja opin, miten front ja
                        backend sekä pilvipalvelut toimivat yhdessä oikeassa
                        projektissa. Lisäksi sain kokemusta
                        sprinttityöskentelystä, tehtävien pilkkomisesta ja
                        tiimiviestinnästä.
                    </p>
                </section>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Tulevaisuus
                    </h3>

                    <p className="mb-3">
                        Haluan sijoittua ohjelmistokehittäjän työtehtäviin ja
                        painottaa full-stack kehitystä. Vaikka TC:n aikana en
                        tehnyt paljoa frontendiä, niin olin jo siinä mielestäni
                        hyvällä tasolla, joten backendin tekeminen on nyt
                        tasapainottanut osaamistani full-stack kehittäjänä.
                        Opintojakso tarjosi hyvät eväät tähän rooliin ja siitä
                        sai apua moniin asioihin.
                    </p>

                    <p>
                        Uskon pärjääväni hyvin näillä taidoilla ja tavoitteilla,
                        jotta saan sellaisen työn kuin haluan tulevaisuudessa.
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Vahvuudet
                    </h3>

                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>backend</li>
                        <li>frontend</li>
                        <li>ongelmanratkaisu</li>
                        <li>tiimikommunikointi</li>
                        <li>koodaaminen</li>
                    </ul>
                </section>
            </>
        ),

        en: (
            <>
                <h2 className="text-lg font-semibold text-[#2D81B2] mb-5 mt-2">
                    Ticorporate courses portfolio and self-reflection
                </h2>
                <section className="mb-4 mt-2">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Backend examples
                    </h3>

                    <CodeBlock
                        title="function, that cron job uses"
                        code={fetchRecentsForAllUsers}
                        language="javascript"
                        collapsible
                    />
                    <CodeBlock
                        title="Batch insert"
                        code={batchInsert}
                        language="javascript"
                        collapsible
                    />

                    <CodeBlock
                        title="SQL-query"
                        code={favoriteFromLastMonth}
                        language="javascript"
                        collapsible
                    />

                    <CodeBlock
                        title="jwt token solution"
                        code={jwtToken}
                        language="javascript"
                        collapsible
                    />

                    <ImageBlock
                        title="Database schema"
                        src="/database-schema.png"
                        alt="Database schema"
                        collapsible
                    />
                </section>
                <section className="mb-6 mt-2">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Skills before and after
                    </h3>

                    <p className="mb-3">
                        At the beginning of TC, I felt that I already had a good
                        amount of experience in coding and understanding code. I
                        already knew how applications are built and understood
                        frontend, backend and databases, so it was a good
                        foundation to start developing something new. In terms
                        of backend development before TC, I felt that I had the
                        most room for improvement there and that was where I
                        especially wanted to develop myself.
                    </p>

                    <p>
                        After the course, I now have some experience using
                        project management tools and Git has also become more
                        familiar. I am now able to work as part of a larger team
                        and communicate with other team members while writing
                        code, such as frontend developers. I am able to build
                        more complex applications and understand the overall
                        system better, as well as take security into account
                        more effectively when developing an application. I am
                        also able to utilize agile development using the Scrum
                        model when developing a project as part of a team.
                    </p>
                </section>

                <section className="mb-6 ">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Learned skills
                    </h3>

                    <p className="mb-3">
                        I have learned much more about backend development and
                        how all the pieces fit together when developing a
                        full-stack application. Before TC, I was not able to
                        fully understand how frontend, backend, database and AWS
                        work together or how they are even connected to each
                        other. I also learned a lot about the AWS environment
                        itself, since after completing only one AWS course I did
                        not yet have much knowledge about it. Now I have a
                        better understanding of how the code runs there and how
                        the application actually exists in the cloud.
                    </p>

                    <p>
                        I have also learned to work better as part of a team and
                        to make better use of communication, as well as to
                        communicate more myself. It is important to know what
                        each person is doing in a project, and especially as a
                        backend developer to consult with frontend developers if
                        there is something that needs to be developed next on
                        the backend side. Communication is also important in
                        order to avoid doing things in parallel or differently
                        than someone else had planned. On a personal level, I
                        have also become more confident in my own work,
                        especially when it comes to coding.
                    </p>
                </section>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Insights
                    </h3>

                    <p className="mb-3">
                        I have realized that no matter what kind of problems
                        come up, it is worth asking for help and solving them
                        together with others can speed up finding a solution. If
                        you have carefully planned what needs to be done next,
                        starting a task becomes easier. When starting to work on
                        a new feature, it is also good to first think about how
                        to approach its implementation and write the code as
                        efficiently as possible. Utilizing artificial
                        intelligence in these situations can be very helpful,
                        because if you have already written some code, it can
                        often suggest whether it could be implemented in a
                        “better” way. On the other hand, I also saw that AI
                        should not be trusted blindly, and its suggestions and
                        code snippets should be evaluated and tested yourself
                        first. In other words, if you do not understand or try
                        to understand its output, things can go wrong in the
                        bigger picture.
                    </p>
                </section>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Goals
                    </h3>

                    <p className="mb-3">
                        At the beginning, my goals were mostly technical. I
                        wanted to develop my frontend and backend skills and
                        better understand the software development production
                        process. I expected to learn more about project work,
                        teamwork and communication, as well as make my own
                        coding more fluent.
                    </p>

                    <p>
                        For the most part, the goals were achieved during the
                        project. I did not get to work much on the frontend,
                        except for some minor visual polishing towards the end.
                        However, my main desire was to develop my backend
                        skills, and in that area I feel I succeeded well. I can
                        even say that my backend skills are currently stronger
                        than my frontend skills. I was able to work with Git and
                        GitHub in practice and learned how frontend, backend and
                        cloud services work together in a real project. In
                        addition, I gained experience with sprint-based work,
                        task breakdown and team communication.
                    </p>
                </section>

                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Future
                    </h3>

                    <p className="mb-3">
                        I want to work in software developer roles and focus on
                        full-stack development. Even though I did not do much
                        frontend work during TC, I already felt that I was at a
                        good level in that area, and working on backend
                        development has now balanced my skill set as a
                        full-stack developer. The course provided a solid
                        foundation for this role and offered support in many
                        areas.
                    </p>

                    <p>
                        I believe that with these skills and goals, I will
                        perform well and be able to obtain the kind of job I
                        want in the future.
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        Strengths
                    </h3>

                    <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        <li>backend</li>
                        <li>frontend</li>
                        <li>problem solving</li>
                        <li>team communication</li>
                        <li>coding</li>
                    </ul>
                </section>
            </>
        ),
    },
};

export default projectDescriptions;
