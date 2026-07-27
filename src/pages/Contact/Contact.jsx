import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-container">

        <div className="contact-title">

          <h1>Get In Touch With Veloura</h1>

          <p>
            We'd love to hear from you. Fill out the form and we'll get
            back to you as soon as possible.
          </p>

        </div>

        <div className="contact-content">

          {/* Left Side */}

          <div className="contact-info">

            <h2>Our Cafe</h2>

            <div className="info">

              <p>
                <FaMapMarkerAlt className="icon" />
                Downtown, Cairo, Egypt
              </p>

              <p>
                <FaPhoneAlt className="icon" />
                +20 100 000 0000
              </p>

              <p>
                <FaEnvelope className="icon" />
                hello@veloura.com
              </p>

              <p>
                <FaClock className="icon" />
                Everyday 8:00 AM - 12:00 AM
              </p>

            </div>

            <h3>Follow Us</h3>

            <div className="socials">

              <FaFacebookF />

              <FaInstagram />

              <FaTwitter />

            </div>

          </div>

          {/* Right Side */}

          <form className="contact-form">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Phone Number"
            />

            <select>

              <option>Choose Service</option>

              <option>Reservation</option>

              <option>Private Event</option>

              <option>Catering</option>

              <option>Feedback</option>

            </select>

            <input
              type="text"
              placeholder="Preferred Date"
            />

            <textarea
              placeholder="Tell us how we can help..."
            ></textarea>

            <button>

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;