import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import OurCafe from "./pages/OurCafe/OurCafe";

import Reviews from "./pages/Reviews/Reviews";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Checkout from "./pages/Checkout/Checkout";

import Chandeliers from "./pages/Chandeliers/Chandeliers";
import WallLights from "./pages/WallLights/WallLights";
import LightPanels from "./pages/LightPanels/LightPanels";
import Decor from "./pages/Decor/Decor";
import Plants from "./pages/Plants/Plants";
import Accessories from "./pages/Accessories/Accessories";
import Categoriesname from "./pages/Categories name/Categories name";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
function AppContent() {
  const location = useLocation();

 
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-cafe" element={<OurCafe />} />

        <Route path="/chandeliers" element={<Chandeliers />} />
        <Route path="/wall-lights" element={<WallLights />} />
        <Route path="/light-panels" element={<LightPanels />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/accessories" element={<Accessories />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile />} />
        <Route
  path="/product/:id"
  element={<ProductDetails />}
/>
<Route
  path="/categories"
  element={<Categoriesname />}
/>
        {/* Dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>

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