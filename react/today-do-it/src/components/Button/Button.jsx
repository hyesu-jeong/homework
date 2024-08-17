import { PropTypes } from "prop-types";
import S from "./Button.module.css";

function Button({ children }) {
  return <button className={S.button}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
