import './Home.css';
import '../index.css';

const Home = () => {
    return (
        <section className="p-0 pb-0 text-left text-white w-full">
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <div className="flex flex-col md:flex-row md:space-x-10">
                <p className="text-3xl pb-5 md:hidden">Matias Jylhä</p>
                <div className="flex flex-row md:flex-col items-start space-x-4 h-60">
                    <img
                        className="md:h-80 w-40 h-50 md:w-64 relative border-2 neon-glow border-gray-500 mb-20"
                        src="/omakuva.jpg"
                        alt="Picture of me"
                    />

                    <div className="pt-7 text-lg h-100 md:hidden">
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
                            <p>5 projects done</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-120 w-full">
                    <p className="md:text-5xl md:pb-15 md:pt-4 invisible md:visible ">
                        Matias Jylhä
                    </p>

                    <p className="text-xl md:text-2xl w-full">
                        Hello, and welcome to my portfolio website! I'm a
                        passionate programmer and video game enthusiast — hence
                        the theme 🎮. Here, I showcase my projects, share a bit
                        about myself, and highlight my professional side.
                    </p>
                </div>
                <div className="pt-7 text-lg h-100 hidden md:block">
                    <p className="text-2xl md:text-4xl pb-5">Coder</p>
                    <div className="bg-[#1B1820] p-2 pb-0 flex items-center">
                        <img
                            className="w-14 md:w-18"
                            src="/5_badge.png"
                            alt=""
                        />
                        <div className="p-2">
                            <p>Selected coder</p>
                            <p>135 xp</p>
                        </div>
                    </div>
                    <div className="bg-[#1B1820] pl-2">
                        <p>5 projects done</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
