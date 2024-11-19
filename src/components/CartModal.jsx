/* eslint-disable react/prop-types */
import { useCart } from "../contexts/CartContext";
import "../styles/CartModal.css";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartModal = ({ isOpen, closeModal }) => {
  const { updateCart } = useCart();
  const navigate = useNavigate();

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => {
        const pizzaTotal = item.price * item.quantity;

        // Calculate extras total price
        const extrasTotal = item.selectedExtras.reduce(
          (sum, extra) => sum + (extra.price ? extra.price * item.quantity : 0),
          0
        );

        return total + pizzaTotal + extrasTotal;
      },
      0
    ).toFixed(2); // Return total with two decimal places
  };

  const handleCheckout = () => {
    closeModal();
    navigate("/checkout");
  };

  return (
    <div className={`cartModalOverlay ${isOpen ? "open" : ""}`}>
      <div className="cartModalContent">
        <button className="closeButton" onClick={closeModal}>✖</button>
        <h2>Your Order</h2>

        {cartItems.length > 0 ? (
          <div className="cartItemsContainer">
            {cartItems.map((item, index) => (
              <div key={index} className="cartItem">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cartItemImage"
                />
                <div className="cartItemDetails">
                  <h4>{item.name}</h4>
                  <p className="cartItemPrice">
                    €{(item.price * item.quantity).toFixed(2)}
                  </p>

                  {item.selectedExtras && item.selectedExtras.length > 0 && (
                    <div className="cartItemExtras">
                      <h5>Extras:</h5>
                      <ul>
                        {item.selectedExtras.map((extra, idx) => (
                          <li key={idx}>
                            {extra.name} (+€{extra.price ? extra.price.toFixed(2) : 0})
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="quantityControls">
                  <button onClick={() => updateCart(item, "increment")} className="quantityButton">+</button>
                  <span className="quantityDisplay">{item.quantity}</span>
                  <button onClick={() => updateCart(item, "decrement")} className="quantityButton">-</button>
                  <button onClick={() => updateCart(item, "delete")} className="removeItemButton">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty!</p>
        )}

        <div className="cartSummary">
          <h3>Total: €{calculateTotal()}</h3>
          <button className="checkoutButton" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
