import React from 'react';
import './App.css';
import MenuBar from './components/Menubar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/SearchBar.js';
import Home from './components/Home.js';
import BarDisplay from './components/BarDisplay.js';

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bar/:id' element={<BarDisplay />} />
        <Route path='/Search' element={<Search />}/>
      </Routes>
    </Router>
  );
}

export default App;
