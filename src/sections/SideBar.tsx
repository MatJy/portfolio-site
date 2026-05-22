import { useNavigate } from 'react-router-dom';
import githubLogo from '../assets/logos/github.png';
import '../index.css';
import useProjects from '../hooks/useProjects';

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/MatJy',
        icon: <img src={githubLogo} alt="GitHub" className="h-7 w-7" />,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/matias-j-08aa862a8/',
        icon: (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-7 w-7 fill-[#5daede]"
            >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM5 8H0v16h5V8Zm7.98 0H8.01v16h4.97v-8.4c0-4.67 6.02-5.05 6.02 0V24H24v-10.13c0-7.88-8.92-7.6-11.02-3.72V8Z" />
            </svg>
        ),
    },
];

const SideBar = () => {
    const navigate = useNavigate();
    const { projects, loading, error } = useProjects();
    const projectCount = loading ? '...' : error ? '-' : projects.length;

    return (
        <section className="text-center">
            <div className="hidden xxl:block text-left pl-2 text-white bg-[#1B1820] xxl:w-80 pb-4 xxl:h-400 xxl:mt-6">
                <p className="text-[#90BA3C] text-2xl">Open to opportunities</p>
                <p className="text-[#90BA3C] text-lg">Junior developer roles</p>
                <div className="mt-5 mr-2">
                    <div className="flex items-end gap-2 text-white">
                        <p>Profile links</p>
                        <p className="text-2xl text-[#9A9A9A]">
                            {socialLinks.length}
                        </p>
                    </div>
                    <div className="mt-3 flex gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                title={link.name}
                                className="group flex h-8 w-8 items-center justify-center transition hover:opacity-80"
                            >
                                <span className="transition group-hover:scale-105">
                                    {link.icon}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                <br className="hidden xxl:block" />
                <a
                    className="group cursor-pointer hidden xxl:flex items-end gap-2 w-fit"
                    onClick={() => navigate('/projects')}
                >
                    <span className="group-hover:underline">All projects</span>
                    <span className="text-2xl text-[#9A9A9A]">
                        {projectCount}
                    </span>
                </a>
            </div>

            <div className="xxl:hidden mt-1 text-left flex flex-col gap-1 w-full">
                <div className="text-[#90BA3C] bg-[#1B1820] px-3 py-2 w-full">
                    <p className="text-xl">Open to opportunities</p>
                    <p className="text-base">Junior developer roles</p>
                </div>

                <div className="text-white bg-[#1B1820] px-3 py-2 inline-block w-fit">
                    <div className="flex items-end gap-2">
                        <p>Profile links</p>
                        <p className="text-2xl text-[#9A9A9A]">
                            {socialLinks.length}
                        </p>
                    </div>
                    <div className="mt-2 flex gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                title={link.name}
                                className="group flex h-8 w-8 items-center justify-center transition hover:opacity-80"
                            >
                                <span className="transition group-hover:scale-105">
                                    {link.icon}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                <a
                    className="cursor-pointer text-white bg-[#1B1820] px-3 py-1 inline-flex items-end gap-2 w-fit"
                    onClick={() => navigate('/projects')}
                >
                    <span>All projects</span>
                    <span className="text-2xl text-[#9A9A9A]">
                        {projectCount}
                    </span>
                </a>
            </div>
        </section>
    );
};

export default SideBar;
