import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Course.css";

// ✅ correct image imports
import squareImg from "./shapes/images/square.jpg";
import rectangleImg from "./shapes/images/rectangle.jpg";
import triangleImg from "./shapes/images/triangle.jpg";
import parallelogramImg from "./shapes/images/parallelogram.jpg";
import trapeziumImg from "./shapes/images/trapezium.jpg";
import circleImg from "./shapes/images/dcircle.png";

function Course() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const shapes = [
    {
      name: "Square",
      formula: "Area = side × side",
      applications: "Floor tiles, chessboard, boxes",
      image: squareImg,
      path: "/square"
    },
    {
      name: "Rectangle",
      formula: "Area = length × breadth",
      applications: "Books, mobile screens, doors",
      image: rectangleImg,
      path: "/rectangle"
    },
    {
      name: "Triangle",
      formula: "Area = ½ × base × height",
      applications: "Roof designs, bridges",
      image: triangleImg,
      path: "/triangle"
    },
    {
      name: "Circle",
      formula: "Area = πr²",
      applications: "Wheels, coins, clocks",
      image: circleImg,
      path: "/circle"
    },
    {
      name: "Parallelogram",
      formula: "Area = base × height",
      applications: "Engineering structures",
      image: parallelogramImg,
      path: "/parallelogram"
    },
    {
      name: "Trapezium",
      formula: "Area = ½ × (a+b) × h",
      applications: "Bridge supports",
      image: trapeziumImg,
      path: "/trapezium"
    }
  ];

  const filtered = shapes.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

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
        <h1>📐 Geometric Shapes</h1>
        <p>Learn formulas, uses & explore shapes visually</p>
      </div>

      {/* Search */}
      <div className="search-area">
        <input
          type="text"
          placeholder="🔍 Search shape..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <hr />

      {/* Cards */}
      <div className="container">
        {filtered.length > 0 ? (
          filtered.map((shape, i) => (
            <div className="card" key={i}>

              <img
                src={shape.image}
                alt={shape.name}
                className="shape-image"
              />

              <h2>{shape.name}</h2>

              <p className="formula">{shape.formula}</p>

              <p className="applications">
                📌 {shape.applications}
              </p>

              <button
                className="readbtn"
                onClick={() => navigate(shape.path)}
              >
                Read More →
              </button>

            </div>
          ))
        ) : (
          <div className="no-results">
            <p>❌ No shape found</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="footer-nav">
        <Link to="/assessment">📝 Assessment</Link>
        <Link to="/">🏠 Home</Link>
      </div>

    </div>
  );
}

export default Course;