import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import useBooks from '../../hooks/useBooks';

const SortComp = () => {
  const { handleSort } = useBooks();
  return (
    <>
      <FormControl sx={{ minWidth: 200 }} size="small">
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Sort By"
          onChange={handleSort}
        >
          <MenuItem value="averageRating-desc">Rating (High to Low)</MenuItem>
          <MenuItem value="averageRating-asc">Rating (Low to High)</MenuItem>
          <MenuItem value="title-asc">Title (A-Z)</MenuItem>
          <MenuItem value="title-desc">Title (Z-A)</MenuItem>
          <MenuItem value="publishedDate-asc">Published Date (Oldest First)</MenuItem>
          <MenuItem value="publishedDate-desc">Published Date (Newest First)</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SortComp;
