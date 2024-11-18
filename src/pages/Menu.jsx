/* eslint-disable react/prop-types */
import { MenuList } from "../components/MenuList";
import MenuItem from "../components/MenuItem";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu({ updateCart }) {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            id={menuItem.id}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            description={menuItem.description}
            updateCart={updateCart}
          />
        ))}
      </div>
      {/* Checkout Button */}
      <div className="cartActions">
        <Link to="/cart">
          <button className="proceedBtn">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
