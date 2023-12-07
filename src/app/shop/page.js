"use client"
import { ShopData } from "./ShopData"
import ProductCard from "./ProductCard"
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/footer"
import {  useState } from "react"


const Shop =()=>{

  //states
  const[data,setData] =useState(ShopData)
  const[price,setPrice]=useState(700)

  const[checkboxes,setCheckboxes] =useState({
    murti:false,
    yogamat:false,
    rudraksh:false,
    clothes:false
  })
 

  //functions
  const handleCheckboxChange = (checkboxName) => {
    //-------checkbox toggle--------
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));

    //---------data based on selected checkbox----

    const newdata = ShopData.filter((item)=>{
      return item.type === checkboxName
    })
   
    
      if(data.length === ShopData.length && !checkboxes[checkboxName] ){
       console.log(checkboxes[checkboxName])
      
        setData(newdata)
       
      }
      else if(!checkboxes[checkboxName]){
        setData([...data,...newdata])
      }else if(checkboxes[checkboxName]){
        
          // Remove when checked is false from data
             const updatedData = data.filter(item => !newdata.includes(item));
             setData(updatedData);
      }
      
  };

  //function for price handling
  const handlePrice=(e)=>{
    const newprice =e.target.value;
    const newdata = data.filter((item)=>{
      return item.price <= newprice
    })
     setPrice(newprice)
     setData(newdata)

  }


    return(
      <>
      <Navbar/>
        <div className="pt-28 flex pl-3 lg:pl-10">
           <div className="w-1/4"> 
               <div className="flex-col flex">
               <h1 className="font-bold text-m lg:text-xl  underline mb-3">Categories</h1>
               <label>
                 <input
                   type="checkbox"
                   id="murti"
                     checked={checkboxes.murti}
                     onChange={() => handleCheckboxChange('murti')}
                      />
                       Murties
                         </label>

                         <label>
                 <input
                   type="checkbox"
                   id="yogamat"
                      checked={checkboxes.yogamat}
                      onChange={() => handleCheckboxChange('yogamat')}
                      />
                        Yoga Mat
                         </label>
                         <label>
                 <input
                   type="checkbox"
                   id="rudraksh"
                      checked={checkboxes.rudraksh}
                      onChange={() => handleCheckboxChange('rudraksh')}
                      />
                       Rudraksh
                         </label>
                         <label>
                 <input
                   type="checkbox"
                   id="clothes"
                      checked={checkboxes.clothes}
                      onChange={() => handleCheckboxChange('clothes')}
                      />
                       Clothes
                         </label>
               
               
               </div>
               <div>
                <h1 className="font-bold text-m lg:text-xl  underline my-3">Price</h1>
              <span>0</span>  <input type="range" min={0} max={700} value={price} onChange={handlePrice}/> <span>${price}</span>
               </div>
               <div>
                <h1 className="font-bold text-m lg:text-xl  underline my-3">Rating</h1>
                
               </div>
           </div>
           <div className="flex w-3/4 flex-wrap">
                {
                    data.map((item)=>(
                        <ProductCard item={item} />
                    ))
                }
           </div>
        </div>
        <Footer/>
        </>
    )
}
export default Shop