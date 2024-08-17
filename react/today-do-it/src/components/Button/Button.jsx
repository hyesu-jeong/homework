import { PropTypes } from "prop-types";
import S from "./Button.module.css";

function Button({ children, ...props }) {
  return (
    <button className={S.button} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
