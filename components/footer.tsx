import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black text-white p-24 " >
      <div className="container flex justify-around">
        <Image src="/Frame 28.png" alt="Logo" width={165} height={100} />
        <div>
          <div className="text-slate-500">Socials</div>
          <div>X/Twitter</div>
          <div>Discord</div>
          <div>LinkedIn</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
