import React, { Component } from "react";
import {
  BigCartContainer,
  BigCartHeader,
  HR,
  EmptyCart,
  OrderContainer,
  Tax,
  TotalPriceContainer,
} from "./bigcart.styles";
import BigCartItem from "./bigcart-item";
import CartContext from "../../context/cart-context";
import Button from "../../Components/Shared/Button";
import TotalPrice from "../../Components/Shared/TotalPrice";
export class BigCart extends Component {
  render() {
    return (
      <BigCartContainer>
        <BigCartHeader>cart</BigCartHeader>
        <>
          {this.context.items && this.context.items.length !== 0 ? (
            this.context.items.map((item, i) => (
              <React.Fragment key={i}>
                <BigCartItem
                  item={item.itemInfo}
                  selectedAttrs={item.selectedAttrs}
                  count={item.count}
                  order={i}
                />
              </React.Fragment>
            ))
          ) : (
            <EmptyCart>
              <p>Nothing to see here</p>
            </EmptyCart>
          )}
        </>
        {this.context.items && this.context.items.length !== 0 && (
          <OrderContainer>
            <Tax>Tax 21%: $42.00</Tax>
            <Tax>Quantity: 3</Tax>
            <TotalPriceContainer>
              <p>Total:</p> <TotalPrice />
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
