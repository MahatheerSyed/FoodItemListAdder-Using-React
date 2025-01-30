import PropTypes from "prop-types";
import style from "../styles/ErrorMessage.module.css";

let ErrorMessage = ({ items }) => {
  // console.log(items);
  return (
    items.length === 0 && (
      <h2 className={style.ErrorMessage}>No Items Are Available !</h2>
    )
  );
};

ErrorMessage.propTypes = {
  items: PropTypes.array.isRequired,
};
export default ErrorMessage;
