import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../Contexts/CartContext";
import "../styles/Navbar.css";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="rightSide">
        <div className="cartContainer">
          <Link to="/cart" className="cartIconContainer">
            <FaShoppingCart className="cartIcon" />
            {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
