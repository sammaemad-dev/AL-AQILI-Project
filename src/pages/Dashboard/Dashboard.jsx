import "./Dashboard.css";

import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import RecentOrders from "./components/RecentOrders";

import Products from "./Products";
import AddProduct from "./AddProduct";
import Orders from "./Orders";
import Customers from "./Customers";
import Reviews from "./Reviews";
import Settings from "./Settings";

import {
  Package,
  ShoppingBag,
  Users,
  DollarSign,
} from "lucide-react";

function DashboardHome() {
  return (
    <>
      <Header />

      <div className="stats-grid">

        <StatsCard
          title="Products"
          value="128"
          icon={<Package size={30} />}
        />

        <StatsCard
          title="Orders"
          value="54"
          icon={<ShoppingBag size={30} />}
        />

        <StatsCard
          title="Customers"
          value="91"
          icon={<Users size={30} />}
        />

        <StatsCard
          title="Revenue"
          value="EGP 25K"
          icon={<DollarSign size={30} />}
        />

      </div>

      <RecentOrders />
    </>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-main">

        <Routes>

          <Route path="/" element={<DashboardHome />} />

          <Route path="/products" element={<Products />} />

          <Route path="/add-product" element={<AddProduct />} />

          <Route path="/edit-product/:id" element={<AddProduct />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/customers" element={<Customers />} />

          <Route path="/reviews" element={<Reviews />} />

          <Route path="/settings" element={<Settings />} />

        </Routes>

      </div>

    </div>
  );
}

export default Dashboard;