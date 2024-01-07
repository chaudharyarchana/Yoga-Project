import Image from "next/image";
import Link from "next/link";

const YogaInfo = () => {
  return (
    <div className="container w-full mx-auto pt-28 flex  justify-between">
      <div className="text-center  w-1/2">
        <h2 className=" w-3/4 mx-auto text-2xl xl:text-7xl lg:text-6xl md:text-6xl sm:text-5xl font-bold text-gray-600  ">
        Yoga is the space where flower blossoms.
        </h2>
        <Link href="/demo">
          {" "}
          <button className="bg-green-500 text-white mt-5 p-1 sm:p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 transition duration-300 ">
            Demo
          </button>{" "}
        </Link>
      </div>
      <div className="container w-1/2 mx-auto">
        <Image
          src="/images/img1.jpg"
          width={200}
          height={500}
          className="rounded-xl shadow-lg w-1/2 mx-auto"
        />
      </div>
    </div>
  );
};

export default YogaInfo;
