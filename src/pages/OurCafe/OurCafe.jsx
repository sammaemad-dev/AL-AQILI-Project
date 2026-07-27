import "./OurCafe.css";
import Navbar from "../../components/Navbar/Navbar";

function OurCafe() {
  return (
    <>
      <Navbar />

      <section className="our-cafe">

        <h4>VISIT US</h4>

        <h1>Find Veloura Cafe</h1>

        <p>
          We'd love to welcome you to Veloura. Visit us for handcrafted
          coffee, cozy vibes, and unforgettable moments.
        </p>

        <div className="info-boxes">

          <div className="box">
            <h3>📍 Address</h3>
            <p>Downtown, Cairo, Egypt</p>
          </div>

          <div className="box">
            <h3>☎ Phone</h3>
            <p>+20 100 000 0000</p>
          </div>

          <div className="box">
            <h3>🕒 Opening Hours</h3>
            <p>Everyday 8:00 AM - 12:00 AM</p>
          </div>

        </div>

        <iframe
          title="Veloura Cafe"
          src="https://www.google.com/maps?q=Downtown+Cairo+Egypt&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>

      </section>
    </>
  );
}

export default OurCafe;