import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black text-white p-6 sm:p-10 md:p-24">
      <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center">
        <Image src="/Frame 28.png" alt="Logo" width={165} height={100} />
        <div className="mt-4 sm:mt-0">
          <div className="text-slate-500">Socials</div>
          <div className="flex flex-col space-y-2">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
              X/Twitter
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Discord
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
