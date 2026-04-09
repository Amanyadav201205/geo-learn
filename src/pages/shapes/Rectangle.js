import { useState } from "react";
import { Link } from "react-router-dom";
import "./Rectangle.css";

// ✅ image import (rename better: 3d-rectangle.png)
import rectImg from "./images/drectangle.png";

function Rectangle() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState("");

  const [length2, setLength2] = useState("");
  const [width2, setWidth2] = useState("");
  const [perimeter, setPerimeter] = useState("");

  function calculateArea() {
    if (!length || !width) return;
    setArea(length * width);
  }

  function calculatePerimeter() {
    if (!length2 || !width2) return;
    setPerimeter(2 * (Number(length2) + Number(width2)));
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
        <h1>Rectangle</h1>
        <h3>Understanding the Geometry</h3>
      </div>

      <hr />

      <div className="container">

        <div className="box">
          <h2>Definition</h2>
          <p>
            A rectangle is a quadrilateral with four right angles.
          </p>
        </div>

        {/* ✅ Image */}
        <div className="box image-box">
          <h2>3D Representation</h2>
          <img src={rectImg} alt="Rectangle" />
          <p>A cuboid is a 3D form.</p>
        </div>

        <div className="box">
          <h2>Properties</h2>
          <p>
            • Opposite sides equal <br />
            • All angles 90° <br />
            • Diagonals equal
          </p>
        </div>

        {/* Area */}
        <div className="box calc">
          <h2>Area Calculator</h2>

          <input
            type="number"
            placeholder="Length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />

          <input
            type="number"
            placeholder="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />

          <button onClick={calculateArea}>
            Calculate Area
          </button>

          <p>{area && `Area = ${area} sq units`}</p>
        </div>

        {/* Perimeter */}
        <div className="box calc">
          <h2>Perimeter Calculator</h2>

          <input
            type="number"
            placeholder="Length"
            value={length2}
            onChange={(e) => setLength2(e.target.value)}
          />

          <input
            type="number"
            placeholder="Width"
            value={width2}
            onChange={(e) => setWidth2(e.target.value)}
          />

          <button onClick={calculatePerimeter}>
            Calculate Perimeter
          </button>

          <p>{perimeter && `Perimeter = ${perimeter} units`}</p>
        </div>

        <div className="box">
          <h2>Real Life Examples</h2>
          <p>
            • Books <br />
            • Doors <br />
            • Screens
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

export default Rectangle;