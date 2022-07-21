import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import AddBook from './components/AddBook';
import books from './bookData';
import Categories from './components/Categories';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={books.map((book) => (
              <Books
                key={book.id}
                title={book.title}
                author={book.author}
              />
            ))}
          />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <AddBook />
      </Router>
    </div>
  );
}

export default App;
