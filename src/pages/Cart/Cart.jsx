import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { menuItems } from "../Menu/MenuData";

function IconBack() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

const DELIVERY_FEE = 80;

export default function Cart({ cart, onUpdateCart, onClearCart }) {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  // Build list of cart items with full product data
  const cartItems = Object.entries(cart)
    .map(([id, qty]) => {
      const item = menuItems.find((m) => m.id === Number(id));
      return item ? { ...item, qty } : null;
    })
    .filter(Boolean);

  const subtotal   = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const total      = cartItems.length > 0 ? subtotal + DELIVERY_FEE : 0;
  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);

  function handleIncrease(id) {
    onUpdateCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }

  function handleDecrease(id) {
    onUpdateCart((prev) => {
      const next = { ...prev };
      if (next[id] <= 1) delete next[id];
      else next[id] -= 1;
      return next;
    });
  }

  function handlePlaceOrder() {
    setSuccess(true);
  }

  function handleSuccessClose() {
    onClearCart();
    setSuccess(false);
    navigate("/menu");
  }

  return (
    <div className="cart-page">
      {/* Header */}
      <header className="cart-header">
        <button className="cart-header__back" onClick={() => navigate(-1)} aria-label="Go back">
          <IconBack />
        </button>
        <span className="cart-header__title">Your Order</span>
        {totalItems > 0 ? (
          <span className="cart-header__count">{totalItems} item{totalItems > 1 ? "s" : ""}</span>
        ) : (
          <span style={{ width: 60 }} />
        )}
      </header>

      {/* Body */}
      <div className="cart-body">
        {cartItems.length === 0 ? (
          /* Empty state */
          <div className="cart-empty">
            <div className="cart-empty__icon">🛒</div>
            <p className="cart-empty__text">Your cart is empty</p>
            <p className="cart-empty__sub">Add something delicious from the menu</p>
            <button className="cart-empty__btn" onClick={() => navigate("/menu")}>
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            {/* Item list */}
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item__image"
                />
                <div className="cart-item__info">
                  <h3 className="cart-item__name">{item.name}</h3>
                  <p className="cart-item__subtitle">{item.subtitle}</p>
                  <p className="cart-item__unit-price">{item.price} Rs each</p>
                </div>

                {/* Qty controls */}
                <div className="cart-item__controls">
                  <button
                    className="cart-item__qty-btn cart-item__qty-btn--remove"
                    onClick={() => handleDecrease(item.id)}
                    aria-label="Remove one"
                  >
                    −
                  </button>
                  <span className="cart-item__qty">{item.qty}</span>
                  <button
                    className="cart-item__qty-btn"
                    onClick={() => handleIncrease(item.id)}
                    aria-label="Add one"
                  >
                    +
                  </button>
                </div>

                <span className="cart-item__price">
                  {item.price * item.qty} Rs
                </span>
              </div>
            ))}

            {/* Summary */}
            <div className="cart-summary">
              <h3 className="cart-summary__title">Order Summary</h3>

              <div className="cart-summary__row">
                <span className="cart-summary__label">Subtotal</span>
                <span className="cart-summary__value">{subtotal} Rs</span>
              </div>
              <div className="cart-summary__row">
                <span className="cart-summary__label">Delivery fee</span>
                <span className="cart-summary__value">{DELIVERY_FEE} Rs</span>
              </div>
              <div className="cart-summary__row">
                <span className="cart-summary__label">Items</span>
                <span className="cart-summary__value">{totalItems}</span>
              </div>

              <div className="cart-summary__divider" />

              <div className="cart-summary__row cart-summary__row--total">
                <span className="cart-summary__label">Total</span>
                <span className="cart-summary__value">{total} Rs</span>
              </div>
            </div>

            {/* Checkout */}
            <button className="cart-checkout-btn" onClick={handlePlaceOrder}>
              Place Order — {total} Rs
            </button>
          </>
        )}
      </div>

      {/* Success overlay */}
      {success && (
        <div className="cart-success">
          <div className="cart-success__card">
            <div className="cart-success__icon">✅</div>
            <h3 className="cart-success__title">Order Placed!</h3>
            <p className="cart-success__sub">
              Your coffee is being prepared.<br />Estimated delivery: 20–30 min.
            </p>
            <button className="cart-success__btn" onClick={handleSuccessClose}>
              Back to Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}