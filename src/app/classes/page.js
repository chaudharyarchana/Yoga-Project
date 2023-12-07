"use client"
import Card from "@/Components/Card"
import { AllData } from "./AllData"

import Navbar from "@/Components/Navbar"
import Footer from "@/Components/footer"
import { useState } from "react"

const Classes =()=>{
    const[data,setData] =useState(AllData)
    const[style,setStyle] =useState("all")
    
    const handleYoga =()=>{
       const yoga= AllData.filter((item)=>{
            return item.type==="yoga"
        })
        setData(yoga)
        setStyle("yoga")
    }
    const handleMeditation =()=>{
        const meditation= AllData.filter((item)=>{
            return item.type==="meditation"
        })
        setData(meditation)
        setStyle("meditation")
    }
    const handleAll =()=>{
        setData(AllData)
        setStyle("all")
    }
    return(
        <>
        <Navbar/>
   
        <div className="pt-20 w-full h-full ">
            <div className="w-fit mx-auto ">
                <button className={` ${style ==="all" ? " bg-green-500 text-white" : "bg-green-100 text-black "} px-4`} onClick={handleAll}>All</button>
                <button className={` ${style ==="yoga" ? " bg-green-500 text-white" : "bg-green-100 text-black "} px-4`} onClick={handleYoga}>Yoga</button>
                <button className={` ${style ==="meditation" ? " bg-green-500 text-white" : "bg-green-100 text-black "} px-4`} onClick={handleMeditation}>Meditation</button>
            </div>
            <div className="flex flex-wrap ">
                {data.map((item)=>(
                    <Card item={item} classes={true} />
                ))}
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Classes