import { useState } from "react";
import { Link } from "react-router-dom";
import "./Triangle.css";

// ✅ image import (rename recommended: 3d-triangle.png)
import triangleImg from "./images/dtriangle.png";

function Triangle() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState("");

  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [s3, setS3] = useState("");
  const [perimeter, setPerimeter] = useState("");

  function calculateArea() {
    if (!base || !height) return;
    setArea(0.5 * base * height);
  }

  function calculatePerimeter() {
    if (!s1 || !s2 || !s3) return;
    setPerimeter(Number(s1) + Number(s2) + Number(s3));
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
        <h1>Triangle</h1>
        <h3>Understanding the Geometry of a Triangle</h3>
      </div>

      <hr />

      <div className="container">

        <div className="box">
          <h2>Definition</h2>
          <p>
            A triangle has 3 sides and sum of angles = 180°.
          </p>
        </div>

        {/* ✅ Image */}
        <div className="box image-box">
          <h2>3D Representation</h2>
          <img src={triangleImg} alt="Triangle" />
          <p>A tetrahedron is a 3D form.</p>
        </div>

        <div className="box">
          <h2>Types</h2>
          <p>
            • Equilateral <br />
            • Isosceles <br />
            • Scalene
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
            placeholder="Side 1"
            value={s1}
            onChange={(e) => setS1(e.target.value)}
          />

          <input
            type="number"
            placeholder="Side 2"
            value={s2}
            onChange={(e) => setS2(e.target.value)}
          />

          <input
            type="number"
            placeholder="Side 3"
            value={s3}
            onChange={(e) => setS3(e.target.value)}
          />

          <button onClick={calculatePerimeter}>
            Calculate Perimeter
          </button>

          <p>{perimeter && `Perimeter = ${perimeter} units`}</p>
        </div>

        <div className="box">
          <h2>Real Life Examples</h2>
          <p>
            • Roofs <br />
            • Bridges <br />
            • Signs
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

export default Triangle;