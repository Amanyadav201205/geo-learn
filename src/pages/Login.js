import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // CSS file (same styling)

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const savedPhone = localStorage.getItem("phone");
    const savedPassword = localStorage.getItem("password");

    if (phone === savedPhone && password === savedPassword) {
      alert("✅ Login Successful");
      navigate("/"); // index.html → Home page
    } else {
      alert("❌ Invalid Phone or Password");
    }
  }

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>📞 Phone Number</label>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>🔒 Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <div className="link">
          <Link to="/register">New User? Register</Link> 
        </div>
      </form>
    </div>
  );
}

export default Login;