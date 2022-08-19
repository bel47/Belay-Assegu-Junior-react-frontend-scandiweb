import React, { Component } from "react";
import {
  CartItemsContent,
  PriceLabel,
  QuantityButton,
  MinusButton,
  PlusButton,
  CartItemsContentContainer,
  RightContent,
  LeftContent,
  Discription,
  MiniCartImg,
  QtyLable,
  MiniCartOverlay,
} from "./minicart.styles";
import plus from "../../../Assets/plus.svg";
import minus from "../../../Assets/minus.svg";
import { AiOutlinePlus } from "react-icons/bi";
import CartContext from "../../../context/cart-context";
import CartAttributes from "./cart-attributes";
import Price from "../../Shared/Price";

export class CartItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.cartRef = React.createRef();
  //   this.overlayRef = React.createRef();
  // }
  render() {
    const { item, count, order, attr } = this.props;
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
                <CartAttributes item={item} />
              </Discription>
              <QuantityButton>
                <PlusButton
                  onClick={() => this.context.setCount(order, count + 1)}
                >
                  <img src={plus} />
                </PlusButton>
                <QtyLable>{count}</QtyLable>
                <MinusButton
                  onClick={() => this.context.setCount(order, count - 1)}
                >
                  <img src={minus} />
                </MinusButton>
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
