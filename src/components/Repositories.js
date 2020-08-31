import * as React from "react";
import RepositorySearchResults from './RepositorySearchResults'
import { useSearchContext, useSetSearchContext } from "../contexts/search";
import { searchGithub } from '../api/search'

/**
 * Once given an input, fetch the repositories we searched
 * via:
 *
 * https://api.github.com/search/repositories?q={}
 *
 * This should not kickoff a fetch for every keystroke, but rather when
 * typing stops.
 *
 * Documentation for the search api is here:
 * https://developer.github.com/v3/search/#search-repositories
 */

const Repositories = () => {
  const { search, results } = useSearchContext();
  const setSearchContext = useSetSearchContext();

  const handleChange = () => {
    setSearchContext({
      search: search
    })

    // debounce searchGithub
    searchGithub();
  }

  return (
    <div>
      <input name="search-terms" value={search} onChange={handleChange} />
      {results ? (
        <RepositorySearchResults searchResults={results} />
      ) : (
          <div>Enter some text to search github repositories</div>
        )}
    </div>
  );
};

export default Repositories;
