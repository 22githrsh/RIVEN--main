import React from "react";

function Nav() {
  return (
    <nav className="absolute top-0 left-0 w-full flex flex-col md:flex-row justify-between items-center text-white px-4 py-4 md:px-8 md:py-6 bg-black">
      <div className="nav-left flex gap-4 md:gap-8 items-center">
        <h1 className="text-xl md:text-2xl font-bold">RIVEN</h1>
        <h3 className="font-medium text-sm md:text-base">WORKS</h3>
        <h3 className="font-medium text-sm md:text-base">ABOUT</h3>
      </div>
      <div className="nav-right flex gap-4 md:gap-8 items-center">
        <h3 className="font-medium text-sm md:text-base">CAREERS</h3>
        <h3 className="font-medium text-sm md:text-base">CONTACT</h3>
        <div className="bar h-1 w-8 rounded-lg bg-white"></div>
      </div>
    </nav>
  );
}

export default Nav;
