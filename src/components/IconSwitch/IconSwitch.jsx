import React from "react";
import PropTypes from "prop-types";
import "./IconSwitch.css";

const IconSwitch = ({ icon, onSwitch }) => (
  <i className="material-icons" onClick={onSwitch}>
    {icon}
  </i>
);

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
