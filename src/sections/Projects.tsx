import { useNavigate, Link } from 'react-router-dom';
import useProjects from '../hooks/useProjects';
import '../index.css';

import githubLogo from '../assets/logos/github.png';

const Projects = () => {
    const navigate = useNavigate();

    const logos: Record<string, { default: string }> = import.meta.glob(
        '../assets/logos/*.png',
        { eager: true }
    );

    const addDefaultImg = (ev: React.SyntheticEvent) => {
        const target = ev.target as HTMLImageElement;
        target.src = 'default.jpg';
    };

    const getLogo = (tech: string) => {
        const entries = Object.entries(logos);
        const match = entries.find(([path]) =>
            path.toLowerCase().includes(tech.toLowerCase())
        );
        return match ? match[1].default : null;
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
        <section className="bg-[#1B1820] pb-2 rounded-sm text-white">
            <p className="bg-[#2B3244] p-2 rounded-t-sm text-xl md:text-2xl">
                Recent Activity
            </p>

            {projects.slice(0, 3).map((project) => (
                <div
                    key={project.name}
                    className="bg-[#0B0B0F] mt-6 mx-3 md:mx-4 mb-4 rounded-sm p-3 relative"
                >
                    {/* See more – desktop */}
                    <Link
                        to={`/projects/${project.name}`}
                        className="
                            hidden md:block
                            absolute top-2 right-2
                            text-sm
                            text-[#5DAEDE]
                            hover:underline
                        "
                    >
                        See more →
                    </Link>

                    {/* Top section */}
                    <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                        {/* Image */}
                        <Link
                            to={`/projects/${project.name}`}
                            className="relative group w-full max-w-xs md:w-40"
                        >
                            <img
                                src={`/projekti_trailerit/${project.name}_kuva.png`}
                                alt={project.name}
                                onError={addDefaultImg}
                                className="w-full rounded-sm"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-40 group-hover:opacity-80 transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </Link>

                        {/* Info */}
                        <div className="flex flex-col flex-grow w-full">
                            {/* Title */}
                            <a
                                href={project.github}
                                className="
                                    text-xl md:text-2xl
                                    hover:text-[#5DAEDE]
                                    flex items-center gap-2
                                    self-center md:self-start
                                    text-center md:text-left
                                    pb-1
                                "
                            >
                                {project.name}
                                <img
                                    src={githubLogo}
                                    alt="github logo"
                                    className="w-5 h-5 md:w-6 md:h-6"
                                />
                            </a>

                            {/* See more – mobile */}
                            <Link
                                to={`/projects/${project.name}`}
                                className="
                                    md:hidden
                                    text-sm
                                    text-[#5DAEDE]
                                    hover:underline
                                    self-center
                                    pb-2
                                "
                            >
                                See more →
                            </Link>

                            {/* Deploy link */}
                            {project.deployLink.length > 1 && (
                                <a
                                    href={project.deployLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        hover:underline
                                        flex items-center gap-2
                                        w-fit
                                        self-center md:self-start
                                    "
                                >
                                    <span>View project on Netlify</span>
                                    <img
                                        src="/netlify.svg"
                                        alt="netlify logo"
                                        className="w-6 h-6"
                                    />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end mb-1">
                        <p className="text-sm opacity-80">
                            Last committed on {formatDate(project.latestCommit)}
                        </p>
                    </div>

                    {/* Technologies box */}
                    <div
                        className="
                            bg-[#21222E]
                            p-3
                            rounded-sm
                            flex flex-col sm:flex-row
                            gap-2
                            sm:justify-between
                            items-start sm:items-center
                        "
                    >
                        <p>Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech: string) => {
                                const logo = getLogo(tech);

                                return logo ? (
                                    <img
                                        key={tech}
                                        src={logo}
                                        alt={`${tech} logo`}
                                        className="w-8 h-8 md:w-10 md:h-10"
                                    />
                                ) : null;
                            })}
                        </div>
                    </div>
                </div>
            ))}

            {/* Footer link */}
            <div className="flex justify-center md:justify-end pr-0 md:pr-4">
                <button
                    onClick={() => navigate('/projects')}
                    className="hover:text-[#5DAEDE]"
                >
                    All projects
                </button>
            </div>
        </section>
    );
};

export default Projects;
