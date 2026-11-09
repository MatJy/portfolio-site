import { Link } from 'react-router-dom';
import useProjects from '../hooks/useProjects';
import React from 'react';
import ProjectStateNotice from './ProjectStateNotice';
import TechnologyBadge from './TechnologyBadge';

import githubLogo from '../assets/logos/github.png';

const ProjectsPage = () => {
    const { projects, loading, error } = useProjects();

    const addDefaultImg = (ev: React.SyntheticEvent) => {
        const target = ev.target as HTMLImageElement;
        target.src = 'default.jpg';
    };

    const formatDate = (dateString: string | null) => {
        if (!dateString) return null;

        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    };

    return (
        <div className="pt-0 flex flex-col items-center min-h-screen bg-[#1B2838]">
            <div className="bg-[#2A3340] text-white w-full xxl:w-185 h-25 content-center px-4 md:px-10 pb-5">
                <div className="flex items-end gap-2">
                    <h3 className="text-2xl md:text-3xl hover:text-[#5DAEDE]">
                        <Link to="/">Matias</Link>
                    </h3>
                    <p className="text-sm md:text-base">» All Projects</p>
                </div>
                <p className="text-xs">(to the main page)</p>
            </div>

            <h1 className="text-2xl md:text-3xl mb-4 text-white pt-4">
                All Projects
            </h1>

            <div className="w-full max-w-xl md:max-w-2xl flex flex-col gap-2 px-3 md:px-0">
                {loading && (
                    <ProjectStateNotice
                        title="Loading projects"
                        message="Fetching the full project list."
                    />
                )}

                {!loading && error && (
                    <ProjectStateNotice
                        title="GitHub projects unavailable"
                        message={`${error}. Locally maintained case studies are still available below.`}
                        tone="error"
                    />
                )}

                {!loading && !error && projects.length === 0 && (
                    <ProjectStateNotice
                        title="No projects found"
                        message="The project list is empty right now."
                        tone="empty"
                    />
                )}

                {projects.map((project) => (
                        <div
                            key={project.name}
                            className="
                            relative
                            bg-[#16202D]
                            p-3
                            rounded-md
                            w-full
                            flex flex-col md:flex-row
                            md:items-start
                            gap-3
                            mb-4
                        "
                        >
                            <Link
                                to={`/projects/${project.name}`}
                                className="
                            hidden
                            md:block
                            absolute
                            top-3 right-3
                            text-sm
                            text-[#5DAEDE]
                            hover:underline
                            z-10"
                            >
                                See more →
                            </Link>

                            <Link
                                to={`/projects/${project.name}`}
                                className="relative w-full md:w-40 xxl:w-45 flex-shrink-0"
                            >
                                {project.isPrivate ? (
                                    <div className="flex min-h-28 h-full flex-col justify-center rounded-md border border-[#5DAEDE]/30 bg-[#24374a] p-4 text-white">
                                        <span className="text-xs uppercase tracking-widest text-[#5DAEDE]">Internship</span>
                                        <span className="mt-2 text-lg font-semibold">{project.displayName ?? project.name}</span>
                                        <span className="mt-2 text-sm text-gray-300">Read case study →</span>
                                    </div>
                                ) : (
                                    <>
                                <img
                                    src={`/projekti_trailerit/${project.name}_kuva.png`}
                                    alt={project.name}
                                    onError={addDefaultImg}
                                    className="w-full h-48 md:h-28 xxl:h-auto object-cover rounded-md block"
                                />

                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-40 hover:opacity-70 transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-white opacity-90"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                    </>
                                )}
                            </Link>

                            <div className="text-white flex flex-col flex-grow">
                                {project.isPrivate ? (
                                    <>
                                        <span className="text-xs font-semibold text-[#5DAEDE] mb-2 md:pr-24">Internship · Private project</span>
                                        <Link to={`/projects/${project.name}`} className="text-xl md:text-2xl mb-2 hover:underline">
                                            {project.displayName ?? project.name}
                                        </Link>
                                    </>
                                ) : (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                    text-xl md:text-2xl
                                    mb-2 md:mb-4
                                    hover:underline
                                    flex items-center gap-2
                                    w-fit
                                "
                                >
                                    {project.name}
                                    <img
                                        src={githubLogo}
                                        alt="github logo"
                                        className="w-6 h-6"
                                    />
                                </a>
                                )}

                                {project.deployLink.length > 1 && (
                                    <a
                                        href={project.deployLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                        hover:underline
                                        pb-2
                                        flex items-center gap-2
                                        w-fit
                                        text-sm
                                    "
                                    >
                                        <p>View Project on Netlify</p>
                                        <img
                                            src="/netlify.svg"
                                            alt="netlify logo"
                                            className="w-7 h-7"
                                        />
                                    </a>
                                )}

                                <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-2">
                                    {project.latestCommit && <div className=" gap-2 text-sm">
                                        <p className="font-bold">
                                            Latest commit:
                                        </p>
                                        <p>
                                            {formatDate(project.latestCommit)}
                                        </p>
                                    </div>
                                    }

                                    <div className="flex flex-col gap-1">
                                        <p className="font-bold text-sm">
                                            Technologies:
                                        </p>
                                        <div className="flex flex-wrap items-center gap-2">
                                            {project.technologies.map(
                                                (tech) => <TechnologyBadge key={tech} technology={tech} />,
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to={`/projects/${project.name}`}
                                    className="md:hidden mt-3 text-sm text-[#5DAEDE] hover:underline w-fit"
                                >
                                    See more →
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
