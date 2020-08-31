import * as React from "react";
import RepositorySearchResults from './RepositorySearchResults'
import { useSearchContext } from "../contexts/search";
import { searchGithub } from '../api'

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
  const { search, setSearch } = useSearchContext();
  const [isTyping, setIsTyping] = React.useState(false);
  const timeout = React.useRef();

  const handleChange = (event) => {
    // when input is changed, clear out any timeouts to prevent unnecessary request
    clearTimeout(timeout.current);
    setIsTyping(true);
    setSearch({
      ...search,
      value: event?.target?.value || ''
    });
    timeout.current = setTimeout(() => setIsTyping(false), 300);
  }

  //debounce: when a user stops typing
  React.useEffect(() => {
    if (!isTyping && search.value) {
      searchGithub(search.value, setSearch);
    }
  }, [search.value, isTyping, setSearch])

  return (
    <div>
      <input name="search-terms" value={search.value} onChange={handleChange} />
      {search.results ? (
        <RepositorySearchResults searchResults={search.results} />
      ) : (
          <div>Enter some text to search github repositories</div>
        )}
    </div>
  );
};

export default Repositories;
