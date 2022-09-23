import PropTypes from "prop-types";

const Button = ({ color, text, onClickAddButton }) => {
  return (
    <button
      onClick={onClickAddButton}
      style={{ background: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "steelBlue",
};

Button.propsType = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClickAddButton: PropTypes.func.isRequired,
};

export default Button;
