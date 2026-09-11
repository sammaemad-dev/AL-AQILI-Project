import "./AddProduct.css";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getAllCategories } from "../../services/categoryService";
import {
  getProductById,
  addProduct,
  updateProduct,
} from "../../services/productService";

function AddProduct() {
  const navigate = useNavigate();
  const { id } = useParams(); // present only on the edit route
  const isEditMode = Boolean(id);

  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Load categories for the dropdown
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (err) {
        console.error("Get Categories Error:", err);
      }
    };

    loadCategories();
  }, []);

  // In edit mode, load the existing product to pre-fill the form
  useEffect(() => {
    if (!isEditMode) return;

    let isMounted = true;

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const product = await getProductById(id);

        if (!isMounted || !product) return;

        setName(product.name || "");
        setSubtitle(product.subtitle || "");
        setDescription(product.description || "");
        setPrice(product.price ?? "");
        setImageUrl(product.image || "");
        setCategoryId(product.categoryId ?? "");
      } catch (err) {
        console.error("Get Product Error:", err);

        if (isMounted) {
          setError(
            err.response?.data?.message || "Failed to load product."
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
  }, [id, isEditMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      if (isEditMode) {
        await updateProduct({
          id: Number(id),
          name: name.trim(),
          subtitle: subtitle.trim(),
          description: description.trim(),
          price: Number(price),
          imageUrl: imageUrl.trim(),
          categoryId: categoryId ? Number(categoryId) : null,
        });

        alert("Product updated successfully!");
      } else {
        await addProduct({
          name: name.trim(),
          subtitle: subtitle.trim(),
          description: description.trim(),
          price: Number(price),
          imageUrl: imageUrl.trim(),
          categoryId: categoryId ? Number(categoryId) : null,
        });

        alert("Product added successfully!");
      }

      navigate("/dashboard/products");
    } catch (err) {
      console.error("Save Product Error:", err);

      alert(
        err.response?.data?.message || "Failed to save product."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="add-product-page">

      <div className="page-header">
        <div>
          <h1>{isEditMode ? "Edit Product" : "Add Product"}</h1>
          <p>
            {isEditMode
              ? "Update this product's details"
              : "Add a new product to your lighting store"}
          </p>
        </div>

        <Link to="/dashboard/products" className="back-btn">
          <ArrowLeft size={18} />
          Back
        </Link>
      </div>

      <div className="add-product-card">

        {loading ? (
          <p>Loading product...</p>
        ) : error ? (
          <p style={{ color: "#c0392b" }}>{error}</p>
        ) : (
          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder="Royal Crystal Chandelier"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>

                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Price (EGP)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="5200"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Subtitle</label>
                <input
                  type="text"
                  placeholder="Short product tagline"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
              </div>

            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea
                rows="5"
                placeholder="Write product description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/*
              The Postman collection has no separate image-upload
              endpoint - Add/Update Product both take a plain
              "imageUrl" string. Until an upload endpoint exists,
              this collects that URL/path directly instead of a
              file picker.
            */}
            <div className="form-group">
              <label>Image URL</label>

              <input
                type="text"
                placeholder="/images/products/vanilla-latte.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>

            {imageUrl && (
              <div className="upload-box">
                <img
                  src={imageUrl}
                  alt="Preview"
                  style={{
                    maxWidth: "160px",
                    borderRadius: "12px",
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}

            <div className="buttons">

              <Link to="/dashboard/products" className="cancel-btn">
                Cancel
              </Link>

              <button type="submit" className="save-btn" disabled={saving}>
                {saving
                  ? "Saving..."
                  : isEditMode
                  ? "Save Changes"
                  : "Add Product"}
              </button>

            </div>

          </form>
        )}

      </div>

    </div>
  );
}

export default AddProduct;
