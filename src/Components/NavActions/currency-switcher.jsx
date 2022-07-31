import React, { Component } from "react";
import { CurrencyContainer, Header } from "./actions-styles";
import CartContext from '../../context/cart-context'

export class CurrencySwitcher extends Component {
  constructor(props) {
    super(props)
    this.state = {
        currencies: this.props.currencies,
        showMenu: false,
    }
    this.menuRef = React.createRef();
    this.iconRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    console.log(this.state.currencies)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      !this.menuRef.current.contains(event.target) &&
      !this.iconRef.current.contains(event.target)
    ) {
      this.setState({ ...this.state, showMenu: false });
    }
  };

  dropdownClickHandler = (e) => {
    e.stopPropagation();
    this.setState({ ...this.state, showMenu: !this.state.showMenu });
  };

  currencyClickHandler = (e, currency) => {
    e.stopPropagation();
    this.props.setSelectedCurrency({ ...currency });
    this.setState({ ...this.state, showMenu: false });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.currencies.data !== this.props.currencies.data) {
      this.setState({
        ...this.state,
        currencies: this.props.currencies.data,
        selected: { ...this.props.currencies.selected },
      });
    }
  }

  render() {
    return (
      <CurrencyContainer>
        <Header >
       <p>{'$'}</p> 
        <img src="/cdropdown.svg" alt="currencies" height="10px" />
        </Header>
      </CurrencyContainer>
    );
  }
}

CurrencySwitcher.contextType = CartContext
export default CurrencySwitcher;
