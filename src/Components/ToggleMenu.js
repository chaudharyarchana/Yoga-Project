"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ToggleMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div >
      <div >
      <button
        className="text-gray-800 hover:text-gray-600 transition duration-300 "
        onClick={toggleMenu}
      >
        <Image src="/images/img00.png" alt="image" width={24} height={12} />
      </button>
      </div>
      <div className="absolute top-16 left-0">
        {isMenuOpen && (
          <div className="lg:hidden w-96 bg-gray-800 py-1 text-white cursor-pointer" style={{width:"100vw"}}>
            <div className="flex justify-evenly  align-middle">
              <Link
                href="/"
                className=" hover:text-gray-600 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/classes"
                className=" hover:text-gray-600 transition duration-300"
              >
                Classes
              </Link>
              <Link
                href="/shop"
                className=" hover:text-gray-600 transition duration-300"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className=" hover:text-gray-600 transition duration-300"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleMenu;
