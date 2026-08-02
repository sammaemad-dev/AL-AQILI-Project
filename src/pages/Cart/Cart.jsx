import "./Cart.css";
import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import {
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 250 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <div className="empty-cart-box">
          <ShoppingBag size={70} strokeWidth={1.5} />

          <h2>Your Shopping Bag is Empty</h2>

          <p>
            Add your favorite lighting products and they will appear here.
          </p>

          <Link to="/" className="continue-shopping">
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">

      <div className="cart-container">

        <div className="cart-products">

          <h2 className="cart-title">
            Shopping Cart ({cartItems.length})
          </h2>

          {cartItems.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-info">

                <h3>{item.name}</h3>

                <span className="price">
                  EGP {item.price.toLocaleString()}
                </span>

                <div className="quantity-box">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    <Minus size={16} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    <Plus size={16} />
                  </button>

                </div>

              </div>

              <div className="item-right">

                <span className="item-total">
                  EGP {(item.price * item.quantity).toLocaleString()}
                </span>

                <button
                  className="delete-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  <Trash2 size={20} />
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="cart-summary">

          <h2>Order Summary</h2>

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

          <div className="summary-row total-row">
            <span>Total</span>
            <span>
              EGP {total.toLocaleString()}
            </span>
          </div>

          <Link
  to="/checkout"
  className="checkout-btn"
>
  Proceed To Checkout
</Link>

          <button
            className="clear-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>

          <Link
            to="/"
            className="continue-shopping"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Cart;