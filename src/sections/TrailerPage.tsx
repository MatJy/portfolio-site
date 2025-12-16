import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import useProjects from '../hooks/useProjects';

import githubLogo from '../assets/logos/github.png';
import { Link } from 'react-router-dom';
import projectDescriptions from '../content/projectDescriptions';

const TrailerPage = () => {
    const { projectName } = useParams();
    const videoRef = useRef<HTMLVideoElement>(null);
    const { projects } = useProjects();
    const [language, setLanguage] = useState<'fi' | 'en'>('fi');

    let githubLink;

    const addNoTrailer = () => {
        if (videoRef.current) {
            videoRef.current.src = '/projekti_trailerit/no_trailer.mp4';
            videoRef.current.load();
        }
    };

    return (
        <div className="xxl:pt-10 flex flex-col items-center min-h-screen bg-[#1B2838]">
            <div className="xxl:w-3/5 w-screen">
                {projects.map((project) => {
                    if (project.name === projectName) {
                        githubLink = project.github;
                        return (
                            <a
                                key={project.name}
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-4xl pb-2 hidden xxl:flex items-center gap-2 hover:underline w-fit"
                            >
                                {project.name}
                                <img
                                    src={githubLogo}
                                    alt="github logo"
                                    className="w-6 h-6"
                                />
                            </a>
                        );
                    }
                })}
                <div className="xxl:bg-[#141B23]">
                    <video
                        controls
                        playsInline
                        autoPlay
                        className=""
                        ref={videoRef}
                        onError={addNoTrailer}
                    >
                        <source
                            src={`/projekti_trailerit/${projectName}.mp4`}
                            type="video/mp4"
                        />
                    </video>
                    <a
                        href={githubLink}
                        className="text-white text-4xl pb-2 flex items-center gap-2 pl-4 xxl:hidden underline"
                    >
                        {projectName}
                        <img
                            src={githubLogo}
                            alt="github logo"
                            className="w-6 h-6"
                        />
                    </a>
                    <div className="flex flex-col w-2/5 pl-4 pt-4 pb-4">
                        <Link to="/projects">
                            <button
                                className="
                                bg-[#2D81B2] hover:bg-[#4a94c9] 
                                text-white font-semibold 
                                px-4 py-2 rounded-md 
                                transition-colors duration-300
                                focus:outline-none focus:ring-2 focus:ring-[#4a94c9] cursor-pointer"
                            >
                                Back
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mt-5 mb-5 text-left text-white ml-4 mr-4 xxl:ml-0 xxl:mr-0">
                    <p>Information about the project</p>

                    <button
                        onClick={() =>
                            setLanguage((prev) => (prev === 'fi' ? 'en' : 'fi'))
                        }
                        className="text-sm text-[#2D81B2] hover:underline"
                    >
                        {language === 'fi' ? 'EN' : 'FI'}
                    </button>
                    <div className="mt-2 h-[1px] w-[90%] bg-gradient-to-r from-[#2D81B2] to-transparent" />

                    {projectDescriptions[projectName ?? '']?.[language] ?? (
                        <p>No description available for this project.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TrailerPage;
