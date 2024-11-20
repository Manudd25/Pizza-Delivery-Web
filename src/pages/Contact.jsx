import { useState } from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitted(true); // Set the submitted state to true
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        {isSubmitted ? (
          <div className="thankYouContainer">
            <h2>
              Thank you for your message! <br />
              <span>We&apos;ll get back to you shortly!</span>
            </h2>
            <p>Meanwhile, why not enjoy a slice of pizza? 🍕</p>
          </div>
        ) : (
          <>
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST" onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="name">Full Name</label>
                <input
                  name="name"
                  placeholder="Enter full name..."
                  type="text"
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  placeholder="Enter email..."
                  type="email"
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="message">Message</label>
                <textarea
                  rows="6"
                  placeholder="Enter your message..."
                  name="message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submitButton">
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Contact;
