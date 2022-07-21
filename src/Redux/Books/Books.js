import { v4 as uuidv4 } from 'uuid';

export const ADD_BOOK = './Books/ADD_BOOK';
export const REMOVE_BOOK = './Books/REMOVE_BOOK';

export const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'Game of Thrones',
      author: 'George R.R. Martin',
    },
    {
      id: uuidv4(),
      title: 'Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: uuidv4(),
      title: 'The Subtle Art of Not Giving a F**k',
      author: 'Mark Manson',
    },
    {
      id: uuidv4(),
      title: 'The Power of Now',
      author: 'Eckhart Tolle',
    },
  ],
};
/* eslint-disable  default-param-last */
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
