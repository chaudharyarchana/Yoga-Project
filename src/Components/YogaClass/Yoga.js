import { YogaData } from "./data";
import Card from "../Card";


const Yoga = () => {
  return (
    <>
      {YogaData.map((item) => (
        <Card key={item.id} item={item} classes={false} />
      ))}
    </>
  );
};

export default Yoga;
