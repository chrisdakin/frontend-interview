import * as React from "react";

const SetSearchContext = React.createContext(null);
const SearchContext = React.createContext(null);
export const useSearchContext = () => {
    const search = React.useContext(SearchContext);
    if (!search) throw new Error("Used outside of search context");
    return search;
};

export const useSetSearchContext = () => {
    const setSearch = React.useContext(SetSearchContext);
    if (!setSearch) throw new Error("Used outside of setSearch context");
    return setSearch;
};

export const AuthController = ({ children }) => {
    const [search, setSearch] = React.useState({
        searchValue: "",
        results: null
    });

    return (
        <SearchContext.Provider value={search}>
            <SetSearchContext.Provider value={setSearch}>
                {children}
            </SetSearchContext.Provider>
        </SearchContext.Provider>
    );
};
