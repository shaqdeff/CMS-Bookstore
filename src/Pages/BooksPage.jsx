import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Books';
import AddBook from '../components/AddBook';
import { fetchBooks } from '../Redux/Books/Books';

function Books() {
  // eslint-disable-next-line
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      {Object.keys(books).map((bookId) => (
        <Book
          key={bookId}
          title={books[bookId][0].title}
          author={books[bookId][0].author}
          id={bookId}
        />
      ))}

      <AddBook />
    </div>
  );
}

export default Books;
