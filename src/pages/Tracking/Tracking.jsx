import "./Tracking.css";
import { useNavigate } from "react-router-dom";

function Tracking() {

  const navigate = useNavigate();

  return (
    <div className="tracking-page">

      <div className="tracking-card">

        <h1 className="tracking-title">
          Order Tracking
        </h1>

        <div className="timeline">

          <div className="step done">
            <div className="icon">📦</div>

            <div className="content">
              <h3>Order Confirmed</h3>
              <p>Your order has been successfully placed.</p>
            </div>
          </div>

          <div className="step done">
            <div className="icon">☕</div>

            <div className="content">
              <h3>Preparing Coffee</h3>
              <p>Our barista is preparing your coffee.</p>
            </div>
          </div>

          <div className="step active">
            <div className="icon">🛵</div>

            <div className="content">
              <h3>Out For Delivery</h3>
              <p>Your coffee is on the way.</p>
            </div>
          </div>

          <div className="step">
            <div className="icon">✔</div>

            <div className="content">
              <h3>Delivered</h3>
              <p>Enjoy your coffee ❤️</p>
            </div>
          </div>

        </div>

        <button
          className="back-home"
          onClick={() => navigate("/")}
        >
          Back Home
        </button>

      </div>

    </div>
  );
}

export default Tracking;