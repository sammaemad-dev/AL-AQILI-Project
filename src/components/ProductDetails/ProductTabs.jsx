import "./ProductTabs.css";
import { useState } from "react";
import ReviewSection from "./ReviewSection";

function ProductTabs({ product }) {

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
              {product?.description ||
                "No description available for this product yet."}
            </p>

          </div>

        )}

        {/* The products API doesn't return structured spec fields
            (material/dimensions/voltage/warranty), so this table stays
            as general placeholder info until the backend adds them. */}
        {activeTab === "specifications" && (

          <table>

            <tbody>

              <tr>
                <td>Category</td>
                <td>{product?.category || "-"}</td>
              </tr>

              <tr>
                <td>Warranty</td>
                <td>2 Years</td>
              </tr>

            </tbody>

          </table>

        )}

        {activeTab === "reviews" && (

          <ReviewSection productId={product?.id} />

        )}

      </div>

    </div>

  );
}

export default ProductTabs;
