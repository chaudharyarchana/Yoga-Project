import Navbar from "@/Components/Navbar"
import Hero from "@/Components/Hero"
import Yoga from "@/Components/YogaClass/Yoga"
import Meditation from "@/Components/Meditation/Meditaion"
import Footer from "@/Components/footer";
import Gallery from "@/Components/Gallery/Gallery"




const page=()=>{
  return(
   <div className="m-0 p-0">
   <Navbar/>
   <Hero/>
     
   <div className="flex flex-wrap w-full justify-evenly mt-10 mb-20">
   <Yoga/>
   </div>
   <div className="flex flex-wrap w-full justify-evenly mt-10 mb-20">
   <Meditation/>
   </div>
   <Gallery/>
   
   <Footer/> 
   </div>
  
  )
}

export default page