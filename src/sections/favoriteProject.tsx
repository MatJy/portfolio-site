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
    const favorite = projects.find((project) => project.name === 'WaveSpacer');

    if (!favorite) return null;

    return (
        <section className="bg-[#1B1820] pb-2 rounded-sm text-white">
            <p className="bg-[#2B3244] p-2 rounded-t-sm text-xl md:text-2xl">
                Favorite project
            </p>

            <div className="bg-[#0B0B0F] mt-6 mx-3 md:mx-4 mb-4 rounded-sm p-3 relative">
                <Link
                    to={`/projects/${favorite.name}`}
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
                        to={`/projects/${favorite.name}`}
                        className="relative group w-full max-w-xs md:w-40"
                    >
                        <img
                            src={`/projekti_trailerit/${favorite.name}_kuva.png`}
                            alt={favorite.name}
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
                            href={favorite.github}
                            className="
                                text-xl md:text-2xl
                                hover:text-[#5DAEDE]
                                flex items-center gap-2
                                self-center md:self-start
                                text-center md:text-right
                                pb-2 md:pb-6
                            "
                        >
                            {favorite.name}
                            <img
                                src={githubLogo}
                                alt="github logo"
                                className="w-5 h-5 md:w-6 md:h-6"
                            />
                        </a>

                        <Link
                            to={`/projects/${favorite.name}`}
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
                        {favorite.deployLink.length > 1 && (
                            <a
                                href={favorite.deployLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    hover:underline
                                    flex items-center gap-2
                                    w-fit
                                    self-center md:self-end
                                    pb-2
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

                {/* Technologies */}
                <div
                    className="
                        bg-[#21222E]
                        p-3
                        rounded-sm
                        mt-3
                        flex flex-col sm:flex-row
                        gap-2
                        sm:justify-between
                        items-start sm:items-center
                    "
                >
                    <p className="pr-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {favorite.technologies.map((tech: string) => {
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
        </section>
    );
};

export default FavoriteProject;
