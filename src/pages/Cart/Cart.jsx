import "./Cart.css";

import { useCart } from "../../context/CartContext";

import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">

        <div className="empty-cart-box">

          <ShoppingBag size={70} strokeWidth={1.5} />

          <h2>Your Shopping Bag is Empty</h2>

          <p>
            Add your favorite lighting products and they will appear here.
          </p>

        </div>

      </section>
    );
  }

  return (
    <section className="cart-page">

      <div className="cart-container">

        <div className="cart-products">

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
                  EGP {item.price}
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

              <button
                className="delete-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                <Trash2 size={20} />
              </button>

            </div>

          ))}

        </div>

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">

            <span>Total</span>

            <span>
              EGP {total.toLocaleString()}
            </span>

          </div>

          <button className="checkout-btn">
            Proceed To Checkout
          </button>

          <button
            className="clear-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>

        </div>

      </div>

    </section>
  );
}

export default Cart;