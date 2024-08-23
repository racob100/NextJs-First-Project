import React from "react";
import Navbar from "./navbar";

const HypeSection = () => {
  return (
    <div className="relative bg-[url('/moon.png')] bg-fixed bg-[center_top_110%] bg-no-repeat flex flex-col items-center justify-center min-h-screen bg-secondary text-secondary-foreground">
      {/* Navbar with Rounded Border */}
      <Navbar />

      {/* Main Content */}
      <div className="relative flex w-full flex-col items-center text-center mt-16 sm:mt-8 md:mt-24 lg:mt-28 px-4">
        {/* First line */}
        <div className="w-full max-w-[90%] flex flex-col items-center justify-center border-x-4 border-primary rounded-b-3xl py-12">
          <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">
            We don't just <span className="italic">market</span>,
          </div>
          {/* "We hype" for small screens */}
          <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mt-2 lg:hidden">
            <span>we </span>
            <span className="italic text-primary">hype.</span>
          </div>
        </div>

        {/* "We hype" Overlapping line for larger screens */}
        <div className="hidden lg:flex lg:absolute lg:top-[40%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">
          <span>we </span>
          <span className="italic text-primary">hype.</span>
        </div>

        {/* Outer container with green lines */}
        <div className="w-full max-w-[90%] border-x-4 border-primary rounded-t-3xl mt-6 flex flex-col items-center justify-center relative">
          {/* Inner container for spacing */}
          <div className="pt-4 lg:pt-36 flex flex-col items-center">
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-md lg:max-w-2xl mx-auto">
              An agency designed for the speed of web3. We help projects go
              viral, build communities, and scale businesses.
            </p>
            {/* Call to Action Button (inside green lines on small screens, outside on large screens) */}
            <button className="bg-primary text-primary-foreground text-sm sm:text-base md:text-lg lg:text-xl px-6 py-2 rounded-full shadow-md mt-6 lg:hidden">
              Book a call
            </button>
          </div>
        </div>

        {/* Button for larger screens, outside the green lines */}
        <button className="hidden lg:block bg-primary text-primary-foreground text-sm sm:text-base md:text-lg lg:text-xl px-6 py-2 rounded-full shadow-md mt-10">
          Book a call
        </button>
      </div>
    </div>
  );
};

export default HypeSection;