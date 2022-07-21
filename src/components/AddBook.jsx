import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Books';

function AddBook() {
  const [state, setState] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook(state.title, state.author));
  };

  return (
    <div className="input-fields">
      <h1>ADD NEW BOOK</h1>
      <form className="forms " onSubmit={handleAddBook}>
        <input
          type="text"
          id="title"
          name="title"
          value={state.title}
          placeholder="Book title"
          onChange={handleChange}
        />
        <input
          type="text"
          id="author"
          name="author"
          value={state.author}
          placeholder="Author"
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;