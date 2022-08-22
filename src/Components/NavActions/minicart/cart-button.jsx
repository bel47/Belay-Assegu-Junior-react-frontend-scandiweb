import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import {
  CartItemCount,
  CartContent,
  CartTitle,
  NavbarCartItems,
  CartButtons,
  CartDropdownContainer,
  TotalPriceContainer,
  SPAN,
  MiniCartOverlay,
} from "./minicart.styles";
import CartContext from "../../../context/cart-context";
import CartItem from "./cart-item";
import { Button } from "../../Shared/Button";
import cart from "../../../Assets/cart.svg";
import { FaOpencart } from "react-icons/fa";
import TotalPrice from "../../Shared/TotalPrice";

export class CartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      showMenu: false,
    };
  }

  dropdownClickHandler = (e) => {
    e.stopPropagation();
    if (!this.state.showMenu) {
      this.setState({ showMenu: true });
    }
  };

  handleClickOutside = (e) => {
    this.setState({ showMenu: false });
  };

  hideOverlayHandler = () => {
    this.setState({ showMenu: false });
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }

  render() {
    return (
      <>
        <CartDropdownContainer
          show={this.state.showMenu}
          onClick={this.dropdownClickHandler}
        >
          <img src={cart} alt="shopping cart" />
          {<CartItemCount>{this.context.totalItemCount}</CartItemCount>}
          <CartContent>
            <CartTitle>
              My bag, <span>{this.context.totalItemCount} items</span>
            </CartTitle>
            <NavbarCartItems>
              <>
                {this.context.items && this.context.items.length !== 0 ? (
                  this.context.items.map((item, i) => (
                    <Fragment key={item.itemUUID}>
                      <CartItem
                        item={item.itemInfo}
                        selectedAttrs={item.selectedAttrs}
                        count={item.count}
                        order={i}
                        attr={item.attr}
                      />
                    </Fragment>
                  ))
                ) : (
                  <p>
                    No Items <br></br>
                    <FaOpencart size={100} />
                  </p>
                )}
              </>
              <TotalPriceContainer>
                <SPAN>Total</SPAN>
                <SPAN price>
                  <TotalPrice />
                </SPAN>
              </TotalPriceContainer>
            </NavbarCartItems>
            <CartButtons>
              <Link
                to="/cart"
                onClick={this.hideOverlayHandler}
                style={{ textDecoration: "none" }}
              >
                <Button>view bag</Button>
              </Link>
              <Link
                to="/cart"
                onClick={this.hideOverlayHandler}
                style={{ textDecoration: "none" }}
              >
                <Button primary>check out</Button>{" "}
              </Link>
            </CartButtons>
          </CartContent>
        </CartDropdownContainer>
        {this.state.showMenu && <MiniCartOverlay ref={this.overlayRef} />}
      </>
    );
  }
}

CartButton.contextType = CartContext;

export default CartButton;
