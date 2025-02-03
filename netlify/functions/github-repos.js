const axios = require('axios');

exports.handler = async (event, context) => {
    const githubUsername = 'MatJy';
    const token = process.env.VITE_GITHUB_TOKEN;

    try {
        // Fetch repositories data from GitHub
        const response = await axios.get(
            `https://api.github.com/users/${githubUsername}/repos`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const repos = response.data;

        // Return the data as a JSON response
        return {
            statusCode: 200,
            body: JSON.stringify(repos),
        };
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error fetching repositories' }),
        };
    }
};
