import Card from "./Card"
import { AllData } from "../../public/AllData"

const Meditation= () => {
  const meditation = AllData.filter((item)=> item.type === "meditation").slice(0,3)
  return(
    <>
    {meditation.map((item)=>(
        <Card key={item.id} item={item} />
    ))}
    </>
  )
}

export default Meditation