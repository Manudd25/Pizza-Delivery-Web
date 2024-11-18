import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { CartProvider } from "./Contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render( 
  <CartProvider>
      <App />
    </CartProvider> 
);