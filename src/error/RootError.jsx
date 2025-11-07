import React from "react";
import { Link } from "react-router";

const RootError = () => {
  return (
    <div className="flex flex-col items-center pt-40 md:pt-20 h-screen mx-auto">
      <h1 className="text-[200px] font-grotesque font-bold text-gray-500">
        404
      </h1>
      <p className="font-semibold text-xl md:text-2xl tracking-tight px-2 text-center text-gray-700">
        Sorry, this page doesn't exist or has been moved
      </p>
      <Link to="/" viewTransition className="pt-8 ">
        <button className="py-3 cursor-pointer bg-linear-to-r from-amber-500 to-amber-600 px-8 rounded-md">
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default RootError;
