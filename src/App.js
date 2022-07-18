import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import books from './bookData';
import Categories from './components/Categories';

function displayBooks(books) {
  return (
    books.map((book) => (
      <Books
        key={book.id}
        genre={book.genre}
        title={book.title}
        author={book.author}
      />
    ))
  );
}

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={displayBooks(books)}
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
