import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Books';
import AddBook from '../components/AddBook';

function Books() {
  // eslint-disable-next-line
  const books = useSelector((state) => state.books.books);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook />
    </div>
  );
}

export default Books;
