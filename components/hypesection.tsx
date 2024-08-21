import React from "react";
import Navbar from "./navbar";

const HypeSection = () => {
  return (
    <div className="relative bg-[url('/moon.png')] bg-cover bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Navbar with Rounded Border */}
      <Navbar />

      {/* Main Content */}
      <div className="relative flex w-full flex-col items-center text-center mt-16 sm:mt-20 md:mt-24 lg:mt-28">
        {/* First line */}
        <div className="w-[90%] h-64 px-20 items-end flex justify-center border-x-4 border-primary rounded-b-3xl ">
          <div className="text-xl  sm:text-3xl md:text-5xl lg:text-7xl font-bold">
            We don't just <span className="italic text-white">market</span>,
          </div>
        </div>

        {/* Second line */}
        <div className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mt-4 sm:mt-6">
          <span>we</span>
          <span className="italic text-primary"> hype.</span>
        </div>

        {/* Description */}
        <p className="mt-8 sm:mt-12 md:mt-16 text-xs sm:text-sm md:text-base lg:text-xl max-w-xs sm:max-w-md lg:max-w-2xl">
          An agency designed for the speed of web3. We help projects go viral,
          build communities, and scale businesses.
        </p>

        {/* Call to Action Button */}
        <button className="bg-primary text-black text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-6 py-1 sm:py-2 rounded-full mt-10">
          Book a call
        </button>
      </div>
    </div>
  );
};

export default HypeSection;
