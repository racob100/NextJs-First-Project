import React from "react";

const HypeSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white bg-center bg-no-repeat bg-[url('/greenframe.png'),_url('/moon.png')] bg-[position:center_40%,_center_bottom] lg:bg-[position:center_40%,_center_105%] bg-[size:95%_auto,_contain]">

      {/* Navbar with Rounded Border */}
      <nav className="fixed top-6 left-0 right-0 flex justify-center z-50">
        <div className="flex items-center justify-between border-2 border-gray-300 px-4 sm:px-10 py-2 sm:py-4 rounded-full w-full max-w-[90%] md:max-w-5xl backdrop-blur bg-opacity-60">
          {/* Logo Instead of Text */}
          <img src="/logo1.png" alt="HYPE SQUAD Logo" className="h-6 sm:h-8 md:h-12" />
          <div className="flex space-x-2 sm:space-x-4 lg:space-x-6">
            <button className="bg-gray-800 text-white text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-6 py-1 sm:py-2 rounded-full">
              About Us
            </button>
            <button className="bg-gray-800 text-white text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-6 py-1 sm:py-2 rounded-full">
              Services
            </button>
            <button className="bg-lime-500 text-black text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-6 py-1 sm:py-2 rounded-full hidden md:block">
              Book a call
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative flex flex-col items-center text-center mt-16 sm:mt-20 md:mt-24 lg:mt-28">
        {/* First line */}
        <div className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">
          We don't just <span className="italic text-white">market</span>,
        </div>

        {/* Second line */}
        <div className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mt-4 sm:mt-6">
        <span>we</span>
          <span className="italic text-lime-500"> hype.</span>
        </div>

        {/* Description */}
        <p className="mt-8 sm:mt-12 md:mt-16 text-xs sm:text-sm md:text-base lg:text-xl max-w-xs sm:max-w-md lg:max-w-2xl">
          An agency designed for the speed of web3. We help projects go viral, build communities, and scale businesses.
        </p>

        {/* Call to Action Button */}
        <button className="bg-lime-500 text-black text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-6 py-1 sm:py-2 rounded-full mt-10">
              Book a call
            </button>
      </div>
    </section>
  );
};

export default HypeSection;
