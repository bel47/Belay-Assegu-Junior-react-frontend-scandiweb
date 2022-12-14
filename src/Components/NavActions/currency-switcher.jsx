import React, { Component } from "react";
import {
  CurrencyDropDown,
  Header,
  DropDownContent,
  CurrencyContent,
  Lable,
} from "./actions-styles";
import CartContext from "../../context/cart-context";
import { fetchCurrenciesAPI } from "../../Services/Api";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
export class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      showMenu: false,
    };
    this.menuRef = React.createRef();
    this.iconRef = React.createRef();
  }

  getData = async () => {
    fetchCurrenciesAPI().then((res) => {
      this.setState({
        currencies: res.data.currencies,
      });
    });
  };
  
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.getData();
  }

  handleClickOutside = (event) => {
    if (
      !this.menuRef.current.contains(event.target) &&
      !this.iconRef.current.contains(event.target)
    ) {
      this.setState({ showMenu: false });
    }
  };

  dropdownClickHandler = (e) => {
    e.stopPropagation();
    this.setState({ showMenu: !this.state.showMenu });
  };

  currencyClickHandler = (e, currency) => {
    e.stopPropagation();
    this.setState({ showMenu: false });
    this.context.setCurrency(currency.symbol)
  };

  render() {
    return (
      <CurrencyDropDown show={this.state.showMenu}>
        <Header onClick={this.dropdownClickHandler} ref={this.iconRef}>
           {this.context.currency}
          {!this.state.showMenu ?  <BiChevronDown /> : <BiChevronUp />}
        </Header>
        <DropDownContent ref={this.menuRef}>
          {this.state.showMenu &&
            this.state.currencies &&
            this.state.currencies.map((currency, index) => (
              <CurrencyContent
                key={index}
                onClick={(e) => this.currencyClickHandler(e, currency)}
              >
                <Lable>
                  {currency.symbol} {currency.label}
                </Lable>
              </CurrencyContent>
            ))}
        </DropDownContent>
      </CurrencyDropDown>
    );
  }
}

CurrencySwitcher.contextType = CartContext;
export default CurrencySwitcher;