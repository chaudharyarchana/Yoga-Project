import Hero from "@/Components/Hero"
import Yoga from "@/Components/Yoga"
import Meditation from "@/Components/Meditaion"
import Gallery from "@/Components/Gallery"




const page=()=>{
  return(
   <div className="m-0 p-0">   
   <Hero/>
   <div className="flex flex-wrap w-full justify-evenly mt-10 mb-20">
   <Yoga/>
   </div>
   <div className="flex flex-wrap w-full justify-evenly mt-10 mb-20">
   <Meditation/>
   </div>
   <Gallery/>
   </div>
  
  )
}

export default page