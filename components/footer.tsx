import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground p-6 sm:p-10 md:p-24">
      <div className="container mx-auto flex flex-row justify-around items-center">
        <Image 
          src="/Frame 28.png" 
          alt="Logo" 
          width={120} 
          height={70} 
          className="md:w-44 md:h-auto" // Adjust logo size for small screens
        />
        <div className="mt-4 sm:mt-0 text-center sm:text-left">
          <div className="text-slate-500 text-sm sm:text-base">Socials</div>
          <div className="flex flex-col space-y-2 mt-2">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm sm:text-base hover:underline" // Adjust link size for small screens
            >
              X/Twitter
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm sm:text-base hover:underline" // Adjust link size for small screens
            >
              Discord
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm sm:text-base hover:underline" // Adjust link size for small screens
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
