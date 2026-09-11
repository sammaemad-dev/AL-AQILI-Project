import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services/authService";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const loginData = {
        email: email.trim(),
        password,
      };

      const user = await login(loginData);

      // Save logged-in user in AuthContext + localStorage
      loginUser(user);

      alert("Login successful!");

      // Admin
      if (user.role === "Admin") {
        navigate("/dashboard");
      }

      // Customer
      else {
        navigate("/");
      }

    } catch (error) {
      console.error("Login Error:", error);

      const message =
        error.response?.data?.message ||
        "Invalid email or password.";

      alert(message);

    } finally {
      setLoading(false);
    }
  };

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

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="login-submit-btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
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