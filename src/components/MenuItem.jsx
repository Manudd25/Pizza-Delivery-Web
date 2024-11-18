/* eslint-disable react/prop-types */
import "../styles/MenuItem.css";
import { useCart } from "../Contexts/CartContext";

function MenuItem({ id, image, name, description, price }) {
  const { updateCart, cartItems } = useCart(); // Get cartItems from the context

  // Find the current item's quantity in the cart
  const currentItem = cartItems.find((item) => item.id === id);
  const quantity = currentItem ? currentItem.quantity : 0;

  return (
    <div className="menuItem">
      <div
        className="menuImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="menuItemContent">
        <h1 className="menuItemTitle">{name}</h1>
        <p className="menuItemDescription">{description}</p>
        <p className="menuItemPrice">€{price.toFixed(2)}</p>
        <div className="quantityControls">
          <button onClick={() => updateCart({ id, name, description, price, image }, "decrement")}>
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={() => updateCart({ id, name, description, price, image }, "increment")}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
