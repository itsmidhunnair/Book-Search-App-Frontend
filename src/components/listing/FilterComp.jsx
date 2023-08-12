import React from "react";
import { keyBy, uniqBy } from "lodash";
import { useSelector } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import useBooks from "../../hooks/useBooks";

/**
 * Creates a list of authors name from available books
 */
const FilterComp = ({ apiSorting = false }) => {
  const { handleFilter } = useBooks();
  const { searchedBooks } = useSelector((state) => state.book);

  let options;

  if (apiSorting) {
    options = [
      { value: "ebooks", name: "eBooks" },
      { value: "free-ebooks", name: "Free eBooks" },
      { value: "paid-ebooks", name: "Paid eBooks" },
    ];
  } else {
    options = uniqBy(
      searchedBooks,
      (publisher) => publisher.volumeInfo.publisher
    ).map((publisher) => publisher.volumeInfo.publisher);
    //* Manully creating Array of Publishers
    // books?.map((book) => {
    //   if (
    //     book.volumeInfo?.publisher && (data.indexOf(book.volumeInfo?.publisher) ===
    //     -1)
    //   ) {
    //     data.push(book.volumeInfo?.publisher);
    //   }}
    //   )
  }

  return (
    <>
      <FormControl
        sx={apiSorting ? { minWidth: 110, marginRight: 2 } : { minWidth: 200 }}
        size="small"
      >
        <InputLabel id="select-label">
          {apiSorting ? "Filter By" : "Filter By Publisher"}
        </InputLabel>
        <Select
          labelId="select-label"
          label={apiSorting ? "Filter By" : "Filter By Publisher"}
          autoWidth
          onChange={handleFilter}
        >
          <MenuItem value="all">Show All</MenuItem>
          {apiSorting
            ? options.map((option) => (
                <MenuItem value={option.value} key={option.value}>
                  {option.name}
                </MenuItem>
              ))
            : options.map((publisher) => (
                <MenuItem value={publisher} key={publisher}>
                  {publisher}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </>
  );
};

export default FilterComp;
