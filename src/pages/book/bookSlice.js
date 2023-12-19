import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  selectedBook: {},
  reviews: [],
};
const bookSlic = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, { payload }) => {
      state.books = payload;
    },
    setABook: (state, { payload }) => {
      state.selectedBook = payload;
    },
    setReviews: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

const { reducer, actions } = bookSlic;

export const { setBooks, setABook, setReviews } = actions;
export default reducer;
