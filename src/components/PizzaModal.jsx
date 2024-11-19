/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { MenuList } from "../components/MenuList"; // Import MenuList to access pizza extras
import { useCart } from "../contexts/CartContext";
import "../styles/PizzaModal.css";

function PizzaModal({ pizza, isOpen, closeModal }) {
  const { addToCart } = useCart();

  if (!pizza) return null;

  const [extras, setExtras] = useState([]); // Track selected extras
  const [quantity, setQuantity] = useState(1); // Track quantity of pizzas

  // Get the extras for the current pizza from MenuList
  const currentPizza = MenuList.find(item => item.id === pizza.id);
  const pizzaExtras = currentPizza ? currentPizza.extras : [];

  // Handle extra ingredient selection
  const handleExtraToggle = (extra) => {
    setExtras((prev) =>
      prev.includes(extra)
        ? prev.filter((e) => e !== extra) // Remove ingredient if already selected
        : [...prev, extra] // Add ingredient if not already selected
    );
  };

  // Handle quantity change (increment or decrement)
  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  // Handle adding pizza to cart
  const handleAddToCart = () => {
    // Map selected extras to the correct structure (objects)
    const updatedExtras = extras.map((extra) => {
      const extraItem = pizzaExtras.find((item) => item.name === extra);
      return extraItem || { name: extra, price: 0 }; // Ensure the extra has a price
    });

    // Create the pizza object with the selected extras
    const updatedPizza = {
      ...pizza,
      quantity,
      selectedExtras: updatedExtras, // Include selected extras
      price: calculateTotal() // Recalculate price based on extras
    };

    // Retrieve the current cart from localStorage
    const currentCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    currentCart.push(updatedPizza);
    localStorage.setItem("cartItems", JSON.stringify(currentCart));

    addToCart(updatedPizza);
    closeModal();
  };

  // Calculate the total price (pizza price + extras)
  const calculateTotal = () => {
    const extrasCost = extras.reduce((sum, extra) => {
      const extraItem = pizzaExtras.find((item) => item.name === extra);
      return extraItem ? sum + extraItem.price : sum; // Sum price of extras
    }, 0);

    // Total price of pizza (base price) + extras price * quantity
    return (pizza.price + extrasCost) * quantity;
  };

  return (
    <div className={`modalOverlay ${isOpen ? "open" : ""}`}>
      <div className="modalContent">
        <button className="closeButton" onClick={closeModal}>
          ✖
        </button>
        <div className="pizzaImageContainer">
          <img src={pizza.image} alt={pizza.name} className="pizzaImage" />
        </div>
        <h2 className="modalTitle">{pizza.name}</h2>
        <p className="modalDescription">{pizza.description}</p>
        <p className="modalPrice">Base Price: €{pizza.price.toFixed(2)}</p>
        <h3 className="extrasTitle">Select Extras</h3>
        <ul className="extrasList">
          {pizzaExtras.map((extra) => (
            <li key={extra.name} className="extraItem">
              <label>
                <input
                  type="checkbox"
                  value={extra.name}
                  checked={extras.includes(extra.name)}
                  onChange={() => handleExtraToggle(extra.name)} // Toggle extras
                />
                {extra.name} (+€{extra.price.toFixed(2)})
              </label>
            </li>
          ))}
        </ul>

        <div className="quantityControls">
          <button onClick={() => handleQuantityChange("decrement")}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange("increment")}>+</button>
        </div>

        <div className="modalFooter">
          <button className="addToCartButton" onClick={handleAddToCart}>
            Add to Cart (€{calculateTotal().toFixed(2)})
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaModal;
