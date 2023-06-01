const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  searchedBooks: [],
  editedBooks: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooks: (state, action) => {
      state.searchedBooks = action.payload?.books;
      state.editedBooks = action.payload?.books;
    },

    editBooks: (state, action) => {
      state.editedBooks = action.payload;
    },
  },
});

export const { getBooks, editBooks } = booksSlice.actions;

export default booksSlice.reducer;
