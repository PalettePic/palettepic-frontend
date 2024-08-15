import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeneratePalette from './Screen/GeneratePalette/GeneratePalette';
import ExplorePalettes from './components/ExplorePalettes';
import './App.css';
import HomePage from './Screen/HomePage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generate" element={<GeneratePalette />} />
          <Route path="/explore" element={<ExplorePalettes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
