import React from "react";
import "../app/globals.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" py-6 px-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-black font-bold text-sm">
          <a href="/">
            <Image
              src="/QuickShort-Logo-Black.png"
              alt="Description of the image"
              width={150}
              height={120}
            />
          </a>
        </div>

        {/* Navigation options on the right */}
        <div className="flex space-x-12">
          <a href="#" className="text-gray-600 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-300">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
