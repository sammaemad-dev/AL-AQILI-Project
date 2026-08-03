import "./RecentOrders.css";

const orders = [
  {
    id: "#1001",
    customer: "Ahmed Ali",
    total: "EGP 2,450",
    status: "Delivered",
  },
  {
    id: "#1002",
    customer: "Sara Mohamed",
    total: "EGP 1,900",
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Omar Hassan",
    total: "EGP 4,300",
    status: "Processing",
  },
  {
    id: "#1004",
    customer: "Mona Adel",
    total: "EGP 980",
    status: "Delivered",
  },
];

function RecentOrders() {
  return (
    <div className="recent-orders">

      <div className="orders-header">

        <h2>Recent Orders</h2>

        <button>View All</button>

      </div>

      <table>

        <thead>

          <tr>

            <th>Order</th>

            <th>Customer</th>

            <th>Total</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr key={order.id}>

              <td>{order.id}</td>

              <td>{order.customer}</td>

              <td>{order.total}</td>

              <td>

                <span
                  className={`status ${order.status.toLowerCase()}`}
                >
                  {order.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentOrders;