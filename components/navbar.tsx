import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 flex justify-center z-50">
      <div className="flex items-center justify-between border-2 border-gray-300 px-4 sm:px-10 py-2 sm:py-4 rounded-full w-full max-w-[90%] md:max-w-5xl backdrop-blur bg-opacity-60">
        <img
          src="/logo1.png"
          alt="HYPE SQUAD Logo"
          className="h-6 sm:h-8 md:h-12"
        />
        <div className="flex space-x-2 sm:space-x-4 lg:space-x-6">
          <button className="bg-gray-800 text-secondary-foreground text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-6 py-1 sm:py-2 rounded-full">
            About Us
          </button>
          <button className="bg-gray-800 text-secondary-foreground text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-6 py-1 sm:py-2 rounded-full">
            Services
          </button>
          <button className="bg-primary text-primary-foreground text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-6 py-1 sm:py-2 rounded-full hidden md:block">
            Book a call
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
