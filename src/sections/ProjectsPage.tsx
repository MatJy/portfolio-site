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
            <div className=" w-100 xxl:w-2xl flex flex-col gap-6">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="bg-[#16202D] p-6 rounded-sm w-full flex gap-4 items-start"
                    >
                        <img
                            src={`/projekti_trailerit/${project.name}_kuva.png`}
                            alt={project.name}
                            onError={addDefaultImg}
                            className="w-40 h-auto rounded-sm flex-shrink-0"
                        />

                        <div className="text-white flex flex-col flex-grow">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl mb-4 hover:underline"
                            >
                                {project.name}
                            </a>

                            <div className="xxl:flex gap-5">
                                <div>
                                    <p className="font-bold">Latest commit:</p>
                                    <p>{formatDate(project.latestCommit)}</p>
                                </div>
                                <div>
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
