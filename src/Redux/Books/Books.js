export const ADD_BOOK = 'bookstore-cms/src/Redux/Books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore-cms/src/Redux/Books/REMOVE_BOOK';
export const initialState = {
  books: {},
};

/* eslint-disable default-param-last */
function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: {
          ...state.books,
          [action.book.id]: [action.book],
        },
      };
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });
export default booksReducer;
