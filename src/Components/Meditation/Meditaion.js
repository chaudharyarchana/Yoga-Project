import {Data} from "./Data"
import Card from "../Card"


const Meditation= () => {
  return(
    <>
    {Data.map((item)=>(
        <Card key={item.id} item={item} />
    ))}
    </>
  )
}

export default Meditation