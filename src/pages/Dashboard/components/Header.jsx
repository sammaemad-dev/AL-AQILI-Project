import "./Header.css";

function Header() {
  return (
    <div className="dashboard-header">

      <div>

        <h1>
          Welcome Back 👋
        </h1>

        <p>
          Manage your AL AQILI Lighting Store
        </p>

      </div>

      <button className="add-product-btn">
        + Add Product
      </button>

    </div>
  );
}

export default Header;