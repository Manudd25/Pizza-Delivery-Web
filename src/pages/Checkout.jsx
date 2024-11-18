import { useCart } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import delivery from "../assets/delivery.gif";
import "../styles/Checkout.css";

function Checkout() {
  const { cartItems, updateCart } = useCart();
  const navigate = useNavigate();
  const [orderSubmitted, setOrderSubmitted] = useState(false); // State to track form submission

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handlePlaceOrder = () => {
    setOrderSubmitted(true); // Set order as submitted
    updateCart({}, "clear"); // clear cart
  };

  if (orderSubmitted) {
    return (
      <div className="thankYouPage">
        <h1 className="thankYouTitle">Thank you for your order!</h1>
        <h2 className="thankYouSubtitle">
          Your delicious pizza is on the way!
        </h2>
        <img
          src={delivery}
          alt="Delivery in progress"
          className="thankYouImage"
        />
        <button className="bacHomeBtn" onClick={() => navigate("/")}>
          Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="checkoutPage">
      <h1 className="checkoutTitle">Checkout</h1>
      <div className="checkoutContent">
        {/* Order Summary */}
        <div className="orderSummary">
          <h2>Your Order</h2>
          {cartItems.length > 0 ? (
            <>
              <div className="orderItems">
                {cartItems.map((item, index) => (
                  <div key={index} className="orderItem">
                    <div className="orderItemDetails">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>
                        €{item.price.toFixed(2)} x {item.quantity}
                      </p>
                      {item.ingredients && item.ingredients.length > 0 && (
                        <p>
                          <strong>Ingredients:</strong>{" "}
                          {item.ingredients.join(", ")}
                          {item.customIngredient && (
                            <>
                              , <em>{item.customIngredient}</em>
                            </>
                          )}
                        </p>
                      )}
                    </div>
                    <p className="orderItemTotal">
                      €{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="orderTotal">
                <h3>Total: €{calculateTotal()}</h3>
              </div>
            </>
          ) : (
            <p className="checkoutEmptyMessage">Your cart is empty!</p>
          )}
        </div>

        {/* Delivery Details */}
        <div className="deliveryDetails">
          <h2>Delivery Details</h2>
          <form className="deliveryForm" onSubmit={handlePlaceOrder}>
            <div className="formGroup">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Insert your full name..."
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                placeholder="Your delivery address..."
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                placeholder="Your telephone number..."
                required
              />
            </div>
          </form>
        </div>
      </div>

      {/* Place Order and Go Back Buttons */}
      <div className="checkoutActions">
        <button className="goBackButton" onClick={() => navigate("/cart")}>
          Go Back
        </button>
        <button
          className="placeOrderButton"
          onClick={handlePlaceOrder}
          disabled={cartItems.length === 0}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;