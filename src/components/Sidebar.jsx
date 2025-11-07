import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { X } from "lucide-react";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`bg-black fixed inset-0 transition-opacity duration-300 z-50 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none "
        }`}
      ></div>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full md:w-[400px]  h-full bg-white z-50 fixed top-0 transition-all duration-300 shadow-lg`}
      >
        <div className="px-4 py-4">
          <div className="flex items-center justify-between pb-4">
            <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <X />
            </div>
            <div className="text-xl font-semibold font-grotesque">Cart (0)</div>
          </div>
          <div className="border-t flex items-center justify-between pt-4">
            <div className="flex items-center gap-2 text-xl font-jost font-semibold">
              <h1>Total:</h1>
              <p>Ksh 2000</p>
            </div>
            <div>
              <button className="w-full px-2 py-1 border bg-neutral-300 text-amber-600 rounded-md">
                Clear Cart
              </button>
            </div>
          </div>
          <div className="pt-4 w-full flex items-center justify-center">
            <button className="w-full bg-linear-to-r from-amber-400 to-amber-600 py-3 rounded-md text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
