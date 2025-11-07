import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-black">
      <div className="flex items-center justify-center pt-6 pb-6">
        <h1 className="text-white">
          Copyright &copy; <span className="text-amber-500">Fazu Juices. </span>
          <span>{currentYear} </span>
          All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
