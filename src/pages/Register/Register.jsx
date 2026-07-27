import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register-page">
      <div className="register-card">

        <div className="register-logo">
          <h1>AL AQILI</h1>
          <span>LIGHTING COLLECTION</span>
        </div>

        <h2>Create Your Account</h2>

        <p>
          Join AL AQILI and discover luxury lighting crafted
          to transform every corner of your home.
        </p>

        <form className="register-form">

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
            />
          </div>

          <button
            type="submit"
            className="register-submit-btn"
          >
            Create Account
          </button>

        </form>

        <div className="register-footer">
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Register;