import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import delivery from "../assets/delivery.gif";
import "../styles/Checkout.css";

function Checkout() {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const [orderSubmitted, setOrderSubmitted] = useState(false); // State to track form submission

  // Retrieve cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const deliveryFee = 4.99; // Fixed delivery fee

  // State to track delivery schedule and payment method
  const [deliverySchedule, setDeliverySchedule] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // State to track delivery time and payment details
  const [deliveryTime, setDeliveryTime] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  // Calculate the total price including the delivery fee
  const calculateTotal = () => {
    const cartTotal = cartItems.reduce((total, item) => {
      const pizzaTotal = item.price * item.quantity;
      return total + pizzaTotal;
    }, 0);

    return (cartTotal + deliveryFee).toFixed(2); // Return the final total with two decimal places
  };

  const handlePlaceOrder = () => {
    setOrderSubmitted(true); // Set order as submitted
    clearCart(); // Clear cart and reset count
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
                      {item.selectedExtras && item.selectedExtras.length > 0 && (
                        <p>
                          <strong>Extras:</strong>{" "}
                          {item.selectedExtras.map((extra, idx) => (
                            <span key={idx}>
                              {typeof extra === "string"
                                ? extra
                                : extra.name}{" "}
                              
                            </span>
                          ))}
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
                <div className="orderTotalRow">
                  <h3 className="totalLabel">Subtotal:</h3>
                  <p className="totalPrice">
                    €{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                  </p>
                </div>
                <div className="orderTotalRow">
                  <h3 className="totalLabel">Delivery Fee:</h3>
                  <p className="totalPrice">€{deliveryFee.toFixed(2)}</p>
                </div>
                <div className="orderTotalRow">
                  <h3 className="totalLabel">Total:</h3>
                  <p className="totalPrice">€{calculateTotal()}</p>
                </div>
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

            {/* Delivery Schedule */}
            <div className="formGroup">
              <label htmlFor="schedule">Delivery Schedule:</label>
              <select
                id="schedule"
                value={deliverySchedule}
                onChange={(e) => {
                  setDeliverySchedule(e.target.value);
                  if (e.target.value !== "Later") {
                    setDeliveryTime(""); // Reset delivery time if not "Later"
                  }
                }}
                required
              >
                <option value="">Select a delivery time</option>
                <option value="ASAP">ASAP</option>
                <option value="Later">Later</option>
              </select>
            </div>

            {/* Delivery Time Field */}
            {deliverySchedule === "Later" && (
              <div className="formGroup">
                <label htmlFor="deliveryTime">Select Delivery Time:</label>
                <input
                  type="time"
                  id="deliveryTime"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  required
                />
              </div>
            )}

            {/* Payment Method */}
            <div className="formGroup">
              <label htmlFor="payment">Payment Method:</label>
              <select
                id="payment"
                value={paymentMethod}
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                  // Reset card details if payment method changes
                  if (e.target.value !== "Credit Card") {
                    setCardNumber("");
                    setCardExpiry("");
                    setCardCVC("");
                  }
                }}
                required
              >
                <option value="">Select a payment method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>

            {/* PayPal Redirect Message */}
            {paymentMethod === "PayPal" && (
              <p className="paypalRedirectMessage">
                You will be redirected to the PayPal website to complete your payment.
              </p>
            )}

            {/* Credit Card Details */}
            {paymentMethod === "Credit Card" && (
              <>
                <div className="formGroup">
                  <label htmlFor="cardNumber">Card Number:</label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="cardExpiry">Expiry Date:</label>
                  <input
                    type="text"
                    id="cardExpiry"
                    placeholder="MM/YY"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="cardCVC">CVC:</label>
                  <input
                    type="text"
                    id="cardCVC"
                    value={cardCVC}
                    onChange={(e) => setCardCVC(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Place Order and Go Back Buttons */}
      <div className="checkoutActions">
        <button className="goBackButton" onClick={() => navigate("/menu")}>
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
