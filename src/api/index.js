import { useContext } from 'react';

export const searchGithub = async (search, setSearch) => {
    if (search.value) {
        let formattedResults = [];

        try {
            const request = await fetch(`https://api.github.com/search/repositories?q=${search.value}`);
            const result = await request.json();
            formattedResults = (result?.items || []).map(item => (
                {
                    description: item.description,
                    score: item.description,
                    fullName: item.full_name,
                    openIssuesCount: item.open_issues_count,
                    stargazersCount: item.stargazers_count,
                })
            )
        } catch (e) {
            //TODO: Gracefully handle search errors;
            console.warn("There was an error with your request.")
        }

        setSearch({ ...search, results: formattedResults });
    }
};