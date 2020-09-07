import React from 'react';
import { Router, Redirect } from '@reach/router';
import Home from './pages/Home.js';
import Book from './pages/Book.js';

function App() {
  return (
    <Router>
      <Redirect from="/" to="/b" noThrow />
      <Home exact path="/b" />
      <Book path="/b/:id" />
    </Router>
  );
}

export default App;
