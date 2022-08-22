import React, { Component, Fragment } from "react";
import {
  BigCartContainer,
  BigCartHeader,
  EmptyCart,
  OrderContainer,
  Tax,
  TotalPriceContainer,
  BigCartContaint,
} from "./bigcart.styles";
import BigCartItem from "./bigcart-item";
import CartContext from "../../context/cart-context";
import Button from "../../Components/Shared/Button";
import TotalPrice from "../../Components/Shared/TotalPrice";
export class BigCart extends Component {
  render() {
    return (
      <BigCartContainer>
        <BigCartContaint>
          <BigCartHeader>cart</BigCartHeader>

          <>
            {this.context.items && this.context.items.length !== 0 ? (
              this.context.items.map((item, i) => (
                <Fragment key={i}>
                  <BigCartItem
                    item={item.itemInfo}
                    selectedAttrs={item.selectedAttrs}
                    count={item.count}
                    order={i}
                    attr={item.attr}
                  />
                </Fragment>
              ))
            ) : (
              <EmptyCart>
                <p>Nothing to see here</p>
              </EmptyCart>
            )}
          </>
        </BigCartContaint>
        {this.context.items && this.context.items.length !== 0 && (
          <OrderContainer>
            <Tax>
              Tax 21%:{" "}
              <span>
                {" "}
                {this.context.totalItemPrices &&
                  this.context.totalItemPrices.map(
                    (price) =>
                      price.currency.symbol === this.context.currency && (
                        <Fragment key={price.currency.symbol + price.amount}>
                          {(price.amount * 0.21).toFixed(2)}
                        </Fragment>
                      )
                  )}{" "}
              </span>
            </Tax>
            <Tax>
              Quantity: <span>{this.context.totalItemCount}</span>
            </Tax>
            <TotalPriceContainer>
              <p>
                Total: <TotalPrice />
              </p>
            </TotalPriceContainer>
            <Button primary large>
              ORDER
            </Button>
          </OrderContainer>
        )}
      </BigCartContainer>
    );
  }
}

BigCart.contextType = CartContext;

export default BigCart;
