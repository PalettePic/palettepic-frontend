import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

var all_palettes = [
  "#8e44ad",
  "#2980b9",
  "#3498db",
  "#e74c3c",
  "#2ecc71",
  "#27ae60",
  "#1abc9c",
  "#e67e22",
  "#e74c3c",
  "#c0392b",
  "#f1948a",
  "#3498db",
  "#e74c3c",
  "#2ecc71",
  "#27ae60",
  "#1abc9c",
  "#e67e22",
  "#8e44ad",
  "#2980b9",
  "#e74c3c",
  "#c0392b",
  "#f1948a",
];

function HomePage() {
  return (
    <div style={containerStyle}>
      <div className="main-container">
        <header>
          <h1>Welcome to PalettePic</h1>
          <h2>Generate beautiful color palettes from images</h2>
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
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: -50,
            flexDirection: "row",
            width: "100%",
            alignItems: "flex-end",
            overflow: "hidden",
          }}
        >
          {all_palettes.map((item, index) => {
            const heights = [2, 1, 1, 2, 3, 4, 3, 2, 1];
            const heightMultiplier = heights[index % heights.length];

            return (
              <div
                key={index}
                style={{
                  backgroundColor: item,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  height: 250 + 30 * heightMultiplier,
                  width: `22%`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: `swingAnimation 4s ease-in-out infinite`,
                  transformOrigin: "center bottom",
                }}
              >
                <p
                  style={{
                    backgroundColor: "#fff",
                    opacity:0.7,
                    color: item,
                    width: "100%",
                    textAlign: "center",
                    borderRadius: 20
                  }}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>
        <footer>
          <p>PalettePic - Developed by Ayush Tripathi</p>
        </footer>
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  flexDirection: "column",
};

export default HomePage;
