import React, { Component, Fragment } from 'react'
import CartContext from "../../context/cart-context";

export class TotalPrice extends Component {
  render() {
    return (
        <p>
            {this.context.totalItemPrices &&
            this.context.totalItemPrices.map(
              (price) =>
                price.currency.symbol === this.context.currency && (
                  <Fragment
                    key={price.currency.symbol + price.amount}
                  >
                    {price.currency.symbol} {price.amount.toFixed(2)}
                  </Fragment>
                )
            )} 
        </p>

    )
  }
}

TotalPrice.contextType = CartContext;

export default TotalPrice