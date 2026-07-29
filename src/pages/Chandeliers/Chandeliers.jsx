import "./Chandeliers.css";
import { useState } from "react";
import ProductCard from "../../sections/ProductCard/ProductCard";

// import banner from "./sections/images/chandeliers.jpg";
import banner from "../../assets/categories/ch2.jpg";

function Chandeliers() {

  const [products] = useState([
    {
      id:1,
      name:"Royal Crystal Chandelier",
      price:5200,
      image:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=700",
      rating:5
    },
    {
      id:2,
      name:"Golden Luxury Chandelier",
      price:7100,
      image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700",
      rating:5
    },
    {
      id:3,
      name:"Classic Crystal",
      price:4600,
      image:"https://images.unsplash.com/photo-1494526585095-c41746248156?w=700",
      rating:4
    },
    {
      id:4,
      name:"Premium Ceiling Light",
      price:6900,
      image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700",
      rating:5
    },
    {
      id:5,
      name:"Luxury Gold",
      price:8300,
      image:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=700",
      rating:5
    },
    {
      id:6,
      name:"Modern Crystal",
      price:5900,
      image:"https://images.unsplash.com/photo-1494526585095-c41746248156?w=700",
      rating:4
    }
  ]);

  return (

    <section className="chandeliers">

      <div
        className="page-banner"
        style={{
          backgroundImage:`url(${banner})`
        }}
      >
        <div className="overlay"/>

        <div className="banner-content">

          <h1>Luxury Chandeliers</h1>

          <p>
            Illuminate your home with timeless elegance and premium
            handcrafted chandeliers.
          </p>

        </div>

      </div>

      <div className="products-container">

        <aside className="filters">

          <h3>Filters</h3>

          <div className="filter-box">

            <h4>Category</h4>

            <label>
              <input type="checkbox"/>
              Crystal
            </label>

            <label>
              <input type="checkbox"/>
              Modern
            </label>

            <label>
              <input type="checkbox"/>
              Classic
            </label>

          </div>

          <div className="filter-box">

            <h4>Price</h4>

            <input
              type="range"
              min="1000"
              max="10000"
            />

          </div>

        </aside>

        <div className="products-grid">

          {products.map(product=>(
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