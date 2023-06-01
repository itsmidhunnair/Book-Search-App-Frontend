import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

let index = 1;
let searchResult;

const useSearch = (searchBooks) => {

  const navigate = useNavigate()

  let [searchParams, setSearchParams] = useSearchParams();

  const submitSearch = ({ search }) => {
    index = 1;
    searchResult = search;
    setSearchParams({
      search: search,
      index: 1
    });
    // navigate(`/${search}/1`);
  };
  
  const nextButton = (page) => {
    console.log(index);
    index = page;
    navigate(`/${searchResult}/${index}`);
    // searchBooks({ variables: { input: { search: searchResult, index } } });
  };

  return { submitSearch, nextButton };
};

export default useSearch;
