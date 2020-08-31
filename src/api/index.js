export const searchGithub = async (searchValue, setSearch) => {
    if (searchValue) {
        let formattedResults = [];

        try {
            const request = await fetch(`https://api.github.com/search/repositories?q=${searchValue}`);
            const result = await request.json();
            formattedResults = (result?.items || []).map(item => (
                {
                    id: item.id,
                    description: item.description,
                    score: item.description,
                    fullName: item.full_name,
                    openIssuesCount: item.open_issues_count,
                    stargazersCount: item.stargazers_count,
                    issuesUrl: item.issues_url,
                    pullsUrl: item.pulls_url,
                    license: item.license
                })
            )
        } catch (e) {
            //TODO: Gracefully handle search errors;
            console.warn("There was an error with your request.")
        }

        setSearch({ ...searchValue, results: formattedResults });
    }
};