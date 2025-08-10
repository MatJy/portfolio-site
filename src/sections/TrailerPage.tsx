import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import useProjects from '../hooks/useProjects';

import githubLogo from '../assets/logos/github.png';
import { Link } from 'react-router-dom';

const TrailerPage = () => {
    const { projectName } = useParams();
    const videoRef = useRef<HTMLVideoElement>(null);
    const { projects } = useProjects();
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
                <div className="xxl:bg-[#141B23] xxl:flex">
                    <video
                        controls
                        playsInline
                        autoPlay
                        className="flex-1 xxl:max-w-[60%]"
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
      bg-[#5DAEDE] hover:bg-[#4a94c9] 
      text-white font-semibold 
      px-4 py-2 rounded-md 
      transition-colors duration-300
      focus:outline-none focus:ring-2 focus:ring-[#4a94c9] cursor-pointer
    "
                            >
                                Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrailerPage;
