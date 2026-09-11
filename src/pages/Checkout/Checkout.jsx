// import "./Checkout.css";
// import { useCart } from "../../context/CartContext";

// function Checkout() {

//   const { cartItems } = useCart();

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const shipping = subtotal > 0 ? 250 : 0;

//   const total = subtotal + shipping;

//   return (

//     <section className="checkout-page">

//       <div className="checkout-container">

//         {/* Left */}

//         <div className="checkout-form">

//           <h2>Checkout</h2>

//           <div className="form-group">

//             <label>Full Name</label>

//             <input
//               type="text"
//               placeholder="Enter your full name"
//             />

//           </div>

//           <div className="form-group">

//             <label>Phone Number</label>

//             <input
//               type="text"
//               placeholder="01xxxxxxxxx"
//             />

//           </div>

//           <div className="form-group">

//             <label>City</label>

//             <input
//               type="text"
//               placeholder="Cairo"
//             />

//           </div>

//           <div className="form-group">

//             <label>Address</label>

//             <textarea
//               rows="4"
//               placeholder="Street, Building..."
//             />

//           </div>

//           <div className="form-group">

//             <label>Notes</label>

//             <textarea
//               rows="3"
//               placeholder="Optional..."
//             />

//           </div>

//           <div className="payment-box">

//             <h3>Payment Method</h3>

//             <div className="cash-box">

//               <input
//                 type="radio"
//                 checked
//                 readOnly
//               />

//               <span>Cash On Delivery</span>

//             </div>

//           </div>

//           <button className="place-order-btn">

//             Place Order

//           </button>

//         </div>

//         {/* Right */}

//         <div className="order-summary">

//           <h2>Order Summary</h2>

//           {cartItems.map(item => (

//             <div
//               key={item.id}
//               className="summary-item"
//             >

//               <img
//                 src={item.image}
//                 alt={item.name}
//               />

//               <div>

//                 <h4>{item.name}</h4>

//                 <p>
//                   Qty : {item.quantity}
//                 </p>

//               </div>

//               <span>

//                 EGP {(item.price * item.quantity).toLocaleString()}

//               </span>

//             </div>

//           ))}

//           <hr />

//           <div className="summary-row">

//             <span>Subtotal</span>

//             <span>

//               EGP {subtotal.toLocaleString()}

//             </span>

//           </div>

//           <div className="summary-row">

//             <span>Shipping</span>

//             <span>

//               EGP {shipping.toLocaleString()}

//             </span>

//           </div>

//           <div className="summary-row total">

//             <span>Total</span>

//             <span>

//               EGP {total.toLocaleString()}

//             </span>

//           </div>

//         </div>

//       </div>

//     </section>

//   );

// }

// export default Checkout;









/////////////////////////////////////////////////////////////////////






// import "./Checkout.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../context/CartContext";
// import { createOrder } from "../../services/orderService";

// function Checkout() {

//   const navigate = useNavigate();
//   const { cartItems, clearCart } = useCart();

//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [city, setCity] = useState("");
//   const [address, setAddress] = useState("");
//   const [notes, setNotes] = useState("");

//   const [placing, setPlacing] = useState(false);
//   const [error, setError] = useState("");

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const shipping = subtotal > 0 ? 250 : 0;

//   const total = subtotal + shipping;

//   const handlePlaceOrder = async () => {
//     if (cartItems.length === 0) {
//       setError("Your cart is empty.");
//       return;
//     }

//     if (!fullName.trim() || !phone.trim() || !city.trim() || !address.trim()) {
//       setError("Please fill in your name, phone, city and address.");
//       return;
//     }

//     const deliveryAddress = `${fullName.trim()} - ${phone.trim()} - ${city.trim()}, ${address.trim()}${
//       notes.trim() ? ` (Notes: ${notes.trim()})` : ""
//     }`;

//     try {
//       setPlacing(true);
//       setError("");

//       const order = await createOrder({
//         items: cartItems.map((item) => ({
//           productId: item.id,
//           quantity: item.quantity,
//         })),
//         deliveryAddress,
//       });

//       clearCart();

//       alert("Order placed successfully!");
//       navigate(order?.id ? `/tracking/${order.id}` : "/tracking");
//     } catch (err) {
//       console.error("Place Order Error:", err);

//       setError(
//         err.response?.data?.message || "Failed to place order. Please try again."
//       );
//     } finally {
//       setPlacing(false);
//     }
//   };

//   return (

//     <section className="checkout-page">

//       <div className="checkout-container">

//         {/* Left */}

//         <div className="checkout-form">

//           <h2>Checkout</h2>

//           {error && (
//             <p style={{ color: "#c0392b", marginBottom: "16px" }}>{error}</p>
//           )}

//           <div className="form-group">

//             <label>Full Name</label>

//             <input
//               type="text"
//               placeholder="Enter your full name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />

//           </div>

//           <div className="form-group">

//             <label>Phone Number</label>

//             <input
//               type="text"
//               placeholder="01xxxxxxxxx"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />

//           </div>

//           <div className="form-group">

//             <label>City</label>

//             <input
//               type="text"
//               placeholder="Cairo"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             />

//           </div>

//           <div className="form-group">

//             <label>Address</label>

//             <textarea
//               rows="4"
//               placeholder="Street, Building..."
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />

//           </div>

//           <div className="form-group">

//             <label>Notes</label>

//             <textarea
//               rows="3"
//               placeholder="Optional..."
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//             />

//           </div>

//           <div className="payment-box">

//             <h3>Payment Method</h3>

//             <div className="cash-box">

//               <input
//                 type="radio"
//                 checked
//                 readOnly
//               />

//               <span>Cash On Delivery</span>

//             </div>

//           </div>

//           <button
//             className="place-order-btn"
//             onClick={handlePlaceOrder}
//             disabled={placing}
//           >

//             {placing ? "Placing Order..." : "Place Order"}

//           </button>

//         </div>

//         {/* Right */}

//         <div className="order-summary">

//           <h2>Order Summary</h2>

//           {cartItems.map(item => (

//             <div
//               key={item.id}
//               className="summary-item"
//             >

//               <img
//                 src={item.image}
//                 alt={item.name}
//               />

//               <div>

//                 <h4>{item.name}</h4>

//                 <p>
//                   Qty : {item.quantity}
//                 </p>

//               </div>

//               <span>

//                 EGP {(item.price * item.quantity).toLocaleString()}

//               </span>

//             </div>

//           ))}

//           <hr />

//           <div className="summary-row">

//             <span>Subtotal</span>

//             <span>

//               EGP {subtotal.toLocaleString()}

//             </span>

//           </div>

//           <div className="summary-row">

//             <span>Shipping</span>

//             <span>

//               EGP {shipping.toLocaleString()}

//             </span>

//           </div>

//           <div className="summary-row total">

//             <span>Total</span>

//             <span>

//               EGP {total.toLocaleString()}

//             </span>

//           </div>

//         </div>

//       </div>

//     </section>

//   );

// }

// export default Checkout;



///////////////////////////////////////////////////////////////

import "./Checkout.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../services/orderService";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  const shipping = subtotal > 0 ? 250 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = async () => {
    if (placing) return;

    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    if (
      !fullName.trim() ||
      !phone.trim() ||
      !city.trim() ||
      !address.trim()
    ) {
      setError("Please fill in your name, phone, city and address.");
      return;
    }

    const deliveryAddress = `${fullName.trim()} - ${phone.trim()} - ${city.trim()}, ${address.trim()}${
      notes.trim() ? ` (Notes: ${notes.trim()})` : ""
    }`;

    const orderItems = cartItems.map((item) => ({
      productId: item.id,
      quantity: Number(item.quantity),
    }));

    const orderPayload = {
      items: orderItems,
      deliveryAddress,
    };

    try {
      setPlacing(true);
      setError("");

      // =========================
      // Debug: Request
      // =========================
      console.log("========== CREATE ORDER ==========");
      console.log("ORDER PAYLOAD:", orderPayload);
      console.log("ORDER ITEMS:", orderItems);
      console.log("DELIVERY ADDRESS:", deliveryAddress);

      const order = await createOrder(orderPayload);

      // =========================
      // Success
      // =========================
      console.log("ORDER CREATED SUCCESSFULLY:", order);

      clearCart();

      alert("Order placed successfully!");

      if (order?.id) {
        navigate(`/tracking/${order.id}`);
      } else {
        navigate("/tracking");
      }
    } catch (err) {
      // =========================
      // Debug: Error
      // =========================
      console.error("========== CREATE ORDER ERROR ==========");

      console.error("FULL ERROR:", err);

      console.error("STATUS:", err.response?.status);

      console.error(
        "BACKEND RESPONSE:",
        JSON.stringify(err.response?.data, null, 2)
      );

      console.error(
        "REQUEST URL:",
        err.config?.url
      );

      console.error(
        "REQUEST METHOD:",
        err.config?.method
      );

      console.error(
        "REQUEST DATA:",
        err.config?.data
      );

      console.error("========================================");

      const backendMessage =
        err.response?.data?.message ||
        err.response?.data?.title ||
        "Failed to place order. Please try again.";

      setError(backendMessage);
    } finally {
      setPlacing(false);
    }
  };

  return (
    <section className="checkout-page">
      <div className="checkout-container">

        {/* =========================
            Left - Checkout Form
        ========================= */}
        <div className="checkout-form">
          <h2>Checkout</h2>

          {error && (
            <p
              style={{
                color: "#c0392b",
                marginBottom: "16px",
              }}
            >
              {error}
            </p>
          )}

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="text"
              placeholder="01xxxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>City</label>

            <input
              type="text"
              placeholder="Cairo"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Address</label>

            <textarea
              rows="4"
              placeholder="Street, Building..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Notes</label>

            <textarea
              rows="3"
              placeholder="Optional..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* =========================
              Payment
          ========================= */}
          <div className="payment-box">
            <h3>Payment Method</h3>

            <div className="cash-box">
              <input
                type="radio"
                checked
                readOnly
              />

              <span>Cash On Delivery</span>
            </div>
          </div>

          {/* =========================
              Place Order
          ========================= */}
          <button
            className="place-order-btn"
            onClick={handlePlaceOrder}
            disabled={placing}
          >
            {placing ? "Placing Order..." : "Place Order"}
          </button>
        </div>

        {/* =========================
            Right - Order Summary
        ========================= */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="summary-item"
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h4>{item.name}</h4>

                <p>
                  Qty : {item.quantity}
                </p>
              </div>

              <span>
                EGP{" "}
                {(
                  Number(item.price || 0) *
                  Number(item.quantity || 0)
                ).toLocaleString()}
              </span>
            </div>
          ))}

          <hr />

          <div className="summary-row">
            <span>Subtotal</span>

            <span>
              EGP {subtotal.toLocaleString()}
            </span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>

            <span>
              EGP {shipping.toLocaleString()}
            </span>
          </div>

          <div className="summary-row total">
            <span>Total</span>

            <span>
              EGP {total.toLocaleString()}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Checkout;