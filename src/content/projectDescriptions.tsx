import CodeBlock from '../sections/CodeBlock';
import ImageBlock from '../sections/ImageBlock';
import {
    batchInsert,
    favoriteFromLastMonth,
    fetchRecentsForAllUsers,
    jwtToken,
} from './wavespacerCode';

type Language = 'fi' | 'en';

type ProjectDescriptionEntry = Partial<Record<Language, JSX.Element>>;

const createSimpleDescription = (
    title: string,
    description: string,
    secondTitle?: string,
    secondDescription?: string,
): ProjectDescriptionEntry => ({
    en: (
        <>
            <h2 className="text-lg font-semibold text-[#2D81B2] mb-5 mt-2">
                {title}
            </h2>

            <section className="mb-6 mt-2">
                <p>{description}</p>
            </section>

            {secondTitle && secondDescription && (
                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-[#2D81B2]">
                        {secondTitle}
                    </h3>
                    <p>{secondDescription}</p>
                </section>
            )}
        </>
    ),
});

const projectDescriptions: Record<string, ProjectDescriptionEntry> = {
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
                        varaa ja siinä halusinkin kehittyä enemmän. Ainoa mistä
                        oli suurempi osaamisen puute oli projektinhallinta sekä
                        gitin selkeä käyttäminen
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

                    <p className="mb-3">
                        Opin käyttämään github projects
                        projektinhallintatyökalua. Descriptionien tärkeys tuli
                        opittua ehkä vähän liian myöhään ja se kuinka kuvaavia
                        niiden oikeasti työelämässä pitäisi olla. Toisaalta itse
                        sen päivittämisessä ja omien taskien siirtelyssä on
                        varmasti vielä lisää opittavaa
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
                    <p className="mb-3">
                        In a nutshell, what I did during TC: everything under
                        the backend folder, which includes; spotify-api
                        integration, spotify login, jwt tokens, utilizing api
                        routes in the application, sql queries to the database,
                        aws secret manager integration, creating a database,
                        retrieving and storing data in the database, application
                        logic, utilizing database data .
                    </p>

                    <p className="mb-3">
                        I chose these backend examples for the portfolio because
                        they best describe my own role in the project and where
                        I felt I developed the most during the course. The
                        examples represent real production code, security and
                        performance-oriented solutions.
                    </p>
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
    'portfolio-site': createSimpleDescription(
        'Portfolio Site Overview',
        'A personal portfolio website built to present my projects, technical skills, and background in a clear and professional way. Developed primarily with TypeScript, it highlights my frontend development skills, attention to UI structure, and ability to create a polished web presence.',
    ),
    'poll-serverless': createSimpleDescription(
        'Poll Serverless Overview',
        'A serverless backend project created as a final assignment for a backend course, built using AWS serverless technologies. This project demonstrates my understanding of cloud-based architecture, backend logic, and scalable application design, as well as my ability to work with modern backend deployment models.',
    ),
    'reaction-game': createSimpleDescription(
        'Reaction Game Overview',
        'A mobile application development course final project focused on creating a reaction-based game experience. Built with TypeScript and supported by SCSS, HTML, and JavaScript, the project demonstrates my ability to develop interactive mobile-friendly applications and combine functionality with responsive visual design.',
    ),
    'rock-paper-scissors': createSimpleDescription(
        'Rock Paper Scissors Overview',
        'A backend course final project centered around implementing the classic Rock Paper Scissors game. Built with JavaScript and EJS, it showcases my understanding of server-side programming, dynamic rendering, and application logic, while also demonstrating the ability to turn simple concepts into fully working web applications.',
    ),
    GamingTrivia: createSimpleDescription(
        'GamingTrivia Overview',
        'A frontend course final project featuring an interactive gaming-themed trivia game built with Svelte, JavaScript, HTML, and CSS. This project highlights my ability to create engaging user interfaces, structure frontend application logic, and deliver interactive experiences with a modern frontend framework.',
    ),
    RelaxationWebsite: createSimpleDescription(
        'Relaxation Website Overview',
        'A school project website created with HTML, CSS, and a small amount of JavaScript, with a focus on layout, styling, and user-friendly presentation. It reflects my foundation in core web technologies and my ability to design and build clean, visually consistent static websites.',
    ),
    RahasadePeli: createSimpleDescription(
        'RahasadePeli Overview',
        'A Python-based game developed for the MOOC 2024 programming course. This project demonstrates my understanding of programming fundamentals, problem-solving, and logic building, while also showing my ability to apply those skills in a practical and interactive project.',
    ),
    'currency-converter': createSimpleDescription(
        'Currency Converter Overview',
        'A currency converter application built with TypeScript, HTML, and CSS. The project demonstrates my ability to create useful everyday tools with a clean interface, handle user input effectively, and build practical frontend functionality with strong typing and structured code.',
    ),
    book_register: createSimpleDescription(
        'Book Register Overview',
        'A simple PHP application with database integration for managing and displaying book information. This project highlights my understanding of backend development fundamentals, working with databases, and building applications that combine server-side logic with persistent data storage.',
    ),
};

export default projectDescriptions;

export const internshipPaymentCaseStudy = [
    {
        id: 'overview',
        title: 'Overview',
        paragraphs: [
            'During my internship, I contributed to an existing business platform across backend development, database design, frontend features, and development infrastructure. My main responsibility was implementing a complete payment workflow, connecting price negotiation, transport quotes, payment collection, and transfers to participating companies.',
            'The company was continuing development of a codebase originating from an EU-funded project. The current implementation is private, so this case study focuses on my engineering contribution. The payment workflow allowed buyers to submit bids, respond to counteroffers, compare transport quotes, and pay the agreed total through one payment flow.',
            'I worked alongside another frontend intern and two project leads. I owned the payment-related implementation and contributed to decisions about feature scope and priorities. I also created transactional emails, background jobs, development tooling, and a Linux deployment for stakeholder review.',
            <p key="thesis-link">
                I also wrote my thesis about this payment process. For a deeper look at its design and implementation, you can{' '}
                <a
                    href="https://www.theseus.fi/server/api/core/bitstreams/239a64a3-3040-42af-849f-65a68b56d3e4/content"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5DAEDE] underline hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5DAEDE]"
                >
                    read my thesis on Theseus (PDF)
                </a>.
            </p>,
        ],
    },
    {
        id: 'technical',
        title: 'Technical decisions',
        paragraphs: [
            'The existing application uses Vue 3 and Ionic on the frontend, with a Node.js/Express backend and PostgreSQL database. I implemented the payment workflow across these layers, building REST API endpoints for bidding, orders, transport quotes, payment initialization, and company payment onboarding. The frontend calls the APIs through Axios, while Sequelize models define database relationships and support transactional updates.',
            'I selected Stripe Connect for its available features, ease of integration, and accessible starting cost. The implementation uses separate charges and transfers, allowing the platform to collect a payment before transferring the appropriate amounts to participating companies.',
            <div key="payment-stages" className="space-y-4">
                <p>The payment workflow connects five stages:</p>
                <ol className="list-decimal pl-5 space-y-4">
                    <li><strong>Company onboarding.</strong> Sellers and participating logistics companies complete Stripe Connect onboarding. The application stores their connected account identifiers and updates their payment capabilities through Stripe webhooks.</li>
                    <li><strong>Purchasing and bidding.</strong> Buyers can purchase at the listed price or submit a bid for a chosen quantity. Sellers can accept, reject, or counter a bid, and buyers can accept a counteroffer. Proceeding with an accepted bid creates an order using the agreed price and quantity; accepting the bid does not itself charge the buyer.</li>
                    <li><strong>Transport quotes.</strong> Where buyers arrange transport through the platform, multiple logistics companies can submit prices. The buyer selects a quote before checkout, making the item price and transport cost visible before payment.</li>
                    <li><strong>Payment collection.</strong> The buyer pays through Stripe’s Payment Element. The backend initializes payment using the recorded order amounts, and a verified Stripe webhook confirms successful payment and updates the database. For orders with a selected transport quote, one payment covers both the item and transport.</li>
                    <li><strong>Recipient transfers.</strong> The application initiates transfers to the seller and, where applicable, the logistics company when the buyer confirms delivery. A scheduled process also supports automatic release after a configured post-shipment deadline. The transfers account for each recipient’s share and the platform’s commission.</li>
                </ol>
            </div>,
            'I kept orders, payments, and recipient transfers in separate database records because they represent different stages of the workflow. Order and payment amounts are stored as integer minor units, such as cents. Database transactions and row locks coordinate related changes, including reserving available quantities when an order is created. Failure handling includes restoring reserved quantities if payment initialization fails.',
            'The payment APIs use the application’s JWT authentication, with company membership, administrator, and buyer/seller checks on relevant operations. Server-side validation checks required fields, prices, quantities, and workflow state. Webhook processing verifies Stripe signatures and checks payment identifiers, amounts, currencies, and allowed status transitions before recording success. Idempotency keys help prevent repeated external requests from creating duplicate transfers or refunds.',
            'I organized payment-related code into routes, business services, Stripe integration modules, models, email templates, and schedulers. I also revised database relationships and removed some unused tables while extending the inherited codebase. Background jobs handle reminders, stale orders, and delayed transfer release.',
            'I created transactional email templates and tested their output with MailHog. I also worked with Finnish, English, and Swedish language files in both the frontend and backend. On the frontend, I implemented payment-related pages and made smaller responsive and UI changes, including the front-page category menu.',
            'To support development, I created a shared Docker Compose configuration that starts the backend and supporting services together, including PostgreSQL, MailHog, object storage, and analytics services. The frontend runs separately. I also created a demo-data script that populates sample companies and offers through authenticated API calls, and deployed the application to a Linux server so the team could review progress remotely.',
            'Testing was manual and incremental. Using Postman, the application, database records, and Stripe’s test environment, I verified company onboarding, payment initialization, successful webhook updates, and seller transfers with commission deducted. I tested email output separately with MailHog. The payment workflow was not validated with real transactions or production users.',
        ],
    },
    {
        id: 'learning',
        title: 'Challenges & learning',
        paragraphs: [
            'The most significant adjustment involved choosing the correct Stripe payment model. I initially planned to use manual payouts, but discovered that controlling when funds leave a connected account for a bank account did not provide the transfer control the application needed. I changed the implementation to separate charges and transfers and revised the database structure accordingly.',
            'Adding a logistics company as another payment recipient introduced a second design challenge. An early option was for logistics companies to invoice buyers separately at the end of the month. Through discussion, I identified that buyers should know the transport cost before committing to payment. I implemented a quote-selection stage so the buyer could accept a transport price and pay the combined total.',
            'Working in an unfamiliar codebase taught me how to trace existing behavior before extending it. Database relationships required particular attention because the new workflow had to connect negotiation, orders, payments, and recipients without losing their separate responsibilities. I also gained experience explaining implementation progress and discussing scope with project leads.',
            'The payment process was also the subject of my thesis, which required deeper study of Stripe Connect, webhooks, and payment workflow design. If starting again, I would validate the complete movement of funds against the provider’s payment models earlier, before committing to the database design.',
            'I used GitHub Copilot for implementation assistance, debugging, identifying potential security issues, and smaller UI changes. I divided work into manageable tasks, reviewed generated changes, and investigated unfamiliar approaches to keep my understanding aligned with the implementation.',
        ],
    },
];

export const workPulseCaseStudy = [
    {
        id: 'overview',
        title: 'Overview',
        paragraphs: [
            'WorkPulse is a web application for people who forget to take breaks while working at a computer. Users can create reusable work sessions, configure break intervals and individual break durations, and receive browser notifications when breaks start and end. A dashboard lets them manage saved sessions and view accumulated work time.',
            'I built WorkPulse independently, mainly during summer 2025, to turn a problem I had noticed myself into a working application. I defined the features, implemented the application, configured Supabase, and deployed it to Netlify. I used ChatGPT for ideas and some implementation assistance, alongside UI elements from a library and AI-assisted styling.',
        ],
    },
    {
        id: 'technical',
        title: 'Technical decisions',
        paragraphs: [
            'WorkPulse uses Next.js, React, and TypeScript, with Tailwind CSS for styling. Next.js Server Actions handle authentication and database mutations, while client components manage forms, countdowns, notifications, and dashboard updates.',
            'I chose Supabase to provide a hosted database and authentication for an application I wanted to make publicly accessible. It allowed me to store sessions, breaks, and work logs without building and hosting a separate backend service. Supabase database functions and triggers calculate accumulated work time from the logs.',
            'The dashboard combines an initial server-side data fetch with Supabase Realtime subscriptions. When session, break, or work-log records change, the client fetches updated data so the displayed session information stays current.',
            'One implementation challenge was keeping session editing consistent as the number of breaks changed. The two-step editor first collects the session duration and break interval, then generates the individual break fields. When saving an edit, it updates existing breaks, inserts additional ones, and deletes those no longer needed.',
            'The timer flow separates the overall session countdown from break scheduling. The break scheduler tracks the current break, switches between work and break states, and uses each break’s configured duration. Browser notifications announce those transitions.',
            'I tested complete sessions manually in both the development environment and the deployed application, including runs with shorter timers. I also tested with two accounts to check that users could not see each other’s sessions. Netlify was connected to GitHub so repository updates triggered new deployments.',
        ],
    },
    {
        id: 'learning',
        title: 'Challenges & learning',
        paragraphs: [
            'The hardest part was coordinating multiple breaks with different durations. During development, breaks sometimes advanced incorrectly, lasted for the wrong amount of time, or left the next break starting at an unexpected point.',
            'The resulting implementation tracks the current break explicitly and calculates scheduled break times relative to the session start. Working on this flow gave me practical experience coordinating React state, effects, and time-based behavior across several components.',
            'WorkPulse was also my first project using a hosted database service. I learned to connect application features to Supabase queries, authentication, database functions, and triggers. By the end, I was more comfortable using its database API and building persistent features without a separate backend application.',
            'The project took my own idea through implementation, database integration, testing, and public deployment. It remains a completed learning project, with no planned further development.',
        ],
    },
];

export const docGenCaseStudy = [
    {
        id: 'overview',
        title: 'Overview',
        paragraphs: [
            'DocGen is a personal project that helps JavaScript and TypeScript developers document and understand code. Users paste code into a browser editor and generate JSDoc, inline comments, README drafts, explanations, or refactoring suggestions. Results stream into the interface and can be copied for further editing.',
            'I built it to explore AI API integration and agentic development with Codex in VS Code. I defined the project’s purpose, chose the main technology stack, and wrote a Markdown plan to guide development. Codex generated the implementation; my work centered on planning, discussing decisions, reviewing the generated code with AI assistance, and manually checking the application.',
        ],
    },
    {
        id: 'technical',
        title: 'Technical decisions',
        paragraphs: [
            'DocGen uses a React and TypeScript frontend with a Monaco code editor, connected to an Express backend. The backend sends the submitted code to Google Gemini with instructions specific to the selected task. The application has no database or account system.',
            'I chose React to gain more experience with it and Express because it was my most familiar backend framework. Using TypeScript on the backend extended my experience beyond my previous JavaScript backend projects. Codex suggested Gemini after we discussed using a model available without paid usage.',
            <div key="implementation-details" className="space-y-4">
                <p>Two implementation details are particularly relevant:</p>
                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <strong>Streaming and cancellation:</strong> The backend forwards Gemini’s response through Server-Sent Events, and the frontend progressively displays the text. An AbortController supports stopping generation, while the backend passes cancellation to the provider when the client disconnects. A configurable timeout also limits generation duration.
                    </li>
                    <li>
                        <strong>Testing without the AI service:</strong> The Express application receives its generation function as a dependency. Backend tests substitute simulated text streams, allowing request validation, mode selection, rate limiting, and streamed responses to be checked without calling Gemini.
                    </li>
                </ul>
            </div>,
            'Zod validates incoming requests and environment configuration. The backend keeps the API key server-side, limits input length, and applies an in-memory IP-based rate limit. The interface renders documentation as Markdown and commented source as plain code.',
            'I manually checked the application’s behavior but did not personally run the automated tests. In my trials, generation quality was uneven. I used Gemini without paid usage to keep the experiment cost-free, and the results reinforced the need to review generated documentation before using it.',
        ],
    },
    {
        id: 'learning',
        title: 'Challenges & learning',
        paragraphs: [
            'The main challenge was developing a clear understanding of code that Codex had largely produced. In earlier personal projects, familiarity with the structure grew as I implemented features. Here, I accepted most implementations without detailed review, so understanding the overall system required more deliberate reading and discussion afterward.',
            'I read through the code, examined the architecture, and revisited the implementation with AI assistance. This helped me understand how an application sends code to an AI service and receives a streamed response. It also gave me firsthand experience of how much implementation work an agent can handle and how that changes my involvement in the development process.',
            'For a similar project, I would spend more time understanding the generated implementation and take a more active role in defining and checking tests. I would also consider using another model for an additional review. The project left me thinking more carefully about what I need to understand and verify before accepting AI-generated work.',
        ],
    },
];

export const waveSpacerCaseStudy = [
    {
        id: 'overview',
        title: 'Overview',
        paragraphs: [
            'WaveSpacer helps Spotify listeners find and remove playlist tracks they rarely play. Users connect their Spotify account, select a playlist, and review cleanup suggestions based on listening history collected by the application. A dashboard also displays recent tracks, profile information, and genre summaries.',
            'I developed almost the entire backend and contributed substantially to the database design in a five-person course team in autumn 2025. My responsibilities included Spotify integration, authentication, listening-history collection, database queries, database design and structure, and AWS Secrets Manager integration. Other team members handled the frontend, cloud infrastructure, UI/UX, and general development support.',
        ],
    },
    {
        id: 'technical',
        title: 'Technical decisions',
        paragraphs: [
            'WaveSpacer connects an Angular frontend to a Node.js and Express backend through a REST-style HTTP API. I implemented endpoints for profiles, playlists, listening history, statistics, and track removal. The frontend exchanges JSON with these endpoints, while the backend handles Spotify Web API requests and MySQL persistence.',
            'I organized the backend into routes, controllers, services, models, and query repositories. This separated HTTP request handling, Spotify integration, and database operations so that each part had a focused responsibility. Express middleware handles JSON request parsing, cookies, authentication, and CORS configuration for requests from the frontend.',
            'I chose MySQL because it was familiar from my studies and suited the relationships between users, songs, listening events, artists, and genres. The database uses linking tables for many-to-many relationships. I implemented SQL joins and aggregation to retrieve track details and summaries, bulk inserts to save collected data, and upserts to update existing records. Database access uses a connection pool and parameterized queries in many operations.',
            'One substantial implementation was the listening-history collection pipeline. A cron job retrieves recent Spotify activity for registered users, checks timestamps against stored history, fetches artist and genre information, and saves the related records. Playlist cleanup combines this stored history with Spotify playlist data. The current rule suggests tracks with five or fewer recorded plays, ordered from least played. These counts reflect activity collected by WaveSpacer rather than a user’s complete Spotify history.',
            'Authentication combines Spotify’s OAuth 2.0 authorization-code flow with JWT-based application authentication. The backend exchanges the Spotify authorization code for access and refresh tokens, then issues its own four-hour JWT in an HTTP-only cookie. Authentication middleware verifies that JWT before protected endpoints run. In production, the cookie also uses the Secure attribute.',
            'Spotify tokens are encrypted using AES-256-GCM before database storage. The backend checks access-token expiry and uses refresh tokens to renew access, allowing scheduled listening-history collection without an active browser session.',
            'I implemented AWS Secrets Manager integration to load production configuration before initializing the database and application. The team deployed the application using EC2, RDS, S3, and CloudFront. GitHub Actions workflows automate deployment, and PM2 manages the backend process.',
            'I tested backend behavior manually with real Spotify accounts and database queries, checking that records changed as expected. School friends also connected their accounts to test automated collection. Request handlers include error handling and logging, although validation and error responses remain areas for improvement. The project does not include an automated backend test suite.',
        ],
    },
    {
        id: 'learning',
        title: 'Challenges & learning',
        paragraphs: [
            'WaveSpacer was my first integration of this scale, and authentication was one of the most significant learning challenges. I initially explored passing the JWT through the URL before moving to a cookie-based approach. Understanding how the backend issued the cookie and how the browser returned it with authenticated requests took experimentation.',
            'I investigated cookie behavior through browser developer tools and discussed JWT handling with teachers and more experienced developers. This helped me understand the distinction between application authentication and Spotify authorization, including why background collection needs refresh tokens independently of the user’s browser session.',
            'Working in the same room as the frontend developer and cloud specialist made integration a daily conversation. We could resolve questions about API behavior and configuration directly, while the cloud specialist helped me build a better understanding of AWS.',
            'I wrote the backend with occasional ChatGPT support for questions, implementation approaches, and security discussions. The backend architecture and much of the database design were my own work, supported by feedback from teachers and other developers.',
            'Looking back, I would define a clearer boundary between the application’s listening-history logic and Spotify-specific integration. Some database decisions anticipated other music services, but the implementation remains closely tied to Spotify.',
        ],
    },
    {
        id: 'next-steps',
        title: 'Next steps',
        paragraphs: [
            'I am considering adding an import flow for listening-history data that users request from Spotify. This would address a current limitation: WaveSpacer only knows the listening activity it has collected.',
            'With a longer history, I want to explore more useful playlist-cleaning criteria, such as listening frequency over the past year, time spent listening to each track, and when a song was added to a playlist. Recently added tracks would need different treatment from songs that have remained unplayed for months.',
        ],
    },
];
