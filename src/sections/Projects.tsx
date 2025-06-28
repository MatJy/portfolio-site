import useProjects from '../hooks/useProjects';
import '../index.css';

const Projects = () => {
    const { projects } = useProjects();
    const formatDate = (dateString: string | null) => {
        if (!dateString) return null;

        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    };

    return (
        <section className="bg-[#1B1820]  pb-1 rounded-sm text-white">
            <p className="bg-[#2B3244] p-2 rounded-t-sm text-2xl">
                Recent Activity
            </p>
            {projects.slice(0, 3).map((project) => (
                <div
                    key={project.name}
                    className="bg-[#0B0B0F] mt-6 mx-4 mb-4 pb-1 rounded-sm "
                >
                    <a
                        className="text-2xl xxl:text-2xl p-2 hover:text-[#5DAEDE]"
                        href={project.github}
                    >
                        {project.name}
                    </a>
                    <p className="text-right pr-2">
                        {' '}
                        last committed on {formatDate(project.latestCommit)}
                    </p>
                    <div className="bg-[#21222E] p-3 rounded-sm mt-2 mx-2 mb-1 flex justify-between">
                        <p>Languages used</p>
                        <p>{project.languages.join(', ')}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Projects;
