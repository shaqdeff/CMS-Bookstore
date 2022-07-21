import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
/* eslint-disable import/extensions */
import { addBook } from '../Redux/Books/Books';

function AddBook() {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(state.title, state.author));
  };


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }


  return (
    <div>
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Book title" value={state.title} />
        <input type="text" id="author" placeholder="Author" value={state.title} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
