// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the Context
const CartContext = createContext();

// Create a custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Create the Provider component
export const CartProvider = ({ children }) => {
  // Initialize cart items from localStorage or an empty array
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage", error);
      return [];
    }
  });

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addItemToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);

      if (existingItem) {
        // If item exists, increase its quantity
        return prevItems.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (productName) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== productName));
  };

  // Function to update item quantity
  const updateItemQuantity = (productName, newQuantity) => {
    setCartItems((prevItems) => {
      if (newQuantity <= 0) {
        return prevItems.filter((item) => item.name !== productName); // Remove if quantity is 0 or less
      }
      return prevItems.map((item) =>
        item.name === productName ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  // Calculate total items in cart for the Navbar count
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price of items in cart
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    getTotalItems,
    getCartTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};