import React from 'react';
import './App.css';

// IMPORT COMPONENTS
import Navbar from './components/nav.js';
import SearchFruits from './components/search-fruits.js';

function App() {
  return (
    <div className="App">
        <Navbar />
        <SearchFruits />
    </div>
  );
}

export default App;
