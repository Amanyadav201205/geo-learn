import { useState } from "react";
import { Link } from "react-router-dom";
import "./Trapezium.css";

// ✅ image import (rename better: 3d-trapezium.png)
import trapImg from "./images/dtrapezium.png";

function Trapezium() {
  const [base1, setBase1] = useState("");
  const [base2, setBase2] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState("");

  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [perimeter, setPerimeter] = useState("");

  function calculateArea() {
    if (!base1 || !base2 || !height) return;
    setArea(0.5 * (Number(base1) + Number(base2)) * Number(height));
  }

  function calculatePerimeter() {
    if (!a || !b || !c || !d) return;
    setPerimeter(Number(a) + Number(b) + Number(c) + Number(d));
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
        <h1>Trapezium</h1>
        <h3>Understanding Geometry</h3>
      </div>

      <hr />

      <div className="container">

        <div className="box">
          <h2>Definition</h2>
          <p>A trapezium has one pair of parallel sides.</p>
        </div>

        {/* ✅ Image */}
        <div className="box image-box">
          <h2>3D Representation</h2>
          <img src={trapImg} alt="Trapezium" />
          <p>A trapezoidal prism is its 3D form.</p>
        </div>

        <div className="box">
          <h2>Properties</h2>
          <p>
            • One pair parallel <br />
            • Adjacent angles supplementary
          </p>
        </div>

        {/* Area */}
        <div className="box calc">
          <h2>Area Calculator</h2>

          <input
            type="number"
            placeholder="Base a"
            value={base1}
            onChange={(e) => setBase1(e.target.value)}
          />

          <input
            type="number"
            placeholder="Base b"
            value={base2}
            onChange={(e) => setBase2(e.target.value)}
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

          <input
            type="number"
            placeholder="Side c"
            value={c}
            onChange={(e) => setC(e.target.value)}
          />

          <input
            type="number"
            placeholder="Side d"
            value={d}
            onChange={(e) => setD(e.target.value)}
          />

          <button onClick={calculatePerimeter}>
            Calculate Perimeter
          </button>

          <p>{perimeter && `Perimeter = ${perimeter} units`}</p>
        </div>

        <div className="box">
          <h2>Real Life Examples</h2>
          <p>• Bridges • Designs • Tables</p>
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

export default Trapezium;