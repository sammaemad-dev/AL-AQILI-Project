import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  // ===========================
  // Add Product
  // ===========================

  const addToCart = (product) => {

    const exist = cartItems.find(
      (item) => item.id === product.id
    );

    if (exist) {

      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }

  };

  // ===========================
  // Remove Product
  // ===========================

  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );

  };

  // ===========================
  // Increase
  // ===========================

  const increaseQuantity = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };

  // ===========================
  // Decrease
  // ===========================

  const decreaseQuantity = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );

  };

  // ===========================
  // Clear Cart
  // ===========================

  const clearCart = () => {

    setCartItems([]);

  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}

export const useCart = () => useContext(CartContext);