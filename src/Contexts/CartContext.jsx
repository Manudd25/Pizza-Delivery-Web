/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to local storage whenever cartItems changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  const updateCart = (pizza, action) => {
    setCartItems((prevCartItems) => {
      const existingPizza = prevCartItems.find((item) => item.id === pizza.id);

      if (action === "update") {
        return existingPizza
          ? prevCartItems.map((item) =>
              item.id === pizza.id ? { ...existingPizza, ...pizza } : item
            )
          : [...prevCartItems, { ...pizza, quantity: 1, ingredients: [] }];
      }

      if (existingPizza) {
        const updatedQuantity =
          action === "increment"
            ? existingPizza.quantity + 1
            : existingPizza.quantity - 1;

        if (updatedQuantity <= 0) {
          return prevCartItems.filter((item) => item.id !== pizza.id);
        }

        return prevCartItems.map((item) =>
          item.id === pizza.id ? { ...existingPizza, quantity: updatedQuantity } : item
        );
      }

      if (action === "increment") {
        return [...prevCartItems, { ...pizza, quantity: 1 }];
      }

      if (action === "clear") {
        return [];
      }

      return prevCartItems;
    });
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, updateCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
