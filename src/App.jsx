import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import "./index.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const updateCart = (updatedItem) => {
    setCartItems((prevCartItems) => {
      if (updatedItem.quantity === 0) {
        // Remove item if quantity is 0
        return prevCartItems.filter((item) => item.id !== updatedItem.id);
      }

      const existingItem = prevCartItems.find(
        (item) => item.id === updatedItem.id
      );

      if (existingItem) {
        // Update quantity for existing item
        return prevCartItems.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
      }

      // Add new item
      return [...prevCartItems, updatedItem];
    });
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu updateCart={updateCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
