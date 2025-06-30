import { useNavigate } from 'react-router-dom';
import useProjects from '../hooks/useProjects';
import '../index.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();

    const addDefaultImg = (ev: React.SyntheticEvent) => {
        const target = ev.target as HTMLImageElement;
        target.src = 'default.jpg';
    };

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
                    className="bg-[#0B0B0F] mt-6 mx-4 mb-4 pb-1 rounded-sm p-2"
                >
                    <div className="flex gap-4 items-start">
                        <Link
                            to={`/trailer/${project.name}`}
                            className="relative group"
                        >
                            <img
                                src={`/projekti_trailerit/${project.name}_kuva.png`}
                                alt={project.name}
                                onError={addDefaultImg}
                                className="w-40 h-auto rounded-sm flex-shrink-0"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-40 hover:opacity-80 transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-white "
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </Link>
                        <div className="flex flex-col flex-grow self-end">
                            <a
                                className="text-2xl hover:text-[#5DAEDE] pb-8 text-right xxl:pb-13 flex gap-3 items-center xxl:w-65"
                                href={project.github}
                            >
                                {project.name}
                                <img
                                    src="/github.png"
                                    alt="github logo"
                                    className="w-6 h-6"
                                />
                            </a>
                            <p className="text-right">
                                last committed on{' '}
                                {formatDate(project.latestCommit)}
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#21222E] p-3 rounded-sm mt-2 mx-2 mb-1 flex justify-between">
                        <p>Languages used</p>
                        <p>{project.languages.join(', ')}</p>
                    </div>
                </div>
            ))}

            <a
                className="hover:text-[#5DAEDE] cursor-pointer block text-right pr-4"
                onClick={() => navigate('/projects')}
            >
                All projects
            </a>
        </section>
    );
};

export default Projects;
