import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router";

const Hero = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="pt-20 md:max-w-7xl mx-auto px-6 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => {
          const { id, name, category, price, imageUrl } = product;
          return (
            <Link to={`/products/${id}`} viewTransition>
              <div
                key={index}
                className="border border-[#e4e4e4] w-full h-full  bg-white relative px-2 group"
                data-aos="fade-up"
              >
                <div className="w-full">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover pt-4 hover:scale-110 transition-hover duration-300"
                  />
                </div>
                <div className="absolute top-2 left-1 text-sm font-jost text-amber-500">
                  {category}
                </div>
                <div
                  className="font-jost font-semibold pt-2"
                  data-aos="fade-left"
                >
                  {name}
                </div>
                <div
                  className="text-sm text-gray-500 font-jost pb-4 pt-1"
                  data-aos="fade-left"
                >
                  Kshs {price}
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
