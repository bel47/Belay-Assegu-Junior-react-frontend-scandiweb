import React, { Component } from "react";
import { SwatchButton, AttributeButton } from "./product-description-styles";
import CartContext from "../../context/cart-context";
export class AttributeButtons extends Component {
  render() {
    const { type, onClick, attr, id, name, selectedAttrs } = this.props;
    if (type === "swatch") {
      return (
        <SwatchButton
          name={name}
          onClick={() => onClick(id, attr.value)}
          style={{
            background: attr.id === "White" ? "#F8F8FF" : `${attr.value}`,
            color: selectedAttrs[id] === attr.value ? "#FFFFFF" : "#1D1F22",
            outline: selectedAttrs[id] === attr.value && "2px solid #5ECE7B",
            border: selectedAttrs[id] === attr.value && "2px solid #FFFFFF",
          }}
        ></SwatchButton>
      );
    } else {
      return (
        <AttributeButton
          name={name}
          onClick={() => onClick(id, attr.value)}
          style={{
            backgroundColor:
              selectedAttrs[id] === attr.value
                ? "#1D1F22"
                : "rgba(255, 255, 255, 0.2)",
            color: selectedAttrs[id] === attr.value ? "#FFFFFF" : "#1D1F22",
          }}
        >
          <span>{attr.value}</span>
        </AttributeButton>
      );
    }
  }
}

AttributeButtons.contextType = CartContext;
export default AttributeButtons;