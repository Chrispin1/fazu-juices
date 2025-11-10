import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = () => {
  const { cart, increaseItemAmount, decreaseItemAmount, removeFromCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center pt-30 pb-30">
        <h1 className="font-semibold text-2xl animate-bounce">
          Your <span className="text-amber-500">cart</span> is empty
        </h1>
      </div>
    );
  }

  return (
    <div className="border-t pt-4 pb-4 ">
      {cart.map((item) => {
        const { name, id, amount, price, imageUrl } = item;
        const itemTotal = price * amount;
        return (
          <div
            key={item.id}
            className="flex items-center justify-between overflow-hidden px-2 py-4 border-b"
          >
            <div>
              <img
                className="h-25 w-25 object-cover"
                src={imageUrl}
                alt={name}
              />
            </div>
            <div className="w-full px-10 md:px-8">
              <div>
                <h1 className="font-jost font-semibold text-xl">{name}</h1>
              </div>
              <div className="border border-[#a09c9c] rounded-md mt-2">
                <div className="px-1 py-2 flex items-center justify-between">
                  <button
                    onClick={() => decreaseItemAmount(id)}
                    className="cursor-pointer"
                  >
                    <Minus size={20} />
                  </button>
                  <p className="text-xl font-semibold">{amount}</p>
                  <button
                    onClick={() => increaseItemAmount(id)}
                    className="cursor-pointer"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="text-sm text-gray-700">Price: {price}</div>
                <div className="text-sm text-gray-700">Total: {itemTotal}</div>
              </div>
            </div>
            <div
              onClick={() => removeFromCart(id)}
              className="p-2 text-red-500"
            >
              <Trash2 />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
