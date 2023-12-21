"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

const CartIcon = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <div className="relative">
        <Link href="/product/cartdetail">
          <Image src="/images/img0.png" alt="image" width={24} height={12} />
          <span className="text-white bg-red-600 px-1 py-0 font-bold absolute bottom-4 left-4 rounded-full">
            {items.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CartIcon;
