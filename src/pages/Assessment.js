import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Assessment.css";

function Assessment() {
  const questions = [
    {
      q: "Area of a square with side 5 cm is:",
      options: ["10 cm²", "25 cm²", "20 cm²"],
      answer: "25 cm²"
    },
    {
      q: "Formula of area of a circle is:",
      options: ["2πr", "πr²", "πd"],
      answer: "πr²"
    },
    {
      q: "Triangle area formula is:",
      options: ["base × height", "½ × base × height", "side × side"],
      answer: "½ × base × height"
    },
    {
      q: "Area of rectangle (8 × 5):",
      options: ["13 cm²", "40 cm²", "26 cm²"],
      answer: "40 cm²"
    },
    {
      q: "Triangle (10 × 6):",
      options: ["30 cm²", "60 cm²", "16 cm²"],
      answer: "30 cm²"
    },
    {
      q: "Circle radius 7:",
      options: ["49π", "14π", "7π"],
      answer: "49π"
    },
    {
      q: "Unit of area:",
      options: ["cm", "cm²", "cm³"],
      answer: "cm²"
    },
    {
      q: "Parallelogram area:",
      options: ["side × side", "base × height", "l × b"],
      answer: "base × height"
    },
    {
      q: "Square side 9:",
      options: ["18 cm²", "81 cm²", "36 cm²"],
      answer: "81 cm²"
    },
    {
      q: "Road sign shape:",
      options: ["Circle", "Triangle", "Rectangle"],
      answer: "Triangle"
    }
  ];

  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [formError, setFormError] = useState("");

  function handleOption(i, opt) {
    if (submitted) return;
    setSelected({ ...selected, [i]: opt });
    setFormError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (submitted) return;

    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(selected).length;
    
    if (answeredQuestions < totalQuestions) {
      setFormError(`Please answer all ${totalQuestions} questions. You have answered ${answeredQuestions} questions.`);
      return;
    }

    let sc = 0;
    questions.forEach((q, i) => {
      if (selected[i] === q.answer) sc++;
    });

    setScore(sc);
    setSubmitted(true);
    setFormError("");
  }

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      handleSubmit({ preventDefault: () => {} });
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  function formatTime() {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  }

  function getClass(i, opt) {
    if (!submitted) return "option";

    if (opt === questions[i].answer) return "option correct";

    if (selected[i] === opt && opt !== questions[i].answer)
      return "option wrong";

    return "option";
  }

  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/course">Course</Link>
        <Link to="/assessment" className="active">Assessment</Link>
        <Link to="/feedback">Feedback</Link>
      </div>

      <div className="header">
        <h1>Assessment Quiz</h1>
      </div>

      <div className="timerBox">
        Time Left: {formatTime()}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="quiz-box">
          {questions.map((q, i) => (
            <div className="qcard" key={i}>
              <p>{i + 1}. {q.q}</p>

              {q.options.map((opt, j) => (
                <label key={j} className={getClass(i, opt)}>
                  <input
                    type="radio"
                    name={"q" + i}
                    value={opt}
                    checked={selected[i] === opt}
                    onChange={() => handleOption(i, opt)}
                    disabled={submitted}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          ))}

          {formError && !submitted && (
            <div className="error-message">
              ⚠️ {formError}
            </div>
          )}

          {!submitted && (
            <button type="submit" className="btn">
              Submit Test
            </button>
          )}

          {submitted && (
            <>
              <h2 className="result">
                Your Score: {score}/{questions.length}
              </h2>

              <button
                type="button"
                className="btn2"
                onClick={() => window.location.reload()}
              >
                Retry Test
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default Assessment;