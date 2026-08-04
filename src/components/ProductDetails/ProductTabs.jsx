import "./ProductTabs.css";
import { useState } from "react";
import ReviewSection from "./ReviewSection";

function ProductTabs() {

  const [activeTab, setActiveTab] = useState("description");

  return (

    <div className="product-tabs">

      <div className="tab-buttons">

        <button
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={activeTab === "specifications" ? "active" : ""}
          onClick={() => setActiveTab("specifications")}
        >
          Specifications
        </button>

        <button
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>

      </div>

      <div className="tab-content">

        {activeTab === "description" && (

          <div>

            <p>

              Crafted from premium crystal and high-quality stainless steel,
              this chandelier combines elegance with durability.

            </p>

            <p>

              Perfect for living rooms, dining rooms, luxury villas,
              hotels and modern interiors.

            </p>

          </div>

        )}

        {activeTab === "specifications" && (

          <table>

            <tbody>

              <tr>
                <td>Material</td>
                <td>Crystal</td>
              </tr>

              <tr>
                <td>Height</td>
                <td>80 cm</td>
              </tr>

              <tr>
                <td>Width</td>
                <td>65 cm</td>
              </tr>

              <tr>
                <td>Voltage</td>
                <td>220V</td>
              </tr>

              <tr>
                <td>Warranty</td>
                <td>2 Years</td>
              </tr>

            </tbody>

          </table>

        )}

        {activeTab === "reviews" && (

          <ReviewSection />

        )}

      </div>

    </div>

  );
}

export default ProductTabs;