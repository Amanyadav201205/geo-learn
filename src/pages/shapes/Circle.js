import { useState } from "react";
import { Link } from "react-router-dom";
import "./Circle.css";

// ✅ image import (rename file if needed: 3d-circle.png)
import circle3D from "./images/dcircle.png";

function Circle() {
  const [radius, setRadius] = useState("");
  const [area, setArea] = useState("");
  const [radius2, setRadius2] = useState("");
  const [circumference, setCircumference] = useState("");

  function calculateArea() {
    if (radius === "") return;
    const result = 3.1416 * radius * radius;
    setArea(result.toFixed(2));
  }

  function calculateCircumference() {
    if (radius2 === "") return;
    const result = 2 * 3.1416 * radius2;
    setCircumference(result.toFixed(2));
  }

  return (
    <div>

      {/* Navbar */}
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/course" className="active">Course</Link>
        <Link to="/assessment">Assessment</Link>
        <Link to="/feedback">Feedback</Link>
      </div>

      {/* Header */}
      <div className="header">
        <h1>Circle</h1>
        <h3>Understanding the Geometry of a Circle</h3>
      </div>

      <hr />

      <div className="container">

        <div className="box">
          <h2>Definition</h2>
          <p>
            A circle is a shape where all points are at equal distance from center.
          </p>
        </div>

        {/* ✅ Image fixed */}
        <div className="box image-box">
          <h2>3D Representation</h2>
          <img src={circle3D} alt="3D Circle" />
          <p>A sphere is a 3D form of a circle.</p>
        </div>

        <div className="box">
          <h2>Parts of Circle</h2>
          <p>
            • Radius <br />
            • Diameter <br />
            • Circumference
          </p>
        </div>

        {/* Area */}
        <div className="box calc">
          <h2>Area Calculator</h2>

          <input
            type="number"
            placeholder="Enter radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />

          <button onClick={calculateArea}>
            Calculate Area
          </button>

          <p>{area && `Area = ${area} sq units`}</p>
        </div>

        {/* Circumference */}
        <div className="box calc">
          <h2>Circumference Calculator</h2>

          <input
            type="number"
            placeholder="Enter radius"
            value={radius2}
            onChange={(e) => setRadius2(e.target.value)}
          />

          <button onClick={calculateCircumference}>
            Calculate Circumference
          </button>

          <p>{circumference && `Circumference = ${circumference} units`}</p>
        </div>

        <div className="box">
          <h2>Real Life Examples</h2>
          <p>
            • Wheels <br />
            • Clocks <br />
            • Coins
          </p>
        </div>

      </div>

      <div className="back-nav">
        <Link to="/course">⬅ Back to Course</Link>
      </div>

      <div className="footer">
        © 2026 GeoLearn
      </div>

    </div>
  );
}

export default Circle;