import "./About.css";
import aboutImage from "../../assets/categories/about-lighting.jpg";
import { Link } from "react-router-dom";
import {
  FaGem,
  FaLightbulb,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-image">

          <img
            src={aboutImage}
            alt="AL AQILI Lighting"
          />

        </div>

        <div className="about-content">

          <span className="about-subtitle">
            ABOUT AL AQILI
          </span>

          <h2>
            Luxury Lighting
            <br />
            For Every
            <span> Space</span>
          </h2>

          <p>
            At AL AQILI, we believe lighting is more than illumination.
            It is an expression of elegance, sophistication, and timeless
            design. We carefully select premium chandeliers, wall lights,
            decorative pieces, and modern lighting solutions to transform
            every interior into a luxurious experience.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <FaGem />
              <h4>Premium Quality</h4>
            </div>

            <div className="about-feature">
              <FaLightbulb />
              <h4>Modern Designs</h4>
            </div>

            <div className="about-feature">
              <FaAward />
              <h4>Luxury Collection</h4>
            </div>

            <div className="about-feature">
              <FaHandshake />
              <h4>Trusted Service</h4>
            </div>

          </div>

          <Link
            to="/our-cafe"
            className="learn-btn"
          >
            Explore location →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default About;