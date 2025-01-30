import styles from "../styles/ListItemContainer.module.css";
let ListItemContainer = (props) => {
  return <div className={styles.ListItemContainer}>{props.children}</div>;
};

export default ListItemContainer;
