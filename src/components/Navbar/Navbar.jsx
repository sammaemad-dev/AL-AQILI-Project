import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // غيريها لـ true بعد ما تعملي Authentication
  const isLoggedIn = false;

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h2>AL AQILI</h2>
        <p>LIGHTING</p>
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

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Chandeliers
          </Link>
        </li>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Wall Lights
          </Link>
        </li>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Light Panels
          </Link>
        </li>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Decor
          </Link>
        </li>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Plants
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>

        {/* Mobile */}
        {!isLoggedIn ? (
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
        ) : (
          <div className="mobile-icons">
            <FiSearch />
            <FiUser />
            <FiHeart />
            <FiShoppingBag />
          </div>
        )}
      </ul>

      {/* Desktop Right Side */}
      {!isLoggedIn ? (
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>
      ) : (
        <div className="nav-icons">
          <FiSearch title="Search" />

          <Link to="/profile">
            <FiUser title="Account" />
          </Link>

          <Link to="/wishlist">
            <FiHeart title="Wishlist" />
          </Link>

          <Link to="/cart">
            <FiShoppingBag title="Cart" />
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;