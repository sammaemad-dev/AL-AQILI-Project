import "./Wishlist.css";
import { Link } from "react-router-dom";

import { Heart, ShoppingBag, Trash2 } from "lucide-react";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <section className="wishlist-page">

        <div className="empty-wishlist">

          <Heart size={70} strokeWidth={1.5} />

          <h2>Your Wishlist is Empty</h2>

          <p>
            Save your favorite lighting products here.
          </p>

          <Link
            to="/"
            className="continue-btn"
          >
            Continue Shopping
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className="wishlist-page">

      <div className="wishlist-container">

        <h1>
          My Wishlist ({wishlistItems.length})
        </h1>

        <div className="wishlist-grid">

          {wishlistItems.map((item) => (

            <div
              className="wishlist-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <span className="price">
                EGP {item.price}
              </span>

              <div className="wishlist-actions">

                <button
                  className="add-cart"
                  onClick={() => addToCart(item)}
                >
                  <ShoppingBag size={18} />
                  Add To Cart
                </button>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromWishlist(item.id)
                  }
                >
                  <Trash2 size={18} />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Wishlist;