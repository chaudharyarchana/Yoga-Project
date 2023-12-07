import Image from "next/image";



const Gallery =()=>{
    return(
        <div className="container w-full mx-auto mb-20 bg-gray-200  ">
            
            <div className="container flex flex-wrap w-full mx-auto  h-28 sm:h-40">
         <Image src="/images/img1.jpg" className="w-1/3 sm:w-1/6 h-full object-cover " width={250} height={100}/>
         <Image src="/images/img2.jpg" width={250} height={100} className="w-1/3 sm:w-1/6 h-full object-cover  transition duration-300 ease-in-out filter grayscale hover:filter-none hover:grayscale-0"/>
         <Image src="/images/img3.jpg" width={250} height={100} className="w-1/3 sm:w-1/6 h-full object-cover  "/>
         <Image src="/images/img4.jpg" width={250} height={100} className="w-1/3 sm:w-1/6 h-full object-cover  transition duration-300 ease-in-out filter grayscale hover:filter-none hover:grayscale-0"/>
         <Image src="/images/img5.jpg" width={250} height={100} className="w-1/3 sm:w-1/6 h-full object-cover  "/>
         <Image src="/images/img6.jpg" width={250} height={100} className="w-1/3 sm:w-1/6 h-full object-cover  transition duration-300 ease-in-out filter grayscale hover:filter-none hover:grayscale-0"/>
         </div>
         <div className="flex flex-wrap container w-full h-28 sm:h-40">
         <Image src="/images/img9.jpg" width={250} height={100} className="w-1/3 sm:w-1/6 h-full object-cover  "/>
         <Image src="/images/img14.jpg" width={250} height={100} className="w-1/3 sm:w-1/6 h-full object-cover  transition duration-300 ease-in-out filter grayscale hover:filter-none hover:grayscale-0"/>
         <Image src="/images/img13.jpg" width={250} height={100} className="w-1/3 sm:w-1/6 h-full object-cover"/>
         <Image src="/images/img15.jpg" width={250} height={100} className="w-1/3 sm:w-1/6 h-full object-cover  transition duration-300 ease-in-out filter grayscale hover:filter-none hover:grayscale-0"/>
         <Image src="/images/img2.jpg" width={250} height={100} className="w-1/3 sm:w-1/6 h-full object-cover"/>
         <Image src="/images/img1.jpg" width={250} height={100} className="w-1/3 sm:w-1/6 h-full object-cover  transition duration-300 ease-in-out filter grayscale hover:filter-none hover:grayscale-0"/>
         
         </div>

        </div>
    )
}
export default Gallery