import axios from 'axios';

const FETCH_BOOKS = 'bookstore-cms/src/Redux/Books/fetchBooks';

export const ADD_BOOK = './Books/ADD_BOOK';
export const REMOVE_BOOK = './Books/REMOVE_BOOK';
const BASEURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kN7rR9TgYte9zFAAnguR/books';

/* eslint-disable default-param-last */
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return action.payload;
    case FETCH_BOOKS:
      return action.payload;
    case REMOVE_BOOK: {
      return action.payload;
    }
    default:
      return state;
  }
}

export const fetchBooks = () => async (dispatch) => {
  try {
    const response = await axios.get(BASEURL);
    dispatch({
      type: FETCH_BOOKS,
      payload: response.data,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

/* eslint-disable camelcase */
export const addBook = ({
  title, author, item_id, category,
}) => async (dispatch) => {
  try {
    await axios.post(BASEURL, {
      title,
      author,
      item_id,
      category,
    });
    return dispatch(fetchBooks());
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${BASEURL}/${id}`);
  dispatch(fetchBooks());
};
