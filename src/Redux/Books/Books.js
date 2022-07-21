export const ADD_BOOK = 'bookstore-cms/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore-cms/books/REMOVE_BOOK';
export const initialState = [];

/* eslint-disable default-param-last */
function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.id)];
    default:
      return state;
  }
}
export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (book, id) => ({ type: REMOVE_BOOK, id, book });
export default booksReducer;
