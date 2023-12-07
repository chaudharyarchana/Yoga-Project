"use client"
import Image from "next/image";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 fixed w-full z-10 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-green-900 font-bold text-lg">
          <a href="/">Yoga Dhyana</a>
        </div>
        <div className="lg:flex lg:items-center lg:space-x-4 hidden">
          <a href="/" className="text-gray-800 hover:text-gray-600 transition duration-300">Home</a>
          <a href="/classes" className="text-gray-800 hover:text-gray-600 transition duration-300">Classes</a>
          <a href="/shop" className="text-gray-800 hover:text-gray-600 transition duration-300">Shop</a>
          <a href="/about" className="text-gray-800 hover:text-gray-600 transition duration-300">About</a>
        </div>
        <div className="relative">
         <a href="/" > <Image src="/images/img0.png"  width={24} height={12}/>  </a>
         <span className="text-white bg-red-600 px-1 py-0 font-bold absolute bottom-4 left-4 rounded-full">0</span>
         </div>
        <div className="lg:hidden">
          <button
            className="text-gray-800 hover:text-gray-600 transition duration-300"
            onClick={toggleMenu}
          >
            <Image src="/images/img00.png" width={24} height={12} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col items-start space-y-2 mt-4">
            <a href="/" className="text-gray-800 hover:text-gray-600 transition duration-300">Home</a>
            <a href="/classes" className="text-gray-800 hover:text-gray-600 transition duration-300">Classes</a>
            <a href="/shop" className="text-gray-800 hover:text-gray-600 transition duration-300">Shop</a>
            <a href="/about" className="text-gray-800 hover:text-gray-600 transition duration-300">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

