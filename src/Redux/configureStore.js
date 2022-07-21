import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
/* eslint-disable import/extensions */
import booksReducer from './Books/books';
import categoriesReducer from './Categories/categories';

const rootReducer = configureStore({
  reducer: combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
  }),
});
export default rootReducer;
