import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";
import { useState } from "react";
import "../styles/Cart.css";

function Cart() {
  const { cartItems, updateCart } = useCart(); // Access cart state and functions from context
  const navigate = useNavigate();

  const [customIngredients, setCustomIngredients] = useState({}); // Track custom input for "Other"

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleIngredientChange = (item, ingredient) => {
    const updatedIngredients = item.ingredients?.includes(ingredient)
      ? item.ingredients.filter((ing) => ing !== ingredient) // Remove ingredient
      : [...(item.ingredients || []), ingredient]; // Add ingredient

    const updatedItem = { ...item, ingredients: updatedIngredients };
    updateCart(updatedItem, "update");
  };

  const handleCustomIngredientChange = (item, value) => {
    const updatedItem = {
      ...item,
      customIngredient: value, // Add or update custom ingredient
    };
    updateCart(updatedItem, "update");
  };

  return (
    <div className="cartPage">
      <h1 className="cartTitle">Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="cartList">
            {cartItems.map((item, index) => (
              <div key={index} className="cartItem">
                <div className="cartItemImage">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="ingredientOptions">
                  <h4>Extras:</h4>
                  {[
                    "Cheese",
                    "Pepperoni",
                    "Mushrooms",
                    "Olives",
                    "Ham",
                    "Mozzarella",
                    "Other",
                  ].map((ingredient, idx) => (
                    <label key={idx} className="ingredientLabel">
                      <input
                        type="checkbox"
                        value={ingredient}
                        checked={item.ingredients?.includes(ingredient)}
                        onChange={() =>
                          handleIngredientChange(item, ingredient)
                        }
                      />
                      {ingredient}
                    </label>
                  ))}
                  {item.ingredients?.includes("Other") && (
                    <input
                      type="text"
                      className="customIngredientInput"
                      placeholder="Specify your ingredient"
                      value={customIngredients[item.id] || ""}
                      onChange={(e) =>
                        setCustomIngredients((prev) => ({
                          ...prev,
                          [item.id]: e.target.value,
                        }))
                      }
                      onBlur={(e) =>
                        handleCustomIngredientChange(item, e.target.value)
                      }
                    />
                  )}
                </div>
                <div className="cartItemDetails">
                  <h2 className="cartItemName">{item.name}</h2>
                  <p className="cartItemDescription">{item.description}</p>
                  <p className="cartItemPrice">€{item.price.toFixed(2)}</p>
                </div>
                <div className="cartItemControls">
                  <button
                    className="quantityButton"
                    onClick={() => updateCart(item, "decrement")}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantityButton"
                    onClick={() => updateCart(item, "increment")}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cartSummary">
            <h3>Total: €{calculateTotal()}</h3>
          </div>
          <div className="cartActions">
            <Link to="/checkout">
              <button className="checkoutButton">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      ) : (
        <p className="cartEmptyMessage">Your cart is empty!</p>
      )}
      <button className="goBackButton" onClick={() => navigate("/menu")}>
        Go Back
      </button>
    </div>
  );
}

export default Cart;
