import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CoffeeQuote from "./components/CoffeeQuote/CoffeeQuote";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import OurCafe from "./pages/OurCafe/OurCafe";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Reviews from "./pages/Reviews/Reviews";
import Tracking from "./pages/Tracking/Tracking";

function AppContent() {
  const [cart, setCart] = useState({});
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/menu"||
    location.pathname === "/cart";


  function handleClearCart() {
    setCart({});
  }

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/menu"
          element={
            <Menu
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onUpdateCart={setCart}
              onClearCart={handleClearCart}
            />
          }
        />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/our-cafe" element={<OurCafe />} />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route path="/reviews" element={<Reviews />} />

        <Route path="/tracking" element={<Tracking />} />
      </Routes>

      {!hideLayout && <CoffeeQuote />}

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;