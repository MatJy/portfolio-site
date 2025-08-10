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

            <div className="flex flex-col md:flex-row md:space-x-10">
                <div className="flex flex-row md:flex-col items-start space-x-4 h-50">
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

                <div className="md:w-120 w-full">
                    <p className="md:text-5xl md:pb-15 pt-4 hidden md:block ">
                        Matias Jylhä
                    </p>

                    <p className="text-xl md:text-2xl pt-3 md:pt-0">
                        Hello, and welcome to my portfolio website! I'm a
                        passionate programmer and video game enthusiast — hence
                        the theme 🎮. Here, I showcase my projects, share a bit
                        about myself, and highlight my professional side.
                    </p>
                </div>
                <div className="pt-7 text-lg xxl:h-50">
                    <p className="text-2xl md:text-4xl pb-5 hidden md:block">
                        Coder
                    </p>
                    <div className="bg-[#1B1820] p-2 pb-0 flex items-center">
                        <p className="pr-2 md:hidden">Coder</p>
                        <img
                            className="w-14 md:w-18"
                            src="/10projects.png"
                            alt=""
                        />
                        <div className="p-2">
                            <p>Adept coder</p>
                            <p>150 xp</p>
                        </div>
                    </div>
                    <div className="bg-[#1B1820] pl-2">
                        <p>{projects.length} projects done</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
