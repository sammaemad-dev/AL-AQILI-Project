import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-container">

        {/* Title */}

        <div className="contact-title">

          <span className="contact-badge">
            Luxury Lighting Experience
          </span>

          <h1>Let's Illuminate Your Space</h1>

          <p>
            Whether you're looking for elegant chandeliers, luxury wall lights,
            or complete lighting solutions, our team is here to help create the
            perfect atmosphere for your home.
          </p>

        </div>

        {/* Content */}

        <div className="contact-content">

          {/* LEFT */}

          <aside className="contact-info">

            <div className="gold-circle"></div>

            <h2>Visit Our Showroom</h2>

            <p className="info-text">
              Experience our premium lighting collection in person and get
              personalized recommendations from our specialists.
            </p>

            <div className="info-card">

              <div className="info-item">
                <div className="icon-box">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4>Address</h4>
                  <p>Cairo, Egypt</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4>Phone</h4>
                  <p>+20 100 000 0000</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <FaEnvelope />
                </div>

                <div>
                  <h4>Email</h4>
                  <p>info@alaqili.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <FaClock />
                </div>

                <div>
                  <h4>Working Hours</h4>
                  <p>Sat - Thu | 10 AM - 10 PM</p>
                </div>
              </div>

            </div>

            <div className="social-section">

              <h3>Follow Us</h3>

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

              </div>

            </div>

          </aside>

          {/* RIGHT */}

          <div className="contact-form-card">

            <h2>Send Us a Message</h2>

            <p>
              Fill out the form below and one of our lighting experts will get
              back to you shortly.
            </p>

            <form className="contact-form">

              <div className="grid">

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

                  <option>Select Product</option>

                  <option>Chandeliers</option>

                  <option>Wall Lights</option>

                  <option>Light Panels</option>

                  <option>Decor</option>

                  <option>Plants</option>

                </select>

              </div>

              <input
                className="subject"
                type="text"
                placeholder="Subject"
              />

              <textarea
                placeholder="Tell us about your project..."
              ></textarea>

              <button>

                <FaPaperPlane />

                Send Message

              </button>

              <span className="note">
                We usually reply within 24 hours.
              </span>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;