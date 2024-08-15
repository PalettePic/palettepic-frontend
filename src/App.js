import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GeneratePalette from './Screen/GeneratePalette/GeneratePalette';
import ExplorePalettes from './components/ExplorePalettes';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generate" element={<GeneratePalette />} />
          <Route path="/explore" element={<ExplorePalettes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
