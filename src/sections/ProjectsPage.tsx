import { Link } from 'react-router-dom';
import useProjects from '../hooks/useProjects';

const ProjectsPage = () => {
    const { projects } = useProjects();
    const formatDate = (dateString: string | null) => {
        if (!dateString) return null;

        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    };
    return (
        <div className=" pt-0 flex flex-col items-center min-h-screen bg-[#1B2838]">
            <div className="bg-[#2A3340] text-white w-full xxl:w-185 h-25 content-center pl-10 flex items-end gap-2 pb-5">
                <h3 className="text-3xl hover:text-[#5DAEDE]">
                    <Link to="/">Matias</Link>
                </h3>
                <p>» All Projects</p>
            </div>
            <h1 className="text-3xl mb-4 text-white pt-4">All Projects</h1>
            <div className="xxl:w-2xl">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="bg-[#16202D] mt-6 p-6 rounded-sm w-full"
                    >
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-white mb-2 hover:underline"
                        >
                            {project.name}
                        </a>
                        <div className="flex gap-4">
                            <div className="text-white mt-2">
                                <p className="font-bold">Latest commit:</p>
                                <p>{formatDate(project.latestCommit)}</p>
                            </div>
                            <div className="text-white mt-2">
                                <p className="font-bold">Languages:</p>
                                <p>{project.languages.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
