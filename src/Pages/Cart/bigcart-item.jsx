import React, { Component } from "react";
import CartContext from "../../context/cart-context";
import {
  BigCartItems,
  BigCartItemBrand,
  BigCartItemLeft,
  BigCartItemRight,
  BigCartItemName,
  ItemPrice,
  QuantityButton,
} from "./bigcart.styles";
import CartAttributes from "./bigcart-attributes";
import Carrousel from "./carrousel";
import Price from "../../Components/Shared/Price";
import bigminus from "../../Assets/bigminus.svg";
import bigplus from "../../Assets/bigplus.svg";

export class BigCartItem extends Component {
  render() {
    const { item, selectedAttrs, count, order } = this.props;
    return (
      <BigCartItems>
        <BigCartItemLeft>
          <div>
            <BigCartItemBrand> {item.brand} </BigCartItemBrand>
            <BigCartItemName> {item.name} </BigCartItemName>
            <ItemPrice>
              <Price item={item} />
            </ItemPrice>
          </div>
          <CartAttributes product={this.props} />
        </BigCartItemLeft>
        <QuantityButton>
          <img
            src={bigplus}
            onClick={() => this.context.setCount(order, count + 1)}
            alt="plus"
          />
          <p>{count}</p>
          <img
            src={bigminus}
            onClick={() => this.context.setCount(order, count - 1)}
            alt="minus"
          />
        </QuantityButton>
        <BigCartItemRight>
          <Carrousel gallery={item.gallery} />
        </BigCartItemRight>
      </BigCartItems>
    );
  }
}

BigCartItem.contextType = CartContext;
export default BigCartItem;