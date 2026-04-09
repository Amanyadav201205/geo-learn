import { useState } from "react";
import { Link } from "react-router-dom";
import "./Parallelogram.css";

// ✅ image import (rename recommended: 3d-parallelogram.png)
import paraImg from "./images/dparallelogram.png";

function Parallelogram() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState("");

  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [perimeter, setPerimeter] = useState("");

  function calculateArea() {
    if (!base || !height) return;
    setArea(base * height);
  }

  function calculatePerimeter() {
    if (!a || !b) return;
    setPerimeter(2 * (Number(a) + Number(b)));
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
        <h1>Parallelogram</h1>
        <h3>Understanding the Geometry</h3>
      </div>

      <hr />

      <div className="container">

        <div className="box">
          <h2>Definition</h2>
          <p>
            A parallelogram is a quadrilateral with opposite sides parallel and equal.
          </p>
        </div>

        {/* ✅ Image */}
        <div className="box image-box">
          <h2>3D Representation</h2>
          <img src={paraImg} alt="Parallelogram" />
          <p>A parallelepiped is a 3D version.</p>
        </div>

        <div className="box">
          <h2>Properties</h2>
          <p>
            • Opposite sides equal <br />
            • Opposite angles equal <br />
            • Diagonals bisect
          </p>
        </div>

        {/* Area */}
        <div className="box calc">
          <h2>Area Calculator</h2>

          <input
            type="number"
            placeholder="Base"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />

          <input
            type="number"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
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
            placeholder="Side a"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />

          <input
            type="number"
            placeholder="Side b"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />

          <button onClick={calculatePerimeter}>
            Calculate Perimeter
          </button>

          <p>{perimeter && `Perimeter = ${perimeter} units`}</p>
        </div>

        <div className="box">
          <h2>Real Life Examples</h2>
          <p>
            • Tiles <br />
            • Buildings <br />
            • Structures
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

export default Parallelogram;