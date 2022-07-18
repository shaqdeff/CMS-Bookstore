import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import books from './bookData';
import Categories from './components/Categories';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            (
              <Books
                genre={books[0].genre}
                title={books[0].title}
                author={books[0].author}
              />
            )
          }
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
