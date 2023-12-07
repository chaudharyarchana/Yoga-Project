import Image from "next/image";
import Link from 'next/link'

const Card=({item,classes})=>{
    return(
        <div className={`w-3/4 md:w-1/4 mx-auto h-96  mt-10 shadow-2xl pb-5 ${classes ? "md:ml-10 lg:ml-20": ""}`} >
            <h1 className="text-xl font-bold text-gray-900 text-center">{item.title}</h1>
            <Image src={item.img} className=" w-full h-3/4 object-cover" width={250} height={100}/>
            <div className="flex justify-between">
                <h1 className="ml-5 font-bold">$ {item.price}</h1>
                <Link href="/product"><button className=" bg-green-500 text-white px-4   ">Join</button></Link>
            </div>
            <p className="text-xs text-center text-gray-700 mx-5 mt-2 ">{item.description.slice(0,50)}</p>
           

        </div>
    )
}

export default Card