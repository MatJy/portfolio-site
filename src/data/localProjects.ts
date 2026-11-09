import type { Project } from '../hooks/useProjects';

// Case studies whose source code is not available through the public GitHub API.
export const localProjects: Project[] = [
    {
        name: 'internship-payment-workflows',
        displayName: 'Business platform development',
        isPrivate: true,
        github: '',
        languages: ['JavaScript'],
        latestCommit: null,
        technologies: [
            'Vue',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Stripe Connect',
            'Docker',
            'Linux',
        ],
        type: 'full-stack',
        deployLink: '',
    },
];
