import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  // React Hooks - useState
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    classYear: "",
    mode: "",
    confirm: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // React Events - handleChange
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  }

  // Password Toggle Function
  function togglePassword() {
    setShowPassword(!showPassword);
  }

  function toggleConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  // React Form Submission - validateForm
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission

    let name = form.name.trim();
    let email = form.email.trim();
    let phone = form.phone.trim();
    let password = form.password;
    let confirmPassword = form.confirmPassword;
    let gender = form.gender;
    let classYear = form.classYear;
    let mode = form.mode;
    
    let nameRegex = /^[A-Za-z\s]+$/;
    let phoneRegex = /^[0-9]{10}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Name validation
    if (name === "") {
      alert("❌ Please enter your name");
      return;
    }
    if (!nameRegex.test(name)) {
      alert("❌ Name should contain only letters");
      return;
    }

    // Email validation
    if (email === "") {
      alert("❌ Please enter your email");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("❌ Email must end with @gmail.com");
      return;
    }

    // Phone validation
    if (phone === "") {
      alert("❌ Please enter mobile number");
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert("❌ Phone number must be exactly 10 digits");
      return;
    }

    // Password validation
    if (password === "") {
      alert("❌ Please enter password");
      return;
    }
    if (password.length < 6) {
      alert("❌ Password must be at least 6 characters long");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      alert("❌ Password must contain at least one lowercase letter");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      alert("❌ Password must contain at least one UPPERCASE letter");
      return;
    }
    if (!/(?=.*\d)/.test(password)) {
      alert("❌ Password must contain at least one number");
      return;
    }
    if (!hasSpecialChar) {
      alert("⚠️ Tip: Adding special characters (!@#$% etc.) makes password stronger");
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    // Gender validation
    if (!gender) {
      alert("❌ Please select your gender");
      return;
    }

    // Class validation
    if (!classYear) {
      alert("❌ Please select your class/year");
      return;
    }

    // Mode validation
    if (!mode) {
      alert("❌ Please select learning mode");
      return;
    }

    // Confirm checkbox validation
    if (!form.confirm) {
      alert("❌ Please confirm the information is correct");
      return;
    }

    // Save to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);
    localStorage.setItem("gender", gender);
    localStorage.setItem("class", classYear);
    localStorage.setItem("mode", mode);

    alert("✅ Registration Successful! Welcome to GeoLearn 🎉");
    navigate("/login");
  }

  return (
    <div>
      {/* React Router - Navbar */}
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/register" className="active">Register</Link>
        <Link to="/course">Course</Link>
        <Link to="/assessment">Assessment</Link>
        <Link to="/feedback">Feedback</Link>
      </div>

      <div className="header">
        <h1>Course Registration</h1>
        <h3>Geometric Shapes: Area & Applications</h3>
      </div>

      <hr className="divider" />

      {/* React Component - Registration Form */}
      <div className="container">
        {/* React Form Submission */}
        <form onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <label>👤 Full Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          {/* Email */}
          <label>📧 Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          {/* Mobile Number */}
          <label>📞 Mobile Number:</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter 10 digit number"
            maxLength="10"
            required
          />

          {/* Password with Toggle */}
          <label>🔒 Password:</label>
          <div className="pass-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
            <button type="button" onClick={togglePassword}>
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Confirm Password with Toggle */}
          <label>🔒 Confirm Password:</label>
          <div className="pass-box">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
            />
            <button type="button" onClick={toggleConfirmPassword}>
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Gender - Radio Buttons */}
          <label>⚧ Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={form.gender === "Male"}
                onChange={handleChange}
                required
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={form.gender === "Female"}
                onChange={handleChange}
              /> Female
            </label>
          </div>

          {/* Class / Year - Select Dropdown */}
          <label>🎓 Class / Year:</label>
          <select
            name="classYear"
            value={form.classYear}
            onChange={handleChange}
            required
          >
            <option value="">Select Class / Year</option>
            <option value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
            <option value="FY">FY</option>
            <option value="SY">SY</option>
            <option value="TY">TY</option>
          </select>

          {/* Learning Mode - Radio Buttons */}
          <label>📘 Learning Mode:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="mode"
                value="Notes"
                checked={form.mode === "Notes"}
                onChange={handleChange}
                required
              /> Notes
            </label>
            <label>
              <input
                type="radio"
                name="mode"
                value="Video"
                checked={form.mode === "Video"}
                onChange={handleChange}
              /> Video
            </label>
            <label>
              <input
                type="radio"
                name="mode"
                value="Both"
                checked={form.mode === "Both"}
                onChange={handleChange}
              /> Both
            </label>
          </div>

          {/* Confirm Checkbox */}
          <div className="check">
            <label className="confirm">
              <input
                type="checkbox"
                name="confirm"
                checked={form.confirm}
                onChange={handleChange}
                required
              />
              <span>I confirm the information is correct</span>
            </label>
          </div>

          {/* Submit Button */}
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default Register;