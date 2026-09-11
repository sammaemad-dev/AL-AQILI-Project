import "./Orders.css";
import { useEffect, useState } from "react";
import { Search, Eye } from "lucide-react";

import { getAdminOrders, updateOrderStatus } from "../../services/orderService";

const STATUS_OPTIONS = ["Pending", "Processing", "Delivered", "Cancelled"];

function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadOrders = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getAdminOrders({});

        if (isMounted) setOrders(data);
      } catch (err) {
        console.error("Get Admin Orders Error:", err);

        if (isMounted) {
          setError(
            err.response?.data?.message || "Failed to load orders."
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadOrders();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      setUpdatingId(id);

      await updateOrderStatus(id, newStatus);

      setOrders((prev) =>
        prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
      );
    } catch (err) {
      console.error("Update Order Status Error:", err);
      alert(
        err.response?.data?.message || "Failed to update order status."
      );
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredOrders = orders.filter(
    (o) =>
      String(o.id).includes(search.trim()) ||
      o.customerName?.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="orders-page">

      <div className="orders-header">
        <div>
          <h1>Orders</h1>
          <p>Manage customer orders</p>
        </div>
      </div>

      <div className="orders-search">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search Order..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="orders-card">

        {loading ? (
          <p style={{ padding: "20px" }}>Loading orders...</p>
        ) : error ? (
          <p style={{ padding: "20px", color: "#c0392b" }}>{error}</p>
        ) : filteredOrders.length === 0 ? (
          <p style={{ padding: "20px" }}>No orders found.</p>
        ) : (
          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.customerName || "-"}</td>
                  <td>
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString()
                      : "-"}
                  </td>
                  <td>EGP {Number(order.total || 0).toLocaleString()}</td>

                  <td>
                    <select
                      className={`status ${order.status?.toLowerCase()}`}
                      value={order.status}
                      disabled={updatingId === order.id}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td>
                    <button className="view-btn">
                      <Eye size={18} />
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

export default Orders;
