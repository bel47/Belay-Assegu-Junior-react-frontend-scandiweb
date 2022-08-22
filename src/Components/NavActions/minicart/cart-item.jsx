import React, { Component } from "react";
import {
  CartItemsContent,
  PriceLabel,
  QuantityButton,
  CartItemsContentContainer,
  RightContent,
  LeftContent,
  Discription,
  QtyLable,
} from "./minicart.styles";
import plus from "../../../Assets/plus.svg";
import minus from "../../../Assets/minus.svg";
import CartContext from "../../../context/cart-context";
import CartAttributes from "./cart-attributes";
import Price from "../../Shared/Price";

export class CartItem extends Component {
  render() {
    const { item, count, order, attr, selectedAttrs } = this.props;
    return (
      <>
        <CartItemsContentContainer>
          <CartItemsContent>
            <LeftContent>
              <Discription>
                <span>{item.brand}</span>
                <span>{item.name}</span>
                <PriceLabel>
                  <Price item={item} />
                </PriceLabel>
                <CartAttributes product={this.props} />
              </Discription>
              <QuantityButton>
                <img
                  src={plus}
                  alt="plus button"
                  onClick={() => this.context.setCount(order, count + 1)}
                />

                <QtyLable>{count}</QtyLable>

                <img
                  src={minus}
                  alt="minus button"
                  onClick={() => this.context.setCount(order, count - 1)}
                />
              </QuantityButton>
            </LeftContent>
          </CartItemsContent>
          <RightContent>
            <img src={item.gallery[0]} alt="image" />
          </RightContent>
        </CartItemsContentContainer>
      </>
    );
  }
}

CartItem.contextType = CartContext;

export default CartItem;
