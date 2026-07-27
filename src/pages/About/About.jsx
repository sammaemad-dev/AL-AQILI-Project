import "./About.css";
import aboutImage from "../../sections/images/About.png";
import { Link } from "react-router-dom";
function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src={aboutImage} alt="Veloura Coffee" />
        </div>

        <div className="about-content">
          <span className="about-subtitle">About Us</span>

          <h2>
            More Than Just
            <br />
            a <span>Coffee</span>
          </h2>

          <p>
            At Veloura, we believe coffee is more than a drink —
            it's an experience. Every cup we serve is a blend of
            passion, quality, and perfection.
          </p>

          <div className="features">
            <div className="feature">
              <span>✓</span>
              <p>Sustainably Sourced Beans</p>
            </div>

            <div className="feature">
              <span>✓</span>
              <p>Ethically Traded</p>
            </div>

            <div className="feature">
              <span>✓</span>
              <p>Freshly Roasted</p>
            </div>

            <div className="feature">
              <span>✓</span>
              <p>Barista Crafted</p>
            </div>
          </div>

          {/* <button className="learn-btn">
            Learn More →
          </button> */}
          <Link to="/our-cafe" className="learn-btn">
  Show the location →
</Link>
        </div>

      </div>
    </section>
  );
}

export default About;