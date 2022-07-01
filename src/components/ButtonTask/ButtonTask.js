import React from "react";
import template from "./ButtonTask.jsx";
import PropTypes from "prop-types";

class ButtonTask extends React.Component {
  render() {
    return template.call(this);
  }
}

ButtonTask.propTypes = {
  text: PropTypes.string.isRequired,
};

ButtonTask.defaultProps = {
  color: "primary",
};

export default ButtonTask;
