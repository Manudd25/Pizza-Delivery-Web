/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : []; 
    } catch {
      return [];
    }
  });

  // Update cartItems in localStorage
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  // Add an item to the cart
  const addToCart = (pizza) => {
    setCartItems((prevCartItems) => {
      // Check if the pizza with selected extras already exists in the cart
      const existingPizza = prevCartItems.find(
        (item) =>
          item.id === pizza.id &&
          JSON.stringify(item.selectedExtras) === JSON.stringify(pizza.selectedExtras)
      );

      if (existingPizza) {
        return prevCartItems.map((item) =>
          item.id === pizza.id && JSON.stringify(item.selectedExtras) === JSON.stringify(pizza.selectedExtras)
            ? { ...item, quantity: item.quantity + pizza.quantity }
            : item
        );
      }

      return [...prevCartItems, pizza];
    });
  };

  const updateCart = (pizza, action) => {
    setCartItems((prevCartItems) => {
      switch (action) {
        case "increment":
          return prevCartItems.map((item) =>
            item.id === pizza.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        case "decrement":
          return prevCartItems.map((item) =>
            item.id === pizza.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        case "delete":
          return prevCartItems.filter((item) => item.id !== pizza.id);
        default:
          return prevCartItems;
      }
    });
  };


  // Calculate the total number of items (cart count)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const clearCart = () => {
    setCartItems([]); // Clears cart items
    setCartCount(0);  // Reset cart count to 0
  };
  
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateCart, clearCart, cartCount }} // Include cartCount in the context value
    >
      {children}
    </CartContext.Provider>
  );
};
