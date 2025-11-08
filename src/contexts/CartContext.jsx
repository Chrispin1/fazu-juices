import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);
  const [cart, setCart] = useState([]);

  //total price
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  //update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  //add to cart
  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
        )
      );
    } else {
      setCart([...cart, newItem]);
    }
  };
  //increase amount
  const increaseItemAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
        )
      );
    }
  };
  //decrease amount
  const decreaseItemAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: cartItem.amount - 1 } : item
        )
      );
    }
  };
  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  //clear cart
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        increaseItemAmount,
        decreaseItemAmount,
        clearCart,
        total,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
