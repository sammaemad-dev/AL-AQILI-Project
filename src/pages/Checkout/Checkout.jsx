import "./Checkout.css";
import { useCart } from "../../context/CartContext";

function Checkout() {

  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 250 : 0;

  const total = subtotal + shipping;

  return (

    <section className="checkout-page">

      <div className="checkout-container">

        {/* Left */}

        <div className="checkout-form">

          <h2>Checkout</h2>

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
            />

          </div>

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="text"
              placeholder="01xxxxxxxxx"
            />

          </div>

          <div className="form-group">

            <label>City</label>

            <input
              type="text"
              placeholder="Cairo"
            />

          </div>

          <div className="form-group">

            <label>Address</label>

            <textarea
              rows="4"
              placeholder="Street, Building..."
            />

          </div>

          <div className="form-group">

            <label>Notes</label>

            <textarea
              rows="3"
              placeholder="Optional..."
            />

          </div>

          <div className="payment-box">

            <h3>Payment Method</h3>

            <div className="cash-box">

              <input
                type="radio"
                checked
                readOnly
              />

              <span>Cash On Delivery</span>

            </div>

          </div>

          <button className="place-order-btn">

            Place Order

          </button>

        </div>

        {/* Right */}

        <div className="order-summary">

          <h2>Order Summary</h2>

          {cartItems.map(item => (

            <div
              key={item.id}
              className="summary-item"
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div>

                <h4>{item.name}</h4>

                <p>
                  Qty : {item.quantity}
                </p>

              </div>

              <span>

                EGP {(item.price * item.quantity).toLocaleString()}

              </span>

            </div>

          ))}

          <hr />

          <div className="summary-row">

            <span>Subtotal</span>

            <span>

              EGP {subtotal.toLocaleString()}

            </span>

          </div>

          <div className="summary-row">

            <span>Shipping</span>

            <span>

              EGP {shipping.toLocaleString()}

            </span>

          </div>

          <div className="summary-row total">

            <span>Total</span>

            <span>

              EGP {total.toLocaleString()}

            </span>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Checkout;