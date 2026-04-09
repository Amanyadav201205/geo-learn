import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Course from "./pages/Course";
import Assessment from "./pages/Assessment";
import Feedback from "./pages/Feedback";

// add these
import Circle from "./pages/shapes/Circle";
import Square from "./pages/shapes/Square";
import Trapezium from "./pages/shapes/Trapezium";
import Triangle from "./pages/shapes/Triangle";
import Rectangle from "./pages/shapes/Rectangle";
import Parallelogram from "./pages/shapes/Parallelogram";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<Course />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/circle" element={<Circle />} />
        <Route path="/square" element={<Square />} />
        <Route path="/trapezium" element={<Trapezium />} />
        <Route path="/triangle" element={<Triangle />} />
        <Route path="/rectangle" element={<Rectangle />} />
        <Route path="/parallelogram" element={<Parallelogram />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;