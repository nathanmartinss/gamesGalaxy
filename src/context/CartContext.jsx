import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      const currentQuantity = existingItem ? existingItem.quantity : 0;
      const totalQuantity = currentQuantity + quantity;

      if (totalQuantity > 5) {
        alert("Quantidade máxima de 5 unidades atingida para este item.");
        return prevCart;
      }

      if (totalQuantity > item.stock) {
        alert("Quantidade em estoque insuficiente.");
        return prevCart;
      }

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: totalQuantity }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
