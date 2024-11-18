import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
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
      </div>
    </div>
  );
}

export default Contact;
