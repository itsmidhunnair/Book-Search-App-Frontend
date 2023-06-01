import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

let index = 1;

const useSearch = (searchBooks) => {

  const navigate = useNavigate()

  let [searchParams, setSearchParams] = useSearchParams();

  const submitSearch = ({ search }) => {
    index = 1;
    setSearchParams({
      search: search,
      index: 1
    });
    // navigate(`/${search}/1`);
  };
  
  const nextButton = (search, page) => {
    console.log(index);
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
