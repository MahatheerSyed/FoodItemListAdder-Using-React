// import { useState } from "react";
import style from "../styles/FoodItems.module.css";

const FoodItems = ({ items, setItems }) => {
  let onClickDelete = (index) => {
    let Array = items.filter((_, i) => i !== index);
    console.log(Array);
    setItems(Array);
    console.log("items", items);
    // setItems(items);
  };

  return items.map((item, index) => {
    // let isbought = ItemBought.includes(item);
    return (
      <div key={index} className={`${style.FoodItems} `}>
        <li>{item}</li>
        <button
          onClick={() => {
            onClickDelete(index);
          }}
        >
          Remove
        </button>
      </div>
    );
  });
};

export default FoodItems;
