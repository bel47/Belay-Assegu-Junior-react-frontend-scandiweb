import React, { Component } from "react";
import CartContext from "../../context/cart-context";

export class Price extends Component {
  render() {
    const { item } = this.props;
    return (
      <>
        {this.context.currency}
        {item.prices
          .filter(
            (price) => price.currency.symbol === `${this.context.currency}`
          )[0]
          .amount.toFixed(2)}
      </>
    );
  }
}

Price.contextType = CartContext;

export default Price;
