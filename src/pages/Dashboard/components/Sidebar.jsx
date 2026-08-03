import "./Sidebar.css";
import { NavLink } from "react-router-dom";

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

        <NavLink to="/dashboard">
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/products">
          <Package size={20} />
          Products
        </NavLink>

        <NavLink to="/dashboard/add-product">
          <PlusCircle size={20} />
          Add Product
        </NavLink>

        <NavLink to="/dashboard/orders">
          <ShoppingCart size={20} />
          Orders
        </NavLink>

        <NavLink to="/dashboard/customers">
          <Users size={20} />
          Customers
        </NavLink>

        <NavLink to="/dashboard/reviews">
          <Star size={20} />
          Reviews
        </NavLink>

        <NavLink to="/dashboard/settings">
          <Settings size={20} />
          Settings
        </NavLink>

      </nav>

      <button className="logout-btn">
        <LogOut size={18} />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;