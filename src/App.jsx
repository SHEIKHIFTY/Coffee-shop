// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SignInPage from "./pages/SignInPage";
import Register from "./pages/Register";

// import ProductCard from "./components/ProductCard";

import { useEffect } from "react";
import { CartProvider } from './contexts/CartContext'; // Import the CartProvider

// Scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scroll to top on every route change */}
      <CartProvider> {/* Wrap your entire app content that needs cart access */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<Register />} />
          
          {/* <Route path="/productcard" element={<ProductCard />} /> */}

          {/* This route acts as a catch-all for undefined routes */}
          <Route path="*" element={<SignInPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;