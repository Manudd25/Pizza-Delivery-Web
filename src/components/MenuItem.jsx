/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/MenuItem.css";

function MenuItem({ menuItem, openModal }) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
      openModal(menuItem); // Open modal every time the quantity is incremented
    } else {
      setQuantity((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="menuItem">
      <div
        className="menuImage"
        style={{ backgroundImage: `url(${menuItem.image})` }}
      ></div>
      <div className="menuItemContent">
        <h2 className="menuItemTitle">{menuItem.name}</h2>
        <p className="menuItemDescription">{menuItem.description}</p>
        <p className="menuItemPrice">€{menuItem.price.toFixed(2)}</p>
        <div className="quantityControls">
          <button onClick={() => handleQuantityChange("decrement")}>-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={() => handleQuantityChange("increment")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
