import React, { Component } from "react";
import CartContext from "../../context/cart-context";
import {
  BigCartItems,
  BigCartItemBrand,
  BigCartItemLeft,
  HR,
  BigCartItemRight,
  BigCartItemName,
  ItemPrice,
  QuantityButton
} from "./bigcart.styles";
import CartAttributes from "./cart-attributes";
import Carrousel from './carrousel';
import Price from "../../Components/Shared/Price";

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
              {/* {this.context.currency}
              {item.prices
                .filter(
                  (price) =>
                    price.currency.symbol === `${this.context.currency}`
                )[0]
                .amount.toFixed(2)}{" "} */}
                <Price item={item}/>
            </ItemPrice>
          </div>
          <CartAttributes
            attrs={item.attributes}
            order={order}
            selectedAttrs={selectedAttrs}
          />
        </BigCartItemLeft>
        <BigCartItemRight>
          <QuantityButton>
            <button onClick={() => this.context.setCount(order, count + 1)}>
              +
            </button>
            <p>{count}</p>
            <button onClick={() => this.context.setCount(order, count - 1)}>
              -
            </button>
          </QuantityButton>
          <Carrousel gallery={item.gallery} />
        </BigCartItemRight>
      </BigCartItems>
    );
  }
}

BigCartItem.contextType = CartContext;

export default BigCartItem;
