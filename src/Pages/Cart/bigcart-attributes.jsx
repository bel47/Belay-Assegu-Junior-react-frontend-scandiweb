import React, { Component } from "react";
import CartAttributes from "../../Components/Shared/CartAttributes";

export class BigCartAttributes extends Component {
  render() {
    const { product } = this.props;
    return (
        <CartAttributes product={product} type="big"/>
    );
  }
}

export default BigCartAttributes;
