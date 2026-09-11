import "./Accessories.css";
import banner from "../../assets/categories/accessories.jpg";

import { useState } from "react";
import ProductCard from "../../sections/ProductCard/ProductCard";
import { useCategoryProducts } from "../../hooks/useCategoryProducts";


function Chandeliers() {
  const { products, loading, error } = useCategoryProducts("Accessories");

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = products
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
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

  <h1>Lighting Accessories</h1>

<p>
Premium accessories that perfectly complement every lighting collection.
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

  {loading ? (
    <p style={{ padding: "20px" }}>Loading products...</p>
  ) : error ? (
    <p style={{ padding: "20px", color: "#c0392b" }}>{error}</p>
  ) : filteredProducts.length === 0 ? (
    <p style={{ padding: "20px" }}>No products found.</p>
  ) : (
    <div className="products-grid">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )}

</div>
      </div>
    </section>
  );
}

export default Chandeliers;