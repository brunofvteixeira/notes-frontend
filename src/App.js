import React from 'react';
import { Router, Redirect } from '@reach/router';
import BooksList from './pages/BooksList.js';
import Book from './pages/Book.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Redirect from="/" to="/b" noThrow />
      <BooksList exact path="/b" />
      <Book path="/b/:id" />
    </Router>
  );
}

export default App;
