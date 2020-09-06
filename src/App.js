import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home.js';

function App() {
  return (
    <Router>
      <Home path="/" />
      <Home path="/b" />
    </Router>
  );
}

export default App;
