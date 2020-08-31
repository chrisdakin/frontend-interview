import * as React from "react";

export const SearchContext = React.createContext(null);
export const useSearchContext = () => {
    const search = React.useContext(SearchContext);
    if (!search) throw new Error("Used outside of search context");
    return search;
};

export const SearchController = ({ children }) => {
    const [search, setSearch] = React.useState({
        value: "",
        results: null
    });

    const getRepositoryById = id => {
        if (!search.results) return;
        const res = search.results.find(item => item.id === +id);
        return res;
    }

    return (
        <SearchContext.Provider value={{ search, setSearch, getRepositoryById }}>
            {children}
        </SearchContext.Provider>
    );
};
