import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check password
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const registerData = {
        fullName: fullName.trim(),
        email: email.trim(),
        password,
        confirmPassword,
      };

      await register(registerData);

      alert("Account created successfully!");

      navigate("/login");

    } catch (error) {
      console.error("Register Error:", error);

      const message =
        error.response?.data?.message ||
        "Registration failed. Please try again.";

      alert(message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-page">

      <div className="register-card">

        <div className="register-logo">
          <h1>AL AQILI</h1>
          <span>LIGHTING COLLECTION</span>
        </div>

        <h2>Create Your Account</h2>

        <p>
          Join AL AQILI and discover luxury lighting crafted
          to transform every corner of your home.
        </p>

        <form
          className="register-form"
          onSubmit={handleRegister}
        >

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>

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
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="register-submit-btn"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <div className="register-footer">
          Already have an account?

          <Link to="/login">
            Login
          </Link>
        </div>

      </div>

    </section>
  );
}

export default Register;