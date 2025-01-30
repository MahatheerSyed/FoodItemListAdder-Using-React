import Container from "./components/templates/Container";
import FoodInput from "./components/templates/FoodInput";
import FoodItems from "./components/templates/FoodItems";
import ErrorMessage from "./components/templates/ErrorMessage";
import ListItemContainer from "./components/templates/ListItemContainer";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  let [FoodItemsList, setFoodItemsState] = useState(() => {
    const savedItems = localStorage.getItem("FoodItemsList");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("FoodItemsList", JSON.stringify(FoodItemsList));
  }, [FoodItemsList]);

  let HandleItemsList = (item) => {
    if (item !== "") {
      setFoodItemsState(() => [item, ...FoodItemsList]);
    }
  };
  return (
    <Container>
      <h1>Healthy Food Items</h1>
      <FoodInput items={HandleItemsList}></FoodInput>
      <ErrorMessage items={FoodItemsList}></ErrorMessage>
      <ListItemContainer>
        <FoodItems
          items={FoodItemsList}
          setItems={setFoodItemsState}
        ></FoodItems>
      </ListItemContainer>
    </Container>
  );
}
export default App;
