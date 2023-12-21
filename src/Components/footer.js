import Link from "next/link";


const Footer=()=>{
    return(
        <div className='flex px-20 mt-40 pt-5 pb-5 align-center h-fit justify-between  text-gray-300 text-sm  cursor-pointer bg-green-800'>
            <div className='w-full sm:w-1/2'>
                <p className=''>123/A 1st Floor, <br/>Alwar Rajasthan, India</p>
                <p>archanakumari123.co@gmail.com</p>
                <p >+91XXXXXXXXXX</p>
            </div>
            <div className=" sm:w-1/3   hidden sm:flex   flex-col">
                <Link href="/" className='pb-2 hover:underline'>Home</Link>
                <Link href="/classes" className='py-2 hover:underline'>Classes</Link>
                <Link href="/about" className='py-2 hover:underline'>About</Link>
                <Link href="/shop" className='py-2 hover:underline'>Shop</Link>
                
            </div>
            <div className="w-1/3 pl-20 hidden lg:block text-center">
                <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}

export default Footer;