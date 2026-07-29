import "./ProductCard.css";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  const navigate = useNavigate();

  return (

    <div className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

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

          {[...Array(product.rating)].map((_, i) => (
            <FaStar key={i} />
          ))}

        </div>

        <div className="bottom-row">

          <span className="price">

            EGP {product.price}

          </span>

          <button className="cart-btn">

            <FiShoppingCart />

          </button>

        </div>

      </div>

    </div>

  );

}

export default ProductCard;