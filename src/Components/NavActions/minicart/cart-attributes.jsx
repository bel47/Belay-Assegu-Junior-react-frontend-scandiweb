import React, { Component } from "react";
import CartAttributes from "../../Shared/CartAttributes";
export class MiniCartAttributes extends Component {
  render() {
    const { product } = this.props;
    return (
        <CartAttributes product={product} type="mini"/>
    );
  }
}

export default MiniCartAttributes;
