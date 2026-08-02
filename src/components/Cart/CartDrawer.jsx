import "./CartDrawer.css";
import { Link } from "react-router-dom";
function CartDrawer({ open, onClose }) {

  if (!open) return null;

  return (
    <>
      <div
        className="cart-overlay"
        onClick={onClose}
      ></div>

      <div className="cart-drawer">

        <div className="cart-header">

          <h2>Shopping Bag</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <div className="cart-body">

          <p className="empty-cart">
            Your shopping bag is empty.
          </p>

        </div>

        <div className="cart-footer">

         <Link
  to="/cart"
  className="view-cart-btn"
  onClick={onClose}
>
  View Cart
</Link>

          <button className="checkout-btn">
            Checkout
          </button>

        </div>

      </div>
    </>
  );
}

export default CartDrawer;