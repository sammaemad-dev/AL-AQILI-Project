import "./Products.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";

import { getAllProducts, deleteProduct } from "../../services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getAllProducts();

        if (isMounted) setProducts(data);
      } catch (err) {
        console.error("Get Products Error:", err);

        if (isMounted) {
          setError(
            err.response?.data?.message || "Failed to load products."
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      setDeletingId(id);
      await deleteProduct(id);

      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Delete Product Error:", err);

      alert(
        err.response?.data?.message || "Failed to delete product."
      );
    } finally {
      setDeletingId(null);
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">

      <div className="products-header">

        <div>
          <h1>Products</h1>
          <p>Manage all products</p>
        </div>

        <Link to="/dashboard/add-product" className="add-product-btn">
          <Plus size={18} />
          Add Product
        </Link>

      </div>

      <div className="products-toolbar">

        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      <div className="products-table">

        {loading ? (
          <p style={{ padding: "20px" }}>Loading products...</p>
        ) : error ? (
          <p style={{ padding: "20px", color: "#c0392b" }}>{error}</p>
        ) : filteredProducts.length === 0 ? (
          <p style={{ padding: "20px" }}>No products found.</p>
        ) : (
          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Image</th>

                <th>Name</th>

                <th>Category</th>

                <th>Price</th>

                <th>Rating</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredProducts.map((product) => (
                <tr key={product.id}>

                  <td>#{product.id}</td>

                  <td>
                    <img src={product.image} alt={product.name} />
                  </td>

                  <td>{product.name}</td>

                  <td>{product.category || "-"}</td>

                  <td>{product.price} EGP</td>

                  <td>{product.averageRating || 0}</td>

                  <td>

                    <Link
                      to={`/dashboard/edit-product/${product.id}`}
                      className="edit-btn"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(product.id)}
                      disabled={deletingId === product.id}
                    >
                      <Trash2 size={18} />
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>
        )}

      </div>

    </div>
  );
}

export default Products;
