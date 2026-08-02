import "./CartDrawer.css";
import { Link, useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

function CartDrawer({ open, onClose }) {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  if (!open) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>

      <div className="cart-drawer">

        {/* Header */}
        <div className="cart-header">
          <h2>Shopping Bag</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="cart-body">

          {cartItems.length === 0 ? (

            <p className="empty-cart">
              Your shopping bag is empty.
            </p>

          ) : (

            cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-info">

                  <div className="cart-top">

                    <h4>{item.name}</h4>

                    <button
                      type="button"
                      className="delleete-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                  <p className="cart-price">
                    EGP {item.price}
                  </p>

                  <div className="quantity-box">

                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

        {/* Total */}
        {cartItems.length > 0 && (

          <div className="cart-total">

            <span>Total</span>

            <strong>EGP {total}</strong>

          </div>

        )}

        {/* Footer */}
        <div className="cart-footer">

          <Link
            to="/cart"
            className="view-cart-btn"
            onClick={onClose}
          >
            View Cart
          </Link>

          <button
            className="checkout-btn"
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>

        </div>

      </div>
    </>
  );
}

export default CartDrawer;