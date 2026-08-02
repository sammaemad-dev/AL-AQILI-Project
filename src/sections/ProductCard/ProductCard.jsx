import "./ProductCard.css";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function ProductCard({ product }) {

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (

    <div className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

        <button
          className={`wishlist-btn ${
            isInWishlist(product.id) ? "active" : ""
          }`}
          onClick={handleWishlist}
        >
          <FaHeart />
        </button>

        <div className="product-overlay">

          <button
            className="details-btn"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View Details
          </button>

        </div>

      </div>

      <div className="product-info">

        <h3>{product.name}</h3>

        <div className="rating">

          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}

        </div>

        <div className="bottom-row">

          <span className="price">
            EGP {product.price}
          </span>

          <button
            className="cart-btn"
            onClick={handleAddToCart}
            title="Add To Cart"
          >
            <FiShoppingCart />
          </button>

        </div>

      </div>

    </div>

  );
}

export default ProductCard;