import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register-page">

      <div className="register-overlay"></div>

      <div className="register-container">

        {/* Left Side */}

        <div className="register-left">

          <h1>Veloura Cafe</h1>

          <h2>
            Join Our
            <br />
            Coffee Community
          </h2>

          <p>
            Discover handcrafted coffee, exclusive offers,
            and unforgettable moments. Create your account
            and enjoy the Veloura experience.
          </p>

        </div>

        {/* Right Side */}

        <div className="register-card">

          <h2>Create Account</h2>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <input
              type="password"
              placeholder="Confirm Password"
            />

            <button>
              Create Account
            </button>

          </form>

          <p>
            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}

export default Register;