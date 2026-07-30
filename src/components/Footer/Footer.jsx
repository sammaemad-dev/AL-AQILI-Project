import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}

        <div className="footer-col">

          <h2 className="footer-logo">
            AL AQILI
          </h2>

          <p className="footer-text">
            Discover premium lighting solutions crafted to bring elegance,
            luxury, and warmth into every space. From chandeliers to modern
            décor, AL AQILI lights your home beautifully.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/chandeliers">Chandeliers</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/login">Login</Link>

        </div>

        {/* Contact */}

        <div className="footer-col">

          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt />
            Cairo, Egypt
          </p>

          <p>
            <FaPhoneAlt />
            +20 100 000 0000
          </p>

          <p>
            <FaEnvelope />
            info@alaqili.com
          </p>

        </div>

        {/* Categories */}

        <div className="footer-col">

          <h3>Categories</h3>

          <Link to="/chandeliers">Chandeliers</Link>

          <Link to="/wall-lights">Wall Lights</Link>

          <Link to="/light-panels">Light Panels</Link>

          <Link to="/decor">Decor</Link>

          <Link to="/plants">Artificial Plants</Link>

        </div>

      </div>

      <div className="socials">

        <a href="#">
          <FaFacebookF />
        </a>

        <a href="#">
          <FaInstagram />
        </a>

        <a href="#">
          <FaTwitter />
        </a>

        <a href="#">
          <FaTiktok />
        </a>

      </div>

      <div className="copyright">

        © 2026 AL AQILI Lighting. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;