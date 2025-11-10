import React, { useContext } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { Loader } from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  if (!products || products.length === 0) {
    return (
      <>
        <div className="h-screen flex flex-col items-center justify-center px-4 md:px-0">
          <Loader className="animate-spin" size={30} />
          <h1 className="pt-2 text-2xl animate-pulse">Loading products...</h1>
        </div>
      </>
    );
  }

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <div className="h-screen flex flex-col items-center justify-center px-4 md:px-0">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <Link to="/" className="mt-4 text-amber-500 underline">
            Go back to home
          </Link>
        </div>
      </>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, product.id);
  };
  const { name, price, description, imageUrl } = product;
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className="w-full md:max-w-3xl mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center h-screen gap-10 md:gap-25 ">
          <div data-aos="fade-right" className="md:w-1/2 w-full">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="font-grotesque font-semibold text-4xl">{name}</div>
            <div className="pt-3 font-jost text-xl text-amber-500">
              Ksh {price}
            </div>
            <div className="pt-3 tracking-wide text-xl ">{description}</div>
            <div className="w-full mx-auto pt-4">
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-linear-to-r from-amber-500 to-amber-600 rounded-md cursor-pointer text-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
