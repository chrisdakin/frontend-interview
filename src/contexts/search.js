import * as React from "react";

// export const SetSearchContext = React.createContext(null);
export const SearchContext = React.createContext(null);
export const useSearchContext = () => {
    const search = React.useContext(SearchContext);
    if (!search) throw new Error("Used outside of search context");
    return search;
};

// export const useSetSearchContext = () => {
//     const setSearch = React.useContext(SetSearchContext);
//     if (!setSearch) throw new Error("Used outside of setSearch context");
//     return setSearch;
// };

export const SearchController = ({ children }) => {
    const [search, setSearch] = React.useState({
        value: "",
        results: null
    });

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
};
