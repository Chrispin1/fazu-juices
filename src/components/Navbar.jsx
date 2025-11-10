import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { ShoppingCartIcon } from "lucide-react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const { setIsOpen } = useContext(SidebarContext);
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full fixed top-0 z-50">
      <div
        className={`${
          isActive ? "bg-white shadow-md" : "bg-transparent"
        }  px-3 py-2 md:px-6  w-full mx-auto z-10 transition-all duration-300`}
      >
        <div className="flex items-center justify-between md:max-w-7xl mx-auto pt-2 md:pt-0 px-2 md:px-0">
          <div data-aos="fade-right">
            <Link to="/" viewTransition>
              <h1 className="flex items-center gap-2">
                <span className="font-bold font-grotesque text-amber-500 text-4xl">
                  Fazu
                </span>
                <span className="font-semibold text-3xl font-jost">Juices</span>
              </h1>
            </Link>
          </div>
          <div
            className="cursor-pointer"
            data-aos="fade-left"
            onClick={() => setIsOpen(true)}
          >
            <div className="flex items-center gap-1">
              <div className="relative">
                <ShoppingCartIcon />
                <div className="absolute bottom-2.5 -right-1 p-0.5 bg-amber-500 rounded-xl text-xs text-[12px] h-4 w-4 flex justify-center items-center">
                  {itemAmount}
                </div>
              </div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
