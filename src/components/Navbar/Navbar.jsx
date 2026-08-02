import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../../context/CartContext";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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

      {/* Navigation */}

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/chandeliers"
            onClick={() => setMenuOpen(false)}
          >
            Chandeliers
          </Link>
        </li>

        <li>
          <Link
            to="/wall-lights"
            onClick={() => setMenuOpen(false)}
          >
            Wall Lights
          </Link>
        </li>

        <li>
          <Link
            to="/light-panels"
            onClick={() => setMenuOpen(false)}
          >
            Light Panels
          </Link>
        </li>

        <li>
          <Link
            to="/decor"
            onClick={() => setMenuOpen(false)}
          >
            Decor
          </Link>
        </li>

        <li>
          <Link
            to="/plants"
            onClick={() => setMenuOpen(false)}
          >
            Plants
          </Link>
        </li>

        <li>
          <Link
            to="/accessories"
            onClick={() => setMenuOpen(false)}
          >
            Accessories
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
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

            <Search
              className="nav-icon"
              size={24}
              strokeWidth={1.8}
            />

            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
            >
              <UserRound
                className="nav-icon"
                size={24}
                strokeWidth={1.8}
              />
            </Link>

            <Link
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
            >
              <Heart
                className="nav-icon"
                size={24}
                strokeWidth={1.8}
              />
            </Link>

            <Link
              to="/cart"
              className="cart-icon"
              onClick={() => setMenuOpen(false)}
            >

              <ShoppingBag
                className="nav-icon"
                size={24}
                strokeWidth={1.8}
              />

              {cartCount > 0 && (

                <span className="cart-count">

                  {cartCount}

                </span>

              )}

            </Link>

          </div>

        )}

      </ul>

      {/* Desktop */}

      {!isLoggedIn ? (

        <div className="auth-buttons">

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="register-btn"
          >
            Register
          </Link>

        </div>

      ) : (

        <div className="nav-icons">

          <Search
            className="nav-icon"
            size={26}
            strokeWidth={1.8}
          />

          <Link to="/profile">

            <UserRound
              className="nav-icon"
              size={26}
              strokeWidth={1.8}
            />

          </Link>

          <Link to="/wishlist">

            <Heart
              className="nav-icon"
              size={26}
              strokeWidth={1.8}
            />

          </Link>

          <Link
            to="/cart"
            className="cart-icon"
          >

            <ShoppingBag
              className="nav-icon"
              size={26}
              strokeWidth={1.8}
            />

            {cartCount > 0 && (

              <span className="cart-count">

                {cartCount}

              </span>

            )}

          </Link>

        </div>

      )}

    </nav>

  );

}

export default Navbar;