import { useEffect, useState } from 'react';

export type Project = {
    name: string;
    github: string;
    languages: string[];
    latestCommit: string | null;
    technologies: string[];
    type: string;
    deployLink: string;
};

const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
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
                setProjects(data);
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
