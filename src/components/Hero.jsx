import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router";
import { Loader, Plus, Minus } from "lucide-react";

const Hero = () => {
  const { products } = useContext(ProductContext);
  const { addToCart, increaseItemAmount, decreaseItemAmount, cart } =
    useContext(CartContext);

  if (!products || products.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center px-4 md:px-0">
        <Loader className="animate-spin" size={30} />
        <h1 className="pt-2 text-2xl animate-pulse">Loading...</h1>
      </div>
    );
  }

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.id);
  };

  const handleIncrease = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    increaseItemAmount(id);
  };

  const handleDecrease = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    decreaseItemAmount(id);
  };

  const getItemAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    return cartItem ? cartItem.amount : 0;
  };

  return (
    <div className="pt-20 md:max-w-7xl mx-auto px-6 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => {
          const { id, name, category, price, imageUrl } = product;
          const itemAmount = getItemAmount(id);

          return (
            <Link to={`/products/${id}`} viewTransition key={id}>
              <div
                className="border border-[#e4e4e4] w-full h-full bg-white relative px-2 group"
                data-aos="fade-up"
              >
                <div className="w-full overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover pt-4 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-2 left-1 text-sm font-jost text-amber-500">
                  {category}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-jost font-semibold pt-2">{name}</div>
                    <div className="text-sm text-gray-500 font-jost pb-4 pt-1">
                      Kshs {price}
                    </div>
                  </div>

                  {/* Counter or Plus button */}
                  {itemAmount === 0 ? (
                    <div
                      className="border rounded-full border-[#e4e4e4] p-2 mr-2 cursor-pointer hover:bg-amber-50 hover:border-amber-500 transition-colors"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <Plus className="text-amber-500" size={20} />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 mr-2">
                      <button
                        className="border rounded-full border-[#e4e4e4] p-1 hover:bg-amber-50 hover:border-amber-500 transition-colors"
                        onClick={(e) => handleDecrease(e, id)}
                      >
                        <Minus className="text-amber-500" size={16} />
                      </button>
                      <span className="font-semibold text-sm min-w-5 text-center">
                        {itemAmount}
                      </span>
                      <button
                        className="border rounded-full border-[#e4e4e4] p-1 hover:bg-amber-50 hover:border-amber-500 transition-colors"
                        onClick={(e) => handleIncrease(e, id)}
                      >
                        <Plus className="text-amber-500" size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
