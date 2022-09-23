import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ isShowAddForm, onToggleAddForm }) => {
  const location = useLocation();

  return (
    <header>
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          color={!isShowAddForm ? "green" : "red"}
          text={!isShowAddForm ? "Add" : "Close"}
          onClickAddButton={onToggleAddForm}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Jai Ganesha",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const styles = {
//   headerStyle: {
//     color: '#FFFFFF',
//     background: '#000000'
//   }
// }

export default Header;
