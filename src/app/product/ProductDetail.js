import Image from "next/image";


const ProductDetails =()=>{
    return (
        <div className="sm:flex w-full">
        <div className=" w-3/4 mx-auto sm:w-1/2 mx:auto h-96 mt-5 pb-3 sm:pb-10">
        
        <Image src="/images/img3.jpg" width={500} height={100} className=" w:full sm:w-3/4 mx-auto h-96 object-cover"/>
        <h1 className="text-2xl font-bold  mx-auto text-gray-900 text-center">Hatha Yoga </h1>

       

    </div>
    <div className=" w-full sm:w-1/2 mt-10 ">
      <p className="hidden sm:block text-sm text-gray-700 w-3/4 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      <div className=" mt-5 sm:mt-20 text-sm sm:text-md w-full sm:w-3/4 ml-5  sm:mx-auto">
      <h1 >Course Duration : 2 months</h1>
      <h1>Timing For Class : Everyday 6:00 AM</h1>
      </div>

      <div className=" w-full flex sm:block sm:w-3/4 sm:mx-auto justify-around">
            <h1 className=" text-xl mt-5 font-bold"> $ 499 <span className="text-gray-400 ml-5 text-m font-normal line-through">$1999</span></h1>
            <button className=" bg-green-500 text-white px-4 mt-5 ">Add To Card</button>
        </div>
    </div>
   
    </div>
    )
}

export default ProductDetails;