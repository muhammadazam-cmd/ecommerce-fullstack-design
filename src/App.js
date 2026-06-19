import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Admin from "./pages/Admin"; // ⭐ ADMIN IMPORT ADDED

function App() {
  return (
    <Router>

      {/* Navbar always visible */}
      <Navbar />

      <Routes>

        {/* 🏠 MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* 🛒 CART & CHECKOUT */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />

        {/* 🛠 ADMIN PANEL */}
        <Route path="/admin" element={<Admin />} />

      </Routes>

    </Router>
  );
}

export default App;