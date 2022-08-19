import React, { Component } from "react";
import { SwatchButton, AttributeButton } from "./product-list-styles";

export class AttributeButtons extends Component {
  render() {
    // return (
    //   <div>AttributeButtons</div>
    // )
    const { type, onClick, attr, attrId, name } = this.props;
    console.log("attr", attr);
    if (type === "swatch") {
      return (
        <SwatchButton name={name} onClick={() => onClick(attrId, attr.value)}>
          <span
            style={{
              backgroundColor: `${attr.value}`,
              border: `1px solid ${attr.value}`,
            }}
          ></span>
        </SwatchButton>
      );
    } else {
      return (
        <AttributeButton
          name={name}
          onClick={() => onClick(attrId, attr.value)}
        >
          <span>{attr.value}</span>
        </AttributeButton>
      );
    }
  }
}

export default AttributeButtons;
