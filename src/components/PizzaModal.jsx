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
  const currentPizza = MenuList.find((item) => item.id === pizza.id);
  const pizzaExtras = currentPizza ? currentPizza.extras : [];

  // Helper function to compare two arrays of extras
  const areExtrasEqual = (extras1, extras2) => {
    if (extras1.length !== extras2.length) return false;
    return extras1.every((extra, index) => {
      return extra.name === extras2[index].name && extra.price === extras2[index].price;
    });
  };

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
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : Math.max(prev - 1, 1)
    );
  };

  // Handle adding pizza to cart
  const handleAddToCart = () => {
    const extrasCost = extras.reduce((sum, extra) => {
      const extraItem = pizzaExtras.find((item) => item.name === extra);
      return extraItem ? sum + extraItem.price : sum;
    }, 0);

    // Create the pizza object with the correct price (per unit)
    const updatedPizza = {
      ...pizza,
      quantity,
      selectedExtras: extras.map((extra) => {
        const extraItem = pizzaExtras.find((item) => item.name === extra);
        return extraItem || { name: extra, price: 0 };
      }),
      price: pizza.price + extrasCost, // Single pizza price including extras
    };

    const currentCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the pizza with the same extras already exists in the cart
    const existingPizzaIndex = currentCart.findIndex(
      (item) =>
        item.id === updatedPizza.id && areExtrasEqual(item.selectedExtras, updatedPizza.selectedExtras)
    );

    if (existingPizzaIndex !== -1) {
      // If the pizza exists, update its quantity
      currentCart[existingPizzaIndex].quantity += quantity;
    } else {
      // If the pizza does not exist, add it as a new item
      currentCart.push(updatedPizza);
    }

    localStorage.setItem("cartItems", JSON.stringify(currentCart));

    addToCart(updatedPizza);
    closeModal();
  };

  // Calculate the total price (pizza price + extras) for display
  const calculateTotal = () => {
    const extrasCost = extras.reduce((sum, extra) => {
      const extraItem = pizzaExtras.find((item) => item.name === extra);
      return extraItem ? sum + extraItem.price : sum;
    }, 0);

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
