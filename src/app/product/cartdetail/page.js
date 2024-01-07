"use client"
import React from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { removeItems,reset } from '@/ReduxState/Slices/CartSlice';


const CartDetails = () => {


 const items = useSelector((state)=>state.cart)
 const dispatch = useDispatch() 
 const amount = items.reduce((a, b) => a +parseInt(b.price, 10), 0);
 
 const handlePayment = () =>{
  if(items.length){
    alert("Thankyou For Shopping")
    dispatch(reset())
  }
  
}


  return (
   <div className=' sm:flex pt-20 h-fit'>
   
   <div className=' w-full   sm:w-2/3 '>
    <div className=' flex w-fit mx-auto' >
    <h1 className='text-xl font-bold px-5 underline'>Cart Items</h1>
   
    </div>
    {items.length == 0 ? (
      <div className='mt-20'>
         <p className="text-center text-gray-500">Your cart is empty. Start shopping now!</p>
        
         </div>
    ) : <div className='w-full ml-20 mt-10 h-96  overflow-scroll'>

    {items.map((item) => (
        <div key={item.id} className="mt-5 w-full flex border-b pb-5">
          <Image src={item.img} width={100} height={50} className="w-28 h-24 object-cover" />
          <div className="ml-10">
            <h1 className="font-semibold">{item.title}</h1>
            <h1 className="mt-2">Price: ₹{item.price}</h1>
            <button className="bg-red-500 text-white px-4 mt-3"
             onClick={()=> dispatch(removeItems(item.id))}>Remove</button>
          </div>
        </div>
      ))}
    </div>}
    
     
   </div>
   <div className=' ml-10 sm:w-1/3 h-fit '>
      <h1 className='text-2xl mt-3 text-center underline font-semibold text-gray-800'>Price Details</h1>
      <h1 className='mt-10 text-center'>Number of Items : {items.length}</h1>
      <h1 className='mt-2  text-center'>Delivery Charges : Free</h1>
      <h1 className='font-bold mt-10 text-center'>Total Amount: <span className='ml-10'>₹ {amount}</span></h1>
      <div className='mx-auto w-fit'>
            <button className="bg-blue-500 text-white px-5 py-2 text-m rounded-lg mt-3 "
      onClick={handlePayment}
      >Procced To Payment</button> 
     
      </div>
   </div>
   </div>
  );
};

export default CartDetails;
