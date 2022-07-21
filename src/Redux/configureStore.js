import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/books';
import categoriesReducer from './Categories/categories';

/* eslint-disable import/extensions */
const rootReducer = configureStore({
  reducer: combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
  }),
});
export default rootReducer;
