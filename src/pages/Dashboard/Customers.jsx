import "./Customers.css";
import { Search, Eye, Mail, Phone } from "lucide-react";

function Customers() {
  return (
    <div className="customers-page">

      <div className="customers-header">
        <div>
          <h1>Customers</h1>
          <p>Manage your customers</p>
        </div>
      </div>

      <div className="customers-search">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search Customer..."
        />
      </div>

      <div className="customers-card">

        <table>

          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Orders</th>
              <th>Total Spent</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                <div className="customer-info">
                  <img
                    src="https://i.pravatar.cc/60?img=1"
                    alt=""
                  />
                  <span>Ahmed Ali</span>
                </div>
              </td>

              <td>
                <Mail size={16}/>
                ahmed@gmail.com
              </td>

              <td>
                <Phone size={16}/>
                +20 101 234 5678
              </td>

              <td>12</td>

              <td>EGP 18,500</td>

              <td>
                <button className="view-btn">
                  <Eye size={18}/>
                </button>
              </td>

            </tr>

            <tr>

              <td>
                <div className="customer-info">
                  <img
                    src="https://i.pravatar.cc/60?img=5"
                    alt=""
                  />
                  <span>Sara Mohamed</span>
                </div>
              </td>

              <td>
                <Mail size={16}/>
                sara@gmail.com
              </td>

              <td>
                <Phone size={16}/>
                +20 100 456 7890
              </td>

              <td>7</td>

              <td>EGP 9,750</td>

              <td>
                <button className="view-btn">
                  <Eye size={18}/>
                </button>
              </td>

            </tr>

            <tr>

              <td>
                <div className="customer-info">
                  <img
                    src="https://i.pravatar.cc/60?img=8"
                    alt=""
                  />
                  <span>Omar Hassan</span>
                </div>
              </td>

              <td>
                <Mail size={16}/>
                omar@gmail.com
              </td>

              <td>
                <Phone size={16}/>
                +20 102 777 1122
              </td>

              <td>5</td>

              <td>EGP 6,900</td>

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

export default Customers;