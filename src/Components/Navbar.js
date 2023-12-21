import Link from "next/link";
import ToggleMenu from "./ToggleMenu";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed w-full z-10 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-green-900 font-bold text-lg">
          <Link href="/">Yoga Dhyana</Link>
        </div>
        <div className="lg:flex lg:items-center lg:space-x-4 hidden">
          <Link
            href="/"
            className="text-gray-800 hover:text-green-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/classes"
            className="text-gray-800 hover:text-green-600 transition duration-300"
          >
            Classes
          </Link>
          <Link
            href="/shop"
            className="text-gray-800 hover:text-green-600 transition duration-300"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-green-600 transition duration-300"
          >
            About
          </Link>
        </div>
        {/* -----------------------Cart---------------- */}
        <CartIcon />
        <div className="lg:hidden">
          <ToggleMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
