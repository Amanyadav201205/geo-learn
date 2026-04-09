import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const wordsList = [
  "Area - The surface covered by a geometric shape.",
  "Perimeter - The total boundary length of a shape.",
  "Triangle - A polygon with three sides.",
  "Circle - A round shape with center and radius.",
  "Square - A shape with four equal sides."
];

function Home() {
  const [currentWord, setCurrentWord] = useState(wordsList[0]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Update word every 20 seconds
    const interval = setInterval(() => {
      setCurrentWord(wordsList[currentIndex]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordsList.length);
      
      // Restart animation by removing and re-adding the animation class
      if (marqueeRef.current) {
        marqueeRef.current.style.animation = 'none';
        // Force reflow - using void operator to fix eslint error
        void marqueeRef.current.offsetHeight;
        marqueeRef.current.style.animation = 'perfectScroll 20s linear infinite';
      }
    }, 20000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <div className="navbar">
        <Link to="/" className="active">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/course">Course</Link>
        <Link to="/assessment">Assessment</Link>
        <Link to="/feedback">Feedback</Link>
      </div>

      <div className="header">
        <h1>GeoLearn</h1>
        <h3>Learn Geometry the Smart Way</h3>
        <div className="hero-btns">
          <Link to="/course">📘 Start Learning</Link>
          <Link to="/register">📝 Register Now</Link>
        </div>
      </div>

      <hr />

      <div className="marquee-word-container">
        <div className="marquee-content" ref={marqueeRef}>
          <b>Word of the Day:</b> {currentWord}
        </div>
      </div>

      <hr />

      <div className="content">
        <div className="box">
          <h2>Company Profile</h2>
          <p>
            GeoLearn is an online learning platform designed to make mathematics
            easy and practical. We focus on real-life applications of mathematical
            concepts using interactive learning.
          </p>
        </div>

        <div className="box">
          <h2>Vision</h2>
          <p>To simplify mathematics through visual and interactive education.</p>
        </div>

        <div className="box">
          <h2>Mission</h2>
          <p>To provide quality learning resources for students.</p>
        </div>

        <div className="box">
          <h2>Why GeoLearn?</h2>
          <div className="features">
            <div className="fcard">
              <h3>📌 Easy Notes</h3>
              <p>Simple formulas + real life examples for fast learning.</p>
            </div>
            <div className="fcard">
              <h3>🎥 Smart Learning</h3>
              <p>Interactive style learning to understand geometry quickly.</p>
            </div>
            <div className="fcard">
              <h3>🧠 Quick Quiz</h3>
              <p>Test yourself with assessments and improve your score.</p>
            </div>
          </div>
        </div>

        <hr />

        <h2 style={{ textAlign: "center" }}>Navigation</h2>
        <div className="nav">
          <Link to="/register">Course Registration</Link>
          <Link to="/course">Course Learning</Link>
          <Link to="/assessment">Assessment</Link>
          <Link to="/feedback">Feedback & Contact</Link>
        </div>
      </div>

      <div className="footer">
        © 2026 GeoLearn | Smart Learning for Everyone
      </div>
    </div>
  );
}

export default Home;