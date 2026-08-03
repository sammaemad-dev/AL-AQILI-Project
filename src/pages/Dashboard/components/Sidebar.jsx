import "./Sidebar.css";

import {
  LayoutDashboard,
  Package,
  PlusCircle,
  ShoppingCart,
  Users,
  Star,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <h2>AL AQILI</h2>

        <span>Lighting Collection</span>

      </div>

      <nav>

        <a href="#">
          <LayoutDashboard size={20} />
          Dashboard
        </a>

        <a href="#">
          <Package size={20} />
          Products
        </a>

        <a href="#">
          <PlusCircle size={20} />
          Add Product
        </a>

        <a href="#">
          <ShoppingCart size={20} />
          Orders
        </a>

        <a href="#">
          <Users size={20} />
          Customers
        </a>

        <a href="#">
          <Star size={20} />
          Reviews
        </a>

        <a href="#">
          <Settings size={20} />
          Settings
        </a>

      </nav>

      <button className="logout-btn">

        <LogOut size={18} />

        Logout

      </button>

    </aside>
  );
}

export default Sidebar;