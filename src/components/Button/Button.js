import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";
const Button = (props) => {
  const { className, buttonText, buttonClickHandler } = props;
  return (
    <button
      type="button"
      className={className}
      onClick={() => buttonClickHandler()}
    >
      {buttonText}
    </button>
  );
};

Button.defaultProps = {
  className: "button",
  buttonText: "",
  buttonClickHandler: () => {},
};

Button.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClickHandler: PropTypes.func,
};
export default Button;
