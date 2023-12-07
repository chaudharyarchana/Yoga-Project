import Navbar from "@/Components/Navbar"
import ProductDetails from "./ProductDetail"
import Footer from "@/Components/footer"
const Product =()=>{
    return(
        <>
        <Navbar/>
        <div className=" pt-20">
            
            <ProductDetails/>
        </div>
        <Footer/>
        </>
    )
}

export default Product