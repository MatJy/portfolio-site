import { useNavigate } from 'react-router-dom';
import '../index.css';

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <section className="text-center">
            <div className=" xxl:text-left xxl:pl-2 text-white bg-[#1B1820] rounded-sm xxl:w-80 xxl:pb-1 xxl:h-400 xxl:mt-6">
                <p className="text-green-500 text-2xl">Currently In-Studying</p>
                <p className="text-green-500 text-lg">Full Stack</p>
                <br />
                <button
                    className="hover:underline "
                    onClick={() => navigate('/projects')}
                >
                    All projects
                </button>
            </div>
        </section>
    );
};

export default SideBar;
