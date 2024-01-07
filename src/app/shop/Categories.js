"use client";
import CheckBox from "./Checkbox";
import ProductCard from "./ProductCard";
import { ShopData } from "./ShopData";
import { useEffect, useState } from "react";


const Categories = () => {

  const [data, setData] = useState(ShopData);
  const [price, setPrice] = useState(400);
  const [checkboxes, setCheckboxes] = useState({
    murti: false,
    clothes: false,
    rudraksh: false,
    yogamat: false,
  });

  useEffect(() => {
    // Create an array of selected types based on checked checkboxes
    const selectedTypes = Object.keys(checkboxes).filter(
      (key) => checkboxes[key]
    );

    const selectedData = selectedTypes.flatMap((type) => {
      return ShopData.filter((data) => data.type === type);
    });

    console.log(selectedData);
    // If no checkboxes are selected, show all data
    const newData = selectedTypes.length === 0 ? ShopData : selectedData;
    const FilterData = newData.filter((data) => data.price <= price);
    setData([...FilterData]);
  }, [checkboxes, price]);

  const handleCheckboxChange = (checkboxId) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxId]: !prevCheckboxes[checkboxId],
    }));
  };
  return (
    <>
      <div className="pt-28 flex pl-3 lg:pl-10">
        <div className="w-1/4">
          <div>
            <h1 className="font-bold text-m lg:text-xl  underline mb-3">
              Categories
            </h1>
            <div className="flex-col flex">
              <CheckBox
                name="Murties"
                id="murti"
                checked={checkboxes.murti}
                handleCheckboxChange={handleCheckboxChange}
              />
              <CheckBox
                name="Clothes"
                id="clothes"
                checked={checkboxes.clothes}
                handleCheckboxChange={handleCheckboxChange}
              />
              <CheckBox
                name="Rudraksha"
                id="rudraksh"
                checked={checkboxes.rudraksh}
                handleCheckboxChange={handleCheckboxChange}
              />
              <CheckBox
                name="Yoga Mat"
                id="yogamat"
                checked={checkboxes.yogamat}
                handleCheckboxChange={handleCheckboxChange}
              />
            </div>
            <div>
              <h1 className="font-bold text-m lg:text-xl  underline my-3">
                Price
              </h1>
              <span>0</span>{" "}
              <input
                type="range"
                min={0}
                max={700}
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              <span>{price}</span>
            </div>
          </div>
        </div>
        <div className="flex w-3/4 flex-wrap">
          {data.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
