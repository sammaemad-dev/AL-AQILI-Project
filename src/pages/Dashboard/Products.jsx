import "./Products.css";

import { Plus, Search, Pencil, Trash2 } from "lucide-react";

function Products() {
  return (
    <div className="products-page">

      <div className="products-header">

        <div>
          <h1>Products</h1>
          <p>Manage all products</p>
        </div>

        <button className="add-product-btn">
          <Plus size={18} />
          Add Product
        </button>

      </div>

      <div className="products-toolbar">

        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search Product..."
          />

        </div>

      </div>

      <div className="products-table">

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Image</th>

              <th>Name</th>

              <th>Category</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>#1</td>

              <td>
                <img
                  src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300"
                  alt=""
                />
              </td>

              <td>Royal Chandelier</td>

              <td>Chandeliers</td>

              <td>5200 EGP</td>

              <td>12</td>

              <td>

                <button className="edit-btn">
                  <Pencil size={18} />
                </button>

                <button className="delete-btn">
                  <Trash2 size={18} />
                </button>

              </td>

            </tr>

            <tr>

              <td>#2</td>

              <td>
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300"
                  alt=""
                />
              </td>

              <td>Modern Light</td>

              <td>Wall Lights</td>

              <td>4300 EGP</td>

              <td>20</td>

              <td>

                <button className="edit-btn">
                  <Pencil size={18} />
                </button>

                <button className="delete-btn">
                  <Trash2 size={18} />
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Products;