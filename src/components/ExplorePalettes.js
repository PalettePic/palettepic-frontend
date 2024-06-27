import React from 'react';
import './styles.css';

function ExplorePalettes() {
  // Replace with actual data fetching and rendering logic
  const palettes = [
    { colors: ['#ff6347', '#ffd700', '#20b2aa', '#9370db', '#ffa07a'] },
    { colors: ['#00ced1', '#8a2be2', '#32cd32', '#ff4500', '#ff69b4'] },
    { colors: ['#4169e1', '#dc143c', '#00ffff', '#7fff00', '#ff8c00'] }
  ];

  return (
    <div className="explore-palettes">
      <header>
        <h1>Explore Palettes</h1>
        <p>Discover existing color palettes</p>
      </header>
      <main>
        <section className="palette-list">
          {palettes.map((palette, index) => (
            <div key={index} className="palette-item">
              {palette.colors.map((color, idx) => (
                <div key={idx} className="color" style={{ backgroundColor: color }}></div>
              ))}
            </div>
          ))}
        </section>
      </main>
      <footer>
        <p>PalettePic - Developed by Your Name</p>
      </footer>
    </div>
  );
}

export default ExplorePalettes;
