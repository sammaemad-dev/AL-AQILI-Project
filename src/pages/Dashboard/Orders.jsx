import "./Orders.css";
import { Search, Eye } from "lucide-react";

function Orders() {
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
        />
      </div>

      <div className="orders-card">

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

            <tr>
              <td>#1001</td>
              <td>Ahmed Ali</td>
              <td>05 Aug 2026</td>
              <td>EGP 2,450</td>

              <td>
                <span className="status delivered">
                  Delivered
                </span>
              </td>

              <td>
                <button className="view-btn">
                  <Eye size={18}/>
                </button>
              </td>
            </tr>

            <tr>
              <td>#1002</td>
              <td>Sara Mohamed</td>
              <td>05 Aug 2026</td>
              <td>EGP 1,900</td>

              <td>
                <span className="status pending">
                  Pending
                </span>
              </td>

              <td>
                <button className="view-btn">
                  <Eye size={18}/>
                </button>
              </td>
            </tr>

            <tr>
              <td>#1003</td>
              <td>Omar Hassan</td>
              <td>04 Aug 2026</td>
              <td>EGP 5,200</td>

              <td>
                <span className="status processing">
                  Processing
                </span>
              </td>

              <td>
                <button className="view-btn">
                  <Eye size={18}/>
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Orders;