import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../Redux/Books/Books';

// eslint-disable-line
function AddBook() {
  const [state, setState] = useState({
    title: '',
    author: '',
    category: 'Horror',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  /* jshint camelcase: true */
  const handleAddBook = (e) => {
    e.preventDefault();
    if (state.title.length > 0 && state.author.length) {
      dispatch(
        addBook({
          title: state.title,
          author: state.author,
          item_id: uuidv4(),
          category: state.category,
        }),
      );
    }
    state.title = '';
    state.author = '';
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
