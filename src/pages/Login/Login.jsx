import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Login تجريبي
    if (email.trim() && password.trim()) {
      localStorage.setItem("token", "demo-token");
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Basmallah",
          email,
        })
      );

      navigate("/");
      window.location.reload();
    } else {
      alert("Please enter your email and password.");
    }
  };

  return (
    <section className="login-page">
      <div className="login-card">

        <div className="login-logo">
          <h1>AL AQILI</h1>
          <span>LIGHTING COLLECTION</span>
        </div>

        <h2>Welcome Back</h2>

        <p>
          Sign in to explore premium lighting collections
          and manage your account.
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-submit-btn">
            Login
          </button>

        </form>

        <div className="login-footer">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </div>

      </div>
    </section>
  );
}

export default Login;