"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ToggleMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button
        className="text-gray-800 hover:text-gray-600 transition duration-300"
        onClick={toggleMenu}
      >
        <Image src="/images/img00.png" alt="image" width={24} height={12} />
      </button>
      <div>
        {isMenuOpen && (
          <div className="lg:hidden ">
            <div className="flex flex-col   space-y-2 mt-4">
              <Link
                href="/"
                className="text-gray-800 hover:text-gray-600 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/classes"
                className="text-gray-800 hover:text-gray-600 transition duration-300"
              >
                Classes
              </Link>
              <Link
                href="/shop"
                className="text-gray-800 hover:text-gray-600 transition duration-300"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-gray-800 hover:text-gray-600 transition duration-300"
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
