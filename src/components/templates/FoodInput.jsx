import style from "../styles/FoodInput.module.css";
let FoodInput = ({ items }) => {
  // let ListArray = [];
  let FoodItemsHandle = (event) => {
    if (event.key === "Enter") {
      // ListArray.unshift(event.target.value);
      // console.log(event.target.value);
      items(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Food Items Here "
        className={style.FoodInput}
        onKeyDown={FoodItemsHandle}
      />
    </div>
  );
};
export default FoodInput;
