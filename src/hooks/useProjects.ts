import { useState, useEffect } from 'react';
import extraProjectsData from '../data/projects.json';

export type Project = {
    name: string;
    github: string;
    languages: string[];
    latestCommit: string | null;
    technologies: string[];
    type: string;
    deployLink: string;
};

type GitHubRepo = {
    name: string;
    html_url: string;
    languages_url: string;
    commits_url: string;
};

const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

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
                        // get languages used in each repo
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
                        const extra = extraProjectsData.find(
                            (p) =>
                                p.name.toLocaleLowerCase() ===
                                repo.name.toLocaleLowerCase()
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
                            technologies: extra?.technologies ?? [],
                            type: extra?.type ?? '',
                            deployLink: extra?.link ?? '',
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

    return { projects, setProjects };
};

export default useProjects;
