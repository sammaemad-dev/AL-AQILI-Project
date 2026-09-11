import "./ProductDetails.css";
import ProductTabs from "../../components/ProductDetails/ProductTabs";

import {
  Heart,
  ShoppingCart,
  Star,
  Minus,
  Plus,
} from "lucide-react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { getProductById } from "../../services/productService";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=700";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  useEffect(() => {
    let isMounted = true;

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProductById(id);

        if (isMounted) setProduct(data);
      } catch (err) {
        console.error("Get Product Error:", err);

        if (isMounted) {
          setError(
            err.response?.data?.message || "Failed to load this product."
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="product-details">
        <p style={{ padding: "60px 0" }}>Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-details">
        <p style={{ padding: "60px 0", color: "#c0392b" }}>
          {error || "Product not found."}
        </p>
      </div>
    );
  }

  // The API only returns a single image per product, so the gallery
  // just repeats it (falls back to a placeholder if it's missing).
  const images = [product.image || FALLBACK_IMAGE];

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="product-details">
      {/* Left */}
      <div className="gallery">
        <div className="main-image">
          <img
            src={images[selectedImage]}
            alt={product.name}
          />
        </div>

        {images.length > 1 && (
          <div className="thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                onClick={() => setSelectedImage(index)}
                className={selectedImage === index ? "active" : ""}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right */}
      <div className="pr-info">
        <h1>{product.name}</h1>

        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              fill={product.rating >= star ? "#D4A42B" : "transparent"}
              color="#D4A42B"
            />
          ))}

          <span>({product.averageRating || 0})</span>
        </div>

        <ProductTabs product={product} />

        <h2>EGP {product.price}</h2>

        <p className="description">
          {product.description ||
            "No description available for this product yet."}
        </p>

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
          <button
            className="cart"
            onClick={handleCart}
          >
            <ShoppingCart size={20} />
            Add To Cart
          </button>

          <button
            className={`wish ${
              isInWishlist(product.id)
                ? "active"
                : ""
            }`}
            onClick={handleWishlist}
          >
            <Heart
              size={20}
              fill={
                isInWishlist(product.id)
                  ? "#e63946"
                  : "none"
              }
              color={
                isInWishlist(product.id)
                  ? "#e63946"
                  : "#222"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
