import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login-page">
      <div className="login-card">

        <div className="login-logo">
          <h1>AL AQILI</h1>
          <span>LIGHTING COLLECTION</span>
        </div>

        <h2>Welcome Back</h2>

        <p>
          Sign in to explore premium lighting collections
          and manage your account.
        </p>

        <form>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {/* غيرنا اسم الكلاس هنا */}
          <button type="submit" className="login-submit-btn">
            Login
          </button>

        </form>

        <div className="login-footer">
          Don't have an account?
          <Link to="/register">
            Register
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Login;