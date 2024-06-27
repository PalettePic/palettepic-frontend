import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you'll use React Router for navigation
import './styles.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to PalettePic</h1>
        <p>Generate beautiful color palettes from images</p>
      </header>
      <main>
        <section className="cta-buttons">
          <Link to="/generate" className="cta-button">
            Generate Palette
          </Link>
          <Link to="/explore" className="cta-button">
            Explore Palettes
          </Link>
        </section>
      </main>
      <footer>
        <p>PalettePic - Developed by Your Name</p>
      </footer>
    </div>
  );
}

export default LandingPage;
