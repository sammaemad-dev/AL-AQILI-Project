import "./LightPanels.css";
import banner from "../../assets/categories/light-panels.jpg";

import { useState } from "react";
import ProductCard from "../../sections/ProductCard/ProductCard";

function Chandeliers() {

  const [products] = useState([
    {
      id: 1,
      name: "Royal Crystal Chandelier",
      price: 5200,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=700",
      rating: 5,
    },
    {
      id: 2,
      name: "Golden Luxury Chandelier",
      price: 7100,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700",
      rating: 5,
    },
    {
      id: 3,
      name: "Classic Crystal",
      price: 4600,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=700",
      rating: 4,
    },
    {
      id: 4,
      name: "Premium Ceiling Light",
      price: 6900,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700",
      rating: 5,
    },
    {
      id: 5,
      name: "Luxury Gold",
      price: 8300,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=700",
      rating: 5,
    },
    {
      id: 6,
      name: "Modern Crystal",
      price: 5900,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=700",
      rating: 4,
    },
  ]);

  return (
    <section className="chandeliers">

      <div
        className="page-banner"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="overlay" />

        <div className="banner-content">
          <h1>Premium Light Panels</h1>

          <p>
            Creative illuminated panels that blend elegance with modern interior
            design.
          </p>
        </div>
      </div>

      <div className="products-container">

        {/* ================= Filters ================= */}

        <aside className="filters">

          <h3>Filters</h3>

          {/* Category */}

          <div className="filter-box">

            <h4>Category</h4>

            <label>
              <input type="checkbox" />
              Chandeliers
            </label>

            <label>
              <input type="checkbox" />
              Wall Lights
            </label>

            <label>
              <input type="checkbox" />
              Light Panels
            </label>

            <label>
              <input type="checkbox" />
              Decor
            </label>

            <label>
              <input type="checkbox" />
              Plants
            </label>

            <label>
              <input type="checkbox" />
              Accessories
            </label>

          </div>

          {/* Price */}

          <div className="filter-box">

            <h4>Price</h4>

            <input
              type="range"
              min="1000"
              max="10000"
            />

            <div className="price-values">

              <span>EGP 1,000</span>

              <span>EGP 10,000</span>

            </div>

          </div>

          {/* Rating */}

          <div className="filter-box">

            <h4>Rating</h4>

            <label>
              <input type="checkbox" />
              ⭐⭐⭐⭐⭐
            </label>

            <label>
              <input type="checkbox" />
              ⭐⭐⭐⭐ & Up
            </label>

            <label>
              <input type="checkbox" />
              ⭐⭐⭐ & Up
            </label>

          </div>

          {/* Availability */}

          <div className="filter-box">

            <h4>Availability</h4>

            <label>
              <input type="checkbox" />
              In Stock
            </label>

            <label>
              <input type="checkbox" />
              Out of Stock
            </label>

          </div>

        </aside>

        {/* ================= Products ================= */}

        <div className="products-grid">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Chandeliers;