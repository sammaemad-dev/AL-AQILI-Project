import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import OurCafe from "./pages/OurCafe/OurCafe";

import Reviews from "./pages/Reviews/Reviews";

import Chandeliers from "./pages/Chandeliers/Chandeliers";
import WallLights from "./pages/WallLights/WallLights";
import LightPanels from "./pages/LightPanels/LightPanels";
import Decor from "./pages/Decor/Decor";
import Plants from "./pages/Plants/Plants";
import Accessories from "./pages/Accessories/Accessories";
import Profile from "./pages/Profile/Profile";

function AppContent() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register";

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

      

        <Route path="/reviews" element={<Reviews />} />

        <Route path="/profile" element={<Profile />} />

        

      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;