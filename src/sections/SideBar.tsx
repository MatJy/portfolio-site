import { useNavigate } from 'react-router-dom';
import '../index.css';

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <section className="text-center">
            <div className="text-left pl-2 text-white bg-[#1B1820] xxl:w-80 pb-1 xxl:h-400 xxl:mt-6">
                <p className="text-green-500 text-2xl">Currently In-Studying</p>
                <p className="text-green-500 text-lg">Full Stack</p>
                <br className="hidden xxl:block" />
                <a
                    className="hover:underline cursor-pointer hidden xxl:block w-fit"
                    onClick={() => navigate('/projects')}
                >
                    All projects
                </a>
            </div>

            {/* Tämä div rajaa tilan ja siirtää linkin vasempaan laitaan mobiilissa */}
            <div className="xxl:hidden mt-1 text-left">
                <a
                    className="underline cursor-pointer text-white bg-[#1B1820] px-3 py-1 inline-block"
                    onClick={() => navigate('/projects')}
                >
                    All projects
                </a>
            </div>
        </section>
    );
};

export default SideBar;
