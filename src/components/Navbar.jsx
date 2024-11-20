import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"; // Importing icons for hamburger
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import PizzaModal from "./PizzaModal";
import CartModal from "./CartModal";
import "../styles/Navbar.css";

function Navbar() {
  const { cartCount } = useCart(); // Get cart count from context
  const [isPizzaModalOpen, setIsPizzaModalOpen] = useState(false); // For PizzaModal
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // For CartModal
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the mobile menu

  // Toggle functions for modals
  const togglePizzaModal = () => setIsPizzaModalOpen(!isPizzaModalOpen);
  const toggleCartModal = () => setIsCartModalOpen(!isCartModalOpen);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navbar">
      {/* Left Side Navigation Links */}
      <div className={`leftSide ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
          Menu
        </Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </div>

      {/* Right Side with Cart Icon and Hamburger */}
      <div className="rightSide">
        {/* Hamburger Icon */}
        <button className="hamburgerIcon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Cart Icon */}
        <div className="cartContainer">
          <button onClick={toggleCartModal} className="cartIconContainer">
            <FaShoppingCart className="cartIcon" />
            {cartCount > 0 && (
              <span className="cartCount">{cartCount}</span>
            )}{" "}
            {/* Display the cart count */}
          </button>
        </div>
      </div>

      {/* Pizza Modal */}
      <PizzaModal isOpen={isPizzaModalOpen} closeModal={togglePizzaModal} />

      {/* Cart Modal */}
      <CartModal isOpen={isCartModalOpen} closeModal={toggleCartModal} />
    </div>
  );
}

export default Navbar;
