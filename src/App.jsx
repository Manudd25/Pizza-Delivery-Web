import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartModal from "./components/CartModal";
import Checkout from "./pages/Checkout";
import PizzaModal from "./components/PizzaModal";
import { useState } from "react";

function App() {
  const [selectedPizza, setSelectedPizza] = useState(null); // Track the selected pizza
  const [isModalOpen, setIsModalOpen] = useState(false); // Track whether the pizza modal is open or not
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // Track whether the cart modal is open or not

  const openModal = (pizza) => {
    setSelectedPizza(pizza); // Set the selected pizza
    setIsModalOpen(true); // Open the pizza modal
  };

  const closeModal = () => {
    setSelectedPizza(null); // Clear the selected pizza
    setIsModalOpen(false); // Close the pizza modal
  };

  const openCartModal = () => {
    setIsCartModalOpen(true); // Open the cart modal
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false); // Close the cart modal
  };

  return (
    <BrowserRouter>
      <Navbar openCartModal={openCartModal} />
      <Routes>
      <Route
          path="/"
          element={<Home />} />
        <Route
          path="/menu"
          element={<Menu openModal={openModal} />} // Pass openModal to Menu
        />
        <Route
          path="/cart"
          element={<CartModal isOpen={isCartModalOpen} closeModal={closeCartModal} />}
        />
        <Route
          path="/checkout"
          element={<Checkout closeCartModal={closeCartModal} />} // Pass closeCartModal to Checkout
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <PizzaModal pizza={selectedPizza} isOpen={isModalOpen} closeModal={closeModal} /> {/* Make sure to pass the correct state */}
    </BrowserRouter>
  );
}

export default App;
