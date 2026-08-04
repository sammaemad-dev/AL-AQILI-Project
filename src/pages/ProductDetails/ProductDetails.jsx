import "./ProductDetails.css";
import ProductTabs from "../../components/ProductDetails/ProductTabs";


import p1 from "../../assets/products/p1.jpg";
import p2 from "../../assets/products/p2.jpg";
import p3 from "../../assets/products/p3.jpg";
import p4 from "../../assets/products/p4.jpg";

import {
  Heart,
  ShoppingCart,
  Star,
  Minus,
  Plus,
} from "lucide-react";

import { useState } from "react";

function ProductDetails() {

  const [selectedImage, setSelectedImage] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const images = [
    p1,
    p2,
    p3,
    p4,
  ];

  return (

    <div className="product-details">

      {/* Left */}

      <div className="gallery">

        <div className="main-image">

          <img
            src={images[selectedImage]}
            alt="Royal Crystal Chandelier"
          />

        </div>

        <div className="thumbnails">

          {images.map((img, index) => (

            <img

              key={index}

              src={img}

              alt={`Product ${index + 1}`}

              onClick={() => setSelectedImage(index)}

              className={
                selectedImage === index
                  ? "active"
                  : ""
              }

            />

          ))}

        </div>

      </div>

      {/* Right */}

      <div className="pr-info">

        <h1>Royal Crystal Chandelier</h1>

        <div className="rating">

          <Star fill="#D4A42B" />
          <Star fill="#D4A42B" />
          <Star fill="#D4A42B" />
          <Star fill="#D4A42B" />
          <Star fill="#D4A42B" />

          <span>(4.8)</span>

        </div>

        <ProductTabs />

        <h2>EGP 5,200</h2>

        <p className="description">

          Luxury crystal chandelier crafted with
          premium materials to add elegance and
          warmth to your home.

        </p>

        {/* Colors */}

        <div className="section">

          <h4>Color</h4>

          <div className="colors">

            <span className="gold"></span>

            <span className="black"></span>

            <span className="white"></span>

          </div>

        </div>

        {/* Sizes */}

        <div className="section">

          <h4>Size</h4>

          <div className="sizes">

            <button>Small</button>

            <button className="active">
              Medium
            </button>

            <button>Large</button>

          </div>

        </div>

        {/* Quantity */}

        <div className="quantity">

          <button
            onClick={() =>
              quantity > 1 &&
              setQuantity(quantity - 1)
            }
          >

            <Minus size={18} />

          </button>

          <span>{quantity}</span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
          >

            <Plus size={18} />

          </button>

        </div>

        {/* Buttons */}

        <div className="buttons">

          <button className="cart">

            <ShoppingCart size={20} />

            Add To Cart

          </button>

          <button className="wish">

            <Heart size={20} />

          </button>

        </div>


      </div>

    </div>

  );
}

export default ProductDetails;