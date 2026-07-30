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

  // هيبقى true لو فيه token بعد الـ Login
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        {/* <Link
          to="/"
          className="logo-link"
          onClick={() => setMenuOpen(false)}
        > */}
          <h2>AL AQILI</h2>
          <p>LIGHTING</p>
        {/* </Link> */}
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

      {/* Navigation */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>

        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

        <li><Link to="/chandeliers" onClick={() => setMenuOpen(false)}>Chandeliers</Link></li>

        <li><Link to="/wall-lights" onClick={() => setMenuOpen(false)}>Wall Lights</Link></li>

        <li><Link to="/light-panels" onClick={() => setMenuOpen(false)}>Light Panels</Link></li>

        <li><Link to="/decor" onClick={() => setMenuOpen(false)}>Decor</Link></li>

        <li><Link to="/plants" onClick={() => setMenuOpen(false)}>Plants</Link></li>

        <li><Link to="/accessories" onClick={() => setMenuOpen(false)}>Accessories</Link></li>

        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>

        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

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

            <Link to="/profile" onClick={() => setMenuOpen(false)}>
              <FiUser />
            </Link>

            <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
              <FiHeart />
            </Link>

            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              <FiShoppingBag />
            </Link>

          </div>
        )}

      </ul>

      {/* Desktop */}

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

          <FiSearch className="icon" title="Search" />

          <Link to="/profile">
            <FiUser className="icon" title="Profile" />
          </Link>

          <Link to="/wishlist">
            <FiHeart className="icon" title="Wishlist" />
          </Link>

          <Link to="/cart" className="cart-icon">
            <FiShoppingBag className="icon" title="Cart" />
            <span className="cart-count">1</span>
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;