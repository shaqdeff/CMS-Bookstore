import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
/* eslint-disable import/extensions */
import booksReducer from './Books/Books';
import categoriesReducer from './Categories/Categories';

const rootReducer = configureStore({
  reducer: combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
  }),
});
export default rootReducer;
