import './Home.css';
import '../index.css';
import useProjects from '../hooks/useProjects';

const Home = () => {
    const { projects } = useProjects();

    return (
        <section className="p-0 pb-0 text-left text-white w-full">
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <div className="flex flex-col lg:grid lg:grid-cols-[16rem_minmax(0,1fr)_20rem] lg:items-start lg:gap-8">
                <div className="flex flex-row md:flex-col items-start space-x-4 md:space-x-0 md:space-y-4 h-50 md:h-auto lg:w-64">
                    <img
                        className="md:h-80 w-40 h-50 md:w-64 relative border-2 neon-glow border-gray-500"
                        src="/omakuva.jpg"
                        alt="Picture of me"
                    />

                    {/* <div className="pt-7 text-lg h-100 md:hidden">
                        <p className="text-2xl md:text-4xl pb-5">Coder</p>
                        <div className="bg-[#1B1820] pb-0 flex items-center">
                            <img
                                className="w-14 md:w-18"
                                src="/5_badge.png"
                                alt=""
                            />
                            <div className="p-2 text-sm">
                                <p>Selected coder</p>
                                <p>135 xp</p>
                            </div>
                        </div>
                        <div className="bg-[#1B1820] pl-2">
                            <p>{projects.length} projects done</p>
                        </div>
                    </div> */}
                    <p className="text-2xl md:pb-15 pt-4 md:hidden ">
                        Matias Jylhä
                    </p>
                </div>

                <div className="w-full lg:min-w-0">
                    <p className="md:text-4xl lg:text-5xl md:pb-10 lg:pb-15 pt-4 hidden md:block ">
                        Matias Jylhä
                    </p>

                    <p className="text-xl md:text-2xl pt-3 md:pt-0 lg:max-w-3xl">
                        Hello, and welcome to my portfolio website! I'm a
                        passionate programmer and video game enthusiast, hence
                        the theme 🎮. Here, I showcase my projects, share a bit
                        about myself, and highlight my professional side.
                    </p>
                </div>
                <div className="pt-7 md:pt-5 lg:pt-2 text-lg w-full lg:w-80 lg:h-auto">
                    <div className="pb-5 hidden md:flex items-center  gap-3">
                        <p className="text-2xl md:text-3xl">Developer Rank</p>
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-500 text-base font-semibold leading-none">
                            Jr.
                        </span>
                    </div>
                    <div className="w-full bg-[#1B1820] p-2 pb-0 flex items-center rounded-sm">
                        <div className="pr-2 md:hidden text-sm flex items-center gap-2">
                            <p>Developer Rank</p>
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-orange-500 text-[10px] font-semibold leading-none">
                                Jr.
                            </span>
                        </div>
                        <img
                            className="w-14 md:w-18"
                            src="/10projects.png"
                            alt=""
                        />
                        <div className="p-2 text-sm md:text-lg">
                            <p>Junior Developer</p>
                            <p>150 xp</p>
                        </div>
                    </div>
                    <div className="w-full bg-[#1B1820] pl-2 rounded-sm mt-1">
                        <p>{projects.length} projects done</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
