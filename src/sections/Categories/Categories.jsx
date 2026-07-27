import "./Categories.css";
import { useNavigate } from "react-router-dom";

import chandeliers from "../../assets/categories/chandeliers.jpg";
import wallLights from "../../assets/categories/wall-lights.jpg";
import lightPanels from "../../assets/categories/light-panels.jpg";
import decor from "../../assets/categories/decor.jpg";
import plants from "../../assets/categories/plants.jpg";
import accessories from "../../assets/categories/accessories.jpg";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Chandeliers",
      image: chandeliers,
      path: "/chandeliers",
    },
    {
      title: "Wall Lights",
      image: wallLights,
      path: "/wall-lights",
    },
    {
      title: "Light Panels",
      image: lightPanels,
      path: "/light-panels",
    },
    {
      title: "Decor",
      image: decor,
      path: "/decor",
    },
    {
      title: "Artificial Plants",
      image: plants,
      path: "/plants",
    },
    {
      title: "Accessories",
      image: accessories,
      path: "/accessories",
    },
  ];

  return (
    <section className="categories">

      <div className="section-title">

        <span>SHOP BY CATEGORY</span>

        <h2>Illuminate Every Corner</h2>

        <p>
          Discover our premium lighting collections
          designed to transform every space into
          a luxurious masterpiece.
        </p>

      </div>

      <div className="categories-grid">

        {categories.map((item, index) => (

          <div
            key={index}
            className="category-card"
            onClick={() => navigate(item.path)}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="category-overlay">

              <h3>{item.title}</h3>

              <button>
                Explore Collection →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;