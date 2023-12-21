import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItems } from "@/ReduxState/Slices/CartSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductCard = ({ item }) => {
  const router = useRouter();
  const [add, setAdd] = useState("Add");
  const dispatch = useDispatch();
  const handleClick = () => {
    if (add === "Add") {
      dispatch(addItems(item));
      setAdd("Cart");
    } else {
      router.push("./product/cartdetail");
    }
  };
  return (
    <div className="w-3/4  h-60 md:w-1/3 lg:w-1/4 ml-10  mb-5 shadow-2xl pb-2 border-2">
      <Image
        src={item.img}
        className=" w-full h-3/4 object-cover"
        width={250}
        height={100}
      />
      <h1 className="text-m font-bold text-gray-900 text-center">
        {item.title}
      </h1>

      <div className="flex justify-between">
        <h1 className="ml-5 font-bold">$ {item.price}</h1>
        <button className=" bg-green-500 text-white px-4" onClick={handleClick}>
          {add}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
