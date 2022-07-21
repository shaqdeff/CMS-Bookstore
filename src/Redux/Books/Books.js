import { v4 as uuidv4 } from 'uuid';

export const ADD_BOOK = './books/ADD_BOOK';
export const REMOVE_BOOK = './books/REMOVE_BOOK';

export const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'The One',
      author: 'Jimmy Fitzimons',
    },
  ],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const booksData = [...state.books, action.payload];
      return { ...state.books, books: booksData };
    }

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  payload: { title, author, id: uuidv4() },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: { id },
});