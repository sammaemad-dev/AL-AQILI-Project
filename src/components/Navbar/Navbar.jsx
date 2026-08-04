import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/imagess/logo.png";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../../context/CartContext";
import CartDrawer from "../Cart/CartDrawer";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav className="navbar">

        {/* Logo */}

        {/* <div className="logo">
          <h2>AL AQILI</h2>
          <p>LIGHTING</p>
        </div> */}
<Link to="/" className="logo">
  <img
    src={logo}
    alt="AL AQILI Logo"
    className="logo-img"
  />

  <div className="logo-text">
    <h2>AL AQILI</h2>
    <p>LIGHTING COLLECTION</p>
  </div>
</Link>
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

          <li><Link to="/">Home</Link></li>
           <li>
  <Link to="/categories">Categories</Link>
</li>
          {/* <li><Link to="/chandeliers">Chandeliers</Link></li>
          <li><Link to="/wall-lights">Wall Lights</Link></li>
          <li><Link to="/light-panels">Light Panels</Link></li>
          <li><Link to="/decor">Decor</Link></li>
          <li><Link to="/plants">Plants</Link></li>
          <li><Link to="/accessories">Accessories</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {!isLoggedIn ? (

            <div className="mobile-auth">

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

            <div className="mobile-icons">

              <Search
                className="nav-icon"
                size={24}
              />

              <Link to="/profile">
                <UserRound
                  className="nav-icon"
                  size={24}
                />
              </Link>

              <Link to="/wishlist">
                <Heart
                  className="nav-icon"
                  size={24}
                />
              </Link>

              <button
                className="cart-button"
                onClick={() => setOpenCart(true)}
              >

                <ShoppingBag
                  className="nav-icon"
                  size={24}
                />

                {cartCount > 0 && (
                  <span className="cart-count">
                    {cartCount}
                  </span>
                )}

              </button>

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
            />

            <Link to="/profile">
              <UserRound
                className="nav-icon"
                size={26}
              />
            </Link>

            <Link to="/wishlist">
              <Heart
                className="nav-icon"
                size={26}
              />
            </Link>

            <button
              className="cart-button"
              onClick={() => setOpenCart(true)}
            >

              <ShoppingBag
                className="nav-icon"
                size={26}
              />

              {cartCount > 0 && (
                <span className="cart-count">
                  {cartCount}
                </span>
              )}

            </button>

          </div>

        )}

      </nav>

      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
      />
    </>
  );
}

export default Navbar;