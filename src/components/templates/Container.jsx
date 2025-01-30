import styles from "../styles/Container.module.css";
// import FoodItems from "./FoodItems";

let Container = (props) => {
  return <div className={styles.Container}>{props.children}</div>;
};

export default Container;
