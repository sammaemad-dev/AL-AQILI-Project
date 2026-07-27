import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { menuItems } from "../Menu/MenuData";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = menuItems.find(
    (item) => item.id === Number(id)
  );

  const [size, setSize] = useState("M");

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="details-page">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="details-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="details-card">

        <span className="rating">
          ⭐ {product.rating}
        </span>

        <h1>{product.name}</h1>

        <p className="subtitle">
          {product.subtitle}
        </p>

        <hr />

        <h3>Description</h3>

        <p className="description">
          Crafted from carefully selected premium coffee beans,
          blended with fresh milk to deliver a rich and smooth
          flavor in every sip. Every cup is prepared with passion
          by our expert baristas to give you an unforgettable
          coffee experience.
        </p>

        <hr />

        <h3>Choose Size</h3>

        <div className="sizes">

          <button
            className={size === "S" ? "active" : ""}
            onClick={() => setSize("S")}
          >
            Small
          </button>

          <button
            className={size === "M" ? "active" : ""}
            onClick={() => setSize("M")}
          >
            Medium
          </button>

          <button
            className={size === "L" ? "active" : ""}
            onClick={() => setSize("L")}
          >
            Large
          </button>

        </div>

        <div className="price-box">

          <div>

            <span className="price-title">
              Price
            </span>

            <h2 className="price">
              {product.price} Rs
            </h2>

          </div>

          <button
            className="buy-btn"
            onClick={() => navigate("/tracking")}
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;