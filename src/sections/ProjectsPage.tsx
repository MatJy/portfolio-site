import { Link } from 'react-router-dom';
import useProjects from '../hooks/useProjects';
import React from 'react';

const ProjectsPage = () => {
    const { projects } = useProjects();

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
            <div className="bg-[#2A3340] text-white w-full xxl:w-185 h-25 content-center pl-10  pb-5">
                <div className="flex items-end gap-2">
                    <h3 className="text-3xl hover:text-[#5DAEDE]">
                        <Link to="/">Matias</Link>
                    </h3>
                    <p>» All Projects</p>
                </div>
                <p className="text-xs">(to the main page)</p>
            </div>
            <h1 className="text-3xl mb-4 text-white pt-4">All Projects</h1>
            <div className=" w-full md:w-2xl flex flex-col gap-2">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="bg-[#16202D] xxl:p-2 rounded-sm w-full flex gap-4 items-start mb-3"
                    >
                        <Link
                            to={`/trailer/${project.name}`}
                            className="relative group"
                        >
                            <img
                                src={`/projekti_trailerit/${project.name}_kuva.png`}
                                alt={project.name}
                                onError={addDefaultImg}
                                className="xxl:w-45 xxl:h-auto h-36 rounded-sm flex-shrink-0"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-40 group-hover:opacity-70 transition">
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

                        <div className="text-white flex flex-col flex-grow">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl mb-4 hover:underline flex items-center gap-2 w-65"
                            >
                                {project.name}
                                <img
                                    src="/github.png"
                                    alt="github logo"
                                    className="w-6 h-6"
                                />
                            </a>

                            <div className="md:flex gap-5">
                                <div className="flex md:grid gap-1 md:gap-0">
                                    <p className="font-bold">Latest commit:</p>
                                    <p>{formatDate(project.latestCommit)}</p>
                                </div>
                                <div className="flex md:grid gap-1 md:gap-0">
                                    <p className="font-bold">Languages:</p>
                                    <p>{project.languages.join(', ')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
