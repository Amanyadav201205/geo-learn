import { useState } from "react";
import { Link } from "react-router-dom";
import "./Square.css";
import square3D from "./images/dsquare.png";

function Square() {
  const [side, setSide] = useState("");
  const [area, setArea] = useState("");
  const [side2, setSide2] = useState("");
  const [perimeter, setPerimeter] = useState("");

  function calculateArea() {
    if (side === "") return;
    setArea(side * side);
  }

  function calculatePerimeter() {
    if (side2 === "") return;
    setPerimeter(4 * side2);
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
        <h1>Square</h1>
        <p>Understanding the Geometry of a Square</p>
      </div>

      <div className="container">

        <div className="box">
          <h2>Definition</h2>
          <p>
            A square is a regular quadrilateral with four equal sides and right angles.
          </p>
        </div>

        <div className="box image-box">
          <h2>3D Representation</h2>
          <img src={square3D} alt="3D Square" />
          <p>A cube is a three-dimensional shape with square faces.</p>
        </div>

        <div className="box">
          <h2>Properties of a Square</h2>
          <ul>
            <li>All sides are equal</li>
            <li>All angles are 90°</li>
            <li>Opposite sides are parallel</li>
            <li>Diagonals are equal and bisect each other</li>
          </ul>
        </div>

        <div className="box">
          <h2>Area of a Square</h2>
          <p>Area = side × side</p>
          <p>Example: If side = 5 → Area = 25 sq units</p>
        </div>

        <div className="box calc">
          <h2>Square Area Calculator</h2>

          <input
            type="number"
            placeholder="Enter side"
            value={side}
            onChange={(e) => setSide(e.target.value)}
          />

          <button onClick={calculateArea}>Calculate Area</button>

          <p>{area && `Area = ${area} sq units`}</p>
        </div>

        <div className="box">
          <h2>Perimeter of a Square</h2>
          <p>Perimeter = 4 × side</p>
          <p>Example: If side = 5 → Perimeter = 20 units</p>
        </div>

        <div className="box calc">
          <h2>Square Perimeter Calculator</h2>

          <input
            type="number"
            placeholder="Enter side"
            value={side2}
            onChange={(e) => setSide2(e.target.value)}
          />

          <button onClick={calculatePerimeter}>
            Calculate Perimeter
          </button>

          <p>{perimeter && `Perimeter = ${perimeter} units`}</p>
        </div>

        <div className="box">
          <h2>Real Life Examples</h2>
          <ul>
            <li>Floor tiles</li>
            <li>Chess board</li>
            <li>Windows and frames</li>
            <li>Design patterns</li>
          </ul>
        </div>

      </div>

      <div className="back-nav">
        <Link to="/course">⬅ Back to Course</Link>
      </div>

      <div className="footer">
        © 2026 GeoLearn Smart Learning Ecosystem
      </div>

    </div>
  );
}

export default Square;