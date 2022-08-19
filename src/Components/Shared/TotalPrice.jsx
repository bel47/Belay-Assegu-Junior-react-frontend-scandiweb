import React, { Component } from 'react'
import CartContext from "../../context/cart-context";

export class TotalPrice extends Component {
  render() {
    return (
        <p>
            {this.context.totalItemPrices &&
            this.context.totalItemPrices.map(
              (price) =>
                price.currency.symbol === this.context.currency && (
                  <frameElement
                    key={price.currency.symbol + price.amount}
                  >
                    {price.currency.symbol} {price.amount.toFixed(2)}
                  </frameElement>
                )
            )} 
        </p>

    )
  }
}

TotalPrice.contextType = CartContext;

export default TotalPrice