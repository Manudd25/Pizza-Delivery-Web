import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="aboutPage">
      {/* Banner Section */}
      <div className="banner">
        <img
          src={MultiplePizzas}
          alt="Multiple Pizzas"
          className="bannerImage"
        />
      </div>

      {/* Text Content Section */}
      <div className="aboutContainer">
        <h1>Welcome to Slice & Dice</h1>
        <p>
          At <strong>Slice & Dice</strong>, we believe that every slice tells a
          story. What began as a small, family-run pizzeria has grown into a
          beloved pizza delivery service serving the heart and soul of our
          community. We are passionate about crafting the perfect pizza, one
          that’s fresh, flavorful, and filled with love.
        </p>

        <h2>Our Mission</h2>
        <p>
          To bring people together over a delicious pizza. Whether you are
          celebrating a milestone, enjoying a cozy night in, or just craving
          something cheesy, we are here to make your moments memorable. Our
          mission is to deliver happiness, one slice at a time.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Fresh Ingredients:</strong> We source the best local produce
            and the finest imported toppings to ensure every bite bursts with
            flavor.
          </li>
          <li>
            <strong>Craftsmanship:</strong> From our hand-stretched dough to our
            signature sauces, every pizza is a masterpiece.
          </li>
          <li>
            <strong>Fast Delivery:</strong> Your pizza will arrive hot and
            fresh, thanks to our lightning-fast delivery service.
          </li>
          <li>
            <strong>Customizable:</strong> With a variety of toppings and crust
            options, your pizza is made just the way you like it.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
