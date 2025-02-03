import { useEffect, useState } from 'react';
import '../index.css';

type Project = {
    name: string;
    github: string;
    languages: string[];
    latestCommit: string | null;
};

type GitHubRepo = {
    name: string;
    html_url: string;
    languages_url: string;
    commits_url: string;
};

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const formatDate = (dateString: string | null) => {
        if (!dateString) return null;

        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    };
    // run code when component first renders
    useEffect(() => {
        const fetchProjects = async () => {
            const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

            try {
                // get the repositories
                const response = await fetch(
                    'https://api.github.com/users/MatJy/repos'
                );
                const data: GitHubRepo[] = await response.json();

                // ensure all async operations complete before updating state
                const projectsData: Project[] = await Promise.all(
                    // Loop through every repo
                    data.map(async (repo: GitHubRepo) => {
                        // get lagnuages used in each repo
                        const languagesResponse: Response = await fetch(
                            repo.languages_url,
                            {
                                headers: {
                                    Authorization: `token ${GITHUB_TOKEN}`,
                                },
                            }
                        );

                        // get the commits
                        const commitResponse: Response = await fetch(
                            repo.commits_url.replace('{/sha}', ''),
                            {
                                headers: {
                                    Authorization: `token ${GITHUB_TOKEN}`,
                                },
                            }
                        );
                        const commitsData = await commitResponse.json();
                        const languagesData = await languagesResponse.json();

                        // get the latest commits date from verified_at
                        const latestCommit: string | null =
                            commitsData.length > 0
                                ? commitsData[0].commit.committer.date
                                : null;
                        return {
                            name: repo.name,
                            github: repo.html_url,
                            // extract languages as an array
                            languages: Object.keys(languagesData),
                            latestCommit: latestCommit,
                        };
                    })
                );
                // sort projects by latest commit
                projectsData.sort((a, b) => {
                    // Handle cases where `latestCommit` might be null
                    const dateA = a.latestCommit
                        ? new Date(a.latestCommit).getTime()
                        : 0;
                    const dateB = b.latestCommit
                        ? new Date(b.latestCommit).getTime()
                        : 0;

                    return dateB - dateA; // Sorting in descending order
                });
                // update state with formatted project data
                setProjects(projectsData);
            } catch (error) {
                console.error('Error fetching repos:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="bg-[#1B1820] xxl:w-190 pb-1 rounded-sm text-white w-full">
            <p className="bg-[#2B3244] p-2 rounded-t-sm text-2xl">
                Recent Activity
            </p>
            {projects.map((project: Project) => (
                <div
                    key={project.name}
                    className="bg-[#0B0B0F] mt-6 mx-4 mb-4 pb-1 rounded-sm "
                >
                    <a
                        className="text-2xl xxl:text-4xl p-2 hover:text-[#5DAEDE]"
                        href={project.github}
                    >
                        {project.name}
                    </a>
                    <p className="text-right pr-2">
                        {' '}
                        last committed on {formatDate(project.latestCommit)}
                    </p>
                    <div className="bg-[#21222E] p-3 rounded-sm mt-2 mx-2 mb-1 flex justify-between">
                        <p>Languages used</p>
                        <p>{project.languages.join(', ')}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Projects;
