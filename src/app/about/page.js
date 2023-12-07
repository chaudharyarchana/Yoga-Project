import Image from "next/image"

import Navbar from "@/Components/Navbar"
import Footer from "@/Components/footer"
const About =()=>{
    return(
        <>
        <Navbar/>
        <div className="pt-20">
            <Image src="/images/img14.jpg" width={800} height={400} className="w-3/4 mx-auto h-96 object-cover"/>
            <p className="text-sm text-gray-700 w-3/4 text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui ut libero varius tristique. Duis volutpat quam eu tellus malesuada, at ullamcorper elit vulputate. Quisque vestibulum, libero id finibus congue, odio sapien pulvinar nulla, sit amet convallis justo odio vel risus. In hac habitasse platea dictumst. Quisque eu libero et justo scelerisque consectetur. Integer ac turpis vel elit fringilla fringilla ac vel libero. Nam nec lorem id libero maximus efficitur vel nec mauris. Suspendisse potenti. Morbi sed arcu vel felis volutpat iaculis. Duis ut vestibulum urna, eget tristique eros. Sed nec justo vitae urna facilisis efficitur. Proin eu ex nec felis tincidunt tincidunt non vel eros. Vivamus semper velit eget hendrerit rhoncus. Integer interdum, elit eu dapibus fermentum, ipsum tortor hendrerit justo, vel euismod odio arcu vel ex.</p>
        </div>
        <Footer />
        </>
    )
}
export default About