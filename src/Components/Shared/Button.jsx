import PropTypes from "prop-types";
import React, { Component } from "react";
import { Buttons } from "./shared.styles";

export class Button extends Component {
  static propTypes = {};

  render() {
    const { children, primary, type, isDisabled, large } = this.props;
    return (
      <Buttons
        primary={primary}
        disabled={isDisabled}
        type={type}
        large={large}
      >
        {children}
      </Buttons>
    );
  }
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
  large: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  large: PropTypes.bool,
};

export default Button;
