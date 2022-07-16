import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Books from './components/Books';

function App() {
  const books = [
    {
      id: 1,
      genre: 'Action',
      title: 'Hunger Games',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route
          path="/books"
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
      </Routes>
    </div>
  );
}

export default App;
