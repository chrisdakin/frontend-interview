import { useContext } from 'react';

export const searchGithub = async (search, setSearch) => {
    if (search.value) {
        const results = await fetch(`https://api.github.com/search/repositories?q=${search.value}`);
        setSearch({ ...search, results });
    }
};