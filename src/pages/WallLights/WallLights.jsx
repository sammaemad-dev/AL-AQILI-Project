import "./WallLights.css";
import banner from "../../assets/categories/wall-lights.jpg";

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
      category: "Crystal",
    },
    {
      id: 2,
      name: "Golden Luxury Chandelier",
      price: 7100,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700",
      rating: 5,
      category: "Modern",
    },
    {
      id: 3,
      name: "Classic Crystal",
      price: 4600,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=700",
      rating: 4,
      category: "Crystal",
    },
    {
      id: 4,
      name: "Premium Ceiling Light",
      price: 6900,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700",
      rating: 5,
      category: "Classic",
    },
    {
      id: 5,
      name: "Luxury Gold",
      price: 8300,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=700",
      rating: 5,
      category: "Modern",
    },
    {
      id: 6,
      name: "Modern Crystal",
      price: 5900,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=700",
      rating: 4,
      category: "Modern",
    },
  ]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = products
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      category === "All" ? true : item.category === category
    )
    .filter((item) =>
      minPrice === "" ? true : item.price >= Number(minPrice)
    )
    .filter((item) =>
      maxPrice === "" ? true : item.price <= Number(maxPrice)
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

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

        <h1>Elegant Wall Lights</h1>

         <p>
Modern wall lighting crafted to elevate every corner of your home.
</p>

        </div>
      </div>

      <div className="products-container">
        <aside className="filters">

          {/* <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div> */}

          <div className="filter-box">
            <h4>Categories</h4>

            <label>
              <input
                type="radio"
                checked={category === "All"}
                onChange={() => setCategory("All")}
              />
              All
            </label>

            <label>
              <input
                type="radio"
                checked={category === "Crystal"}
                onChange={() => setCategory("Crystal")}
              />
              Crystal
            </label>

            <label>
              <input
                type="radio"
                checked={category === "Modern"}
                onChange={() => setCategory("Modern")}
              />
              Modern
            </label>

            <label>
              <input
                type="radio"
                checked={category === "Classic"}
                onChange={() => setCategory("Classic")}
              />
              Classic
            </label>
          </div>

          <div className="filter-box">
            <h4>Price Range</h4>

            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />

            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          <div className="filter-box">
            <h4>Sort By</h4>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="low">Price: Low To High</option>
              <option value="high">Price: High To Low</option>
            </select>
          </div>

          <button
            className="clear-btn"
            onClick={() => {
              setSearch("");
              setCategory("All");
              setSort("default");
              setMinPrice("");
              setMaxPrice("");
            }}
          >
            Clear All Filters
          </button>

        </aside>

       <div className="products-section">

  <div className="products-header">

    <div className="search-box">
      <input
        type="text"
        placeholder="Search luxury lighting..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
{/* 
    <span className="products-count">
      {filteredProducts.length} Products
    </span> */}

  </div>

  <div className="products-grid">
    {filteredProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}
  </div>

</div>
      </div>
    </section>
  );
}

export default Chandeliers;