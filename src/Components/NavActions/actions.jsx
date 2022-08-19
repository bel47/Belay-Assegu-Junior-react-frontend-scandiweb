import React, { Component } from "react";
import { NavbarActionContainer } from "./actions-styles";
import CurrencySwitcher from "./currency-switcher";
import CartButton from "./minicart/cart-button";
import CartContext from '../../context/cart-context'

export class Actions extends Component {
  constructor(props) {
    super(props)
    this.box = React.createRef()
  }

  // componentDidMount() {
  //     document.addEventListener('click', this.handleOutsideClick);
  // }

  // handleOutsideClick = (event) => {
  //     if (this.box && !this.box.current.contains(event.target)) {
  //         if (this.context.isDimmed) {
  //             this.context.toggleDimm()
  //         }
  //     }
  // }

  render() {
    return (
      <NavbarActionContainer>
        <CurrencySwitcher currencies={this.props.currencies}/>
        <CartButton />
      </NavbarActionContainer>
    );
  }
}

Actions.contextType = CartContext
export default Actions;
