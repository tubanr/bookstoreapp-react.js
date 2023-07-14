import React, { createContext, useState } from "react";

//create the cart context
export const CartContext = createContext();

//create a provider component to wrap app and provide the cart state and functions
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //add item to the cart
  const addItemToCart = (book) => {
    setCartItems((prevCartItems) => [...prevCartItems, book]);
  };

  //remove item from the cart
  const removeItemFromCart = (book_id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item, index) => index !== prevCartItems.findIndex((item2) => item2.id === book_id))
    );
  };

  //clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  //provide the cart state and functions to the components
  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
