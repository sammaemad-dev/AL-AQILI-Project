import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>VELOURA</h2>
        <p>CAFE</p>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>

        <li>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
        </li>

        <li>
          <Link to="/reviews" onClick={() => setMenuOpen(false)}>
            Review
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>

        <div className="mobile-auth">
          <Link
            to="/login"
            className="login-btn"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/register"
            className="register-btn"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      </ul>

      <div className="auth-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="register-btn">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;