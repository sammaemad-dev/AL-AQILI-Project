import "./AddProduct.css";
import { Upload, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function AddProduct() {
  return (
    <div className="add-product-page">

      <div className="page-header">
        <div>
          <h1>Add Product</h1>
          <p>Add a new product to your lighting store</p>
        </div>

        <Link to="/admin/products" className="back-btn">
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      <div className="add-product-card">

        <div className="form-grid">

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Royal Crystal Chandelier"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select>
              <option>Chandeliers</option>
              <option>Wall Lights</option>
              <option>Decor</option>
              <option>Plants</option>
            </select>
          </div>

          <div className="form-group">
            <label>Price (EGP)</label>
            <input
              type="number"
              placeholder="5200"
            />
          </div>

          <div className="form-group">
            <label>Stock</label>
            <input
              type="number"
              placeholder="15"
            />
          </div>

        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            rows="5"
            placeholder="Write product description..."
          ></textarea>
        </div>

        <div className="upload-box">

          <Upload size={45} />

          <p>Upload Product Image</p>

          <span>PNG, JPG up to 5MB</span>

          <input type="file" />

        </div>

        <div className="buttons">

          <button className="cancel-btn">
            Cancel
          </button>

          <button className="save-btn">
            Add Product
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddProduct;