const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  searchedBooks: [],
  editedBooks: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    /**
     * To store all the books received from backend
     */
    getBooks: (state, action) => {
      state.searchedBooks = action.payload?.books;
      state.editedBooks = action.payload?.books;
    },

    /**
     * TO handle the filter by publisher books (to filtered from frontend)
     */
    editBooks: (state, action) => {
      state.editedBooks = action.payload;
    },
  },
});

export const { getBooks, editBooks } = booksSlice.actions;

export default booksSlice.reducer;
