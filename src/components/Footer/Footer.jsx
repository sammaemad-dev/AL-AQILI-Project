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
            VELOURA
          </h2>

          <p className="footer-text">
            Experience handcrafted coffee made with premium beans,
            warm hospitality and unforgettable moments.
            Every cup is brewed with passion.
          </p>

        </div>

        {/* Links */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/menu">Menu</Link>

          <Link to="/reviews">Reviews</Link>

          <Link to="/contact">Contact</Link>

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
            hello@veloura.com
          </p>

        </div>

        {/* Hours */}

        <div className="footer-col">

          <h3>Opening Hours</h3>

          <p>Monday - Friday</p>

          <span>8:00 AM - 11:00 PM</span>

          <p>Saturday - Sunday</p>

          <span>9:00 AM - 12:00 AM</span>

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

        © 2026 Veloura Cafe. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;