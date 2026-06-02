import '../index.css';

const skills = [
    'REST API Development',
    'API Integration',
    'Authentication',
    'Authorization',
    'Agentic Coding',
    'OAuth2',
    'JWT',
    'Database Design',
    'SQL Query Optimization',
    'Stripe Connect',
    'Payment Integrations',
    'Webhook Integration',
    'Transaction Management',
    'Backend Architecture',
    'API Security',
    'Responsive UI Development',
    'State Management',
    'Frontend Architecture',
    'Cloud Development',
    'ORM (Sequelize)',
    'Cron Jobs',
    'GitFlow workflow',
    'Agile Development',
    'Scrum',
    'Kanban',
];

const SkillsShowcase = () => {
    return (
        <section className="p-0 text-center">
            <div className="text-2xl text-white text-left bg-[#1B1820] rounded-sm xxl:w-197 pb-1">
                <div className="bg-[#2B3244] p-2 rounded-t-sm">
                    <p>Skills Showcase</p>
                </div>

                <div className="p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xxl:gap-3">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="min-h-11 flex items-center justify-center text-center text-xs sm:text-sm xxl:text-base leading-tight text-white bg-[#101318] border border-[#5DAEDE]/60 rounded-sm px-2 py-2"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

                <div className="bg-[#101318] p-3 rounded-sm mt-2 mx-4 mb-3">
                    <p className="text-3xl xxl:text-4xl">{skills.length}</p>
                    <p className="text-xl xxl:text-2xl">Skills Highlighted</p>
                </div>
            </div>
        </section>
    );
};

export default SkillsShowcase;
