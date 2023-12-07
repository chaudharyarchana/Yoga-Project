import Image from "next/image";


const YogaInfo = () => {
  return (
    <div className="container w-full mx-auto pt-28 flex  justify-between">
      
      <div className="text-center  w-1/2">
  <h2 className=" w-3/4 mx-auto text-2xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-bold text-gray-600  ">
    Discover Yoga and Give a New Life
  </h2>
  <button className="bg-green-500 text-white mt-5 p-1 sm:p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 transition duration-300 ">
    Demo
  </button> 
</div>
<div className="container w-1/2 mx-auto" >
  <Image src="/images/img1.jpg" width={200} height={500} className="rounded-xl shadow-lg w-1/2 mx-auto"/>
</div>

    </div>
  );
};

export default YogaInfo;
