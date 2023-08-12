import { useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import { editBooks } from "../store/slice";
import { filterPublisher } from "../utils/filterFunction";

/**
 * Hook to handle all operations related to listing and display page
 * @function handleFilter() - to handle filter operation in listing page
 * @function handleSort() - to handle sorting operation in listing page
 * @function toggleContent() - to handle the read more/less operations of description in Display page
 */
const useBooks = () => {
  const [fullContent, showFullContent] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { searchedBooks, editedBooks } = useSelector((state) => state.book);

  let [searchParams1, setSearchParams1] = useSearchParams();

  /**
   * To handle Filter
   * @param - event - to get e.target.value
   */
  const handleFilter = (e) => {
    console.log(e.target.value);
    if (e.target.value === "all") {
      navigate(`?`);
      return dispatch(editBooks(searchedBooks));
    }
    if (
      e.target.value === "ebooks" ||
      e.target.value === "free-ebooks" ||
      e.target.value === "paid-ebooks"
    ) {
      /**
       * Append method: appends the new query in the end
       * no matter the query exists or not
       */
      // searchParams1.append('search','abcd')
      /**
       * set method - sets new query and value if not present
       * If present then the new value will be overridden
       */
      searchParams1.set("filter", e.target.value);
      setSearchParams1(searchParams1);
    }
    const filteredBooks = filterPublisher(searchedBooks, e.target.value);
    dispatch(editBooks(filteredBooks));
  };

  /**
   * To Handle Sorting of books
   * @param - event - to get e.target.value
   */
  const handleSort = (e) => {
    const valueArr = e.target.value.split("-");
    const name = valueArr[0];
    const type = valueArr[1];
    const sortedBooks = _.orderBy(
      editedBooks,
      (book) => book?.volumeInfo[name] || 0,
      [type]
    );
    return dispatch(editBooks(sortedBooks));
  };

  /**
   * To toggle between show more and show less in Book Detail Page DESCRIPTION
   */
  const toggleContent = () => {
    showFullContent(!fullContent);
  };

  return { handleFilter, handleSort, toggleContent, fullContent };
};

export default useBooks;
