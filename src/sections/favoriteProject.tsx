import useProjects from '../hooks/useProjects';
import '../index.css';
import { Link } from 'react-router-dom';

import githubLogo from '../assets/logos/github.png';

const FavoriteProject = () => {
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

    const favorite = projects.find((project) => project.name === 'WorkPulse');

    if (!favorite) {
        return null; // or some loading/error state
    }

    return (
        <section className="bg-[#1B1820]  pb-1 rounded-sm text-white">
            <p className="bg-[#2B3244] p-2 rounded-t-sm text-2xl">
                Favorite project
            </p>
            <div
                key={favorite.name}
                className="bg-[#0B0B0F] mt-6 mx-4 mb-4 pb-1 rounded-sm p-2"
            >
                <div className="flex gap-4 items-start">
                    <Link
                        to={`/trailer/${favorite.name}`}
                        className="relative group"
                    >
                        <img
                            src={`/projekti_trailerit/${favorite.name}_kuva.png`}
                            alt={favorite.name}
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
                            className="text-2xl hover:text-[#5DAEDE] pb-8 text-right xxl:pb-13 flex gap-2 items-center xxl:w-fit"
                            href={favorite.github}
                        >
                            {favorite.name}
                            <img
                                src={githubLogo}
                                alt="github logo"
                                className="w-6 h-6"
                            />
                        </a>

                        {favorite.deployLink.length > 1 && (
                            <a
                                href={favorite.deployLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline pb-2 flex items-center gap-2 w-fit"
                            >
                                <p>View Project on netlify</p>
                                <img
                                    src={'/netlify.svg'}
                                    alt="github logo"
                                    className="w-7 h-7"
                                />
                            </a>
                        )}
                    </div>
                </div>
                <div className="bg-[#21222E] p-3 rounded-sm mt-2 mb-1 flex justify-between">
                    <p className="pr-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                        {favorite?.technologies.map((tech: string) => {
                            const logo = getLogo(tech);

                            return logo ? (
                                <img
                                    key={tech}
                                    src={logo}
                                    alt={`${tech} logo`}
                                    className="w-10 h-10"
                                />
                            ) : null;
                        })}
                    </div>{' '}
                </div>
            </div>
        </section>
    );
};

export default FavoriteProject;
