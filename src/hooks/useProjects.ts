import { useEffect, useState } from 'react';
import { localProjects } from '../data/localProjects';

export type Project = {
    name: string;
    displayName?: string;
    isPrivate?: boolean;
    github: string;
    languages: string[];
    latestCommit: string | null;
    technologies: string[];
    type: string;
    deployLink: string;
};

const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>(localProjects);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/.netlify/functions/github-repos');

                if (!res.ok) {
                    throw new Error('Failed to fetch projects');
                }

                const data: Project[] = await res.json();
                setProjects([
                    ...localProjects,
                    ...data.filter((project) => !localProjects.some((local) => local.name === project.name)),
                ]);
            } catch (err) {
                console.error(err);
                setError('Could not load projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading, error };
};

export default useProjects;
