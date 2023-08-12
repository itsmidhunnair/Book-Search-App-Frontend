import { useSearchParams } from "react-router-dom";

let index = 1;

/**
 * Hook to handle all operations related to search
 * @function submitSearch() - called when search button is clicked
 * @function nextButton() - called when next page is clicked
 */
const useSearch = (searchBooks) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const submitSearch = ({ search }) => {
    index = 1;
    setSearchParams({
      search: search,
      index: 1,
    });
    // navigate(`/${search}/1`);
  };

  const nextButton = (search, page) => {
    index = page;
    setSearchParams({
      search: search,
      index: index,
    });
    // searchBooks({ variables: { input: { search: searchResult, index } } });
  };

  return { submitSearch, nextButton };
};

export default useSearch;
