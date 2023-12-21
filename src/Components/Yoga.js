import Card from "./Card";
import { AllData } from "../../public/AllData";


const Yoga = () => {
  const yoga = AllData.filter((item) => item.type === "yoga").slice(0,3)
 
  return (
    <>
      {yoga.map((item) => (
        <Card key={item.id} item={item} classes={false} />
      ))}
     
    
    </>
  );
};

export default Yoga;
