import "./Dashboard.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import RecentOrders from "./components/RecentOrders";

import {
  Package,
  ShoppingBag,
  Users,
  DollarSign,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-main">

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

      </div>

    </div>
  );
}

export default Dashboard;