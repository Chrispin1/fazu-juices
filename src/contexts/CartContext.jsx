import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);
  const [cart, setCart] = useState([]);

  //total price
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      const price = parseInt(currentItem.price);
      return accumulator + price * currentItem.amount;
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
  const addToCart = (product, id) => {
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

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  //decrease amount
  const decreaseItemAmount = (id) => {
    const numId = Number(id);
    const cartItem = cart.find((item) => item.id === numId);

    if (cartItem) {
      if (cartItem.amount === 1) {
        removeFromCart(numId);
      } else {
        setCart(
          cart.map((item) =>
            item.id === numId ? { ...item, amount: cartItem.amount - 1 } : item
          )
        );
      }
    }
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
        itemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
