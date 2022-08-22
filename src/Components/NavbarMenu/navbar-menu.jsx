import React, { Component } from "react";
import { NavbarLink } from "./navbar-menu-styles";
import { fetchCategoriesAPI } from "../../Services/Api";
import CartContext from '../../context/cart-context'

export class NavbarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetchCategoriesAPI().then((res) => {
      this.setState({
        categories: res.data.categories,
      });
    });
  };

  handleClick = (category) => {
    this.setState({ ...this.state, isSelected: category });
    this.context.setCategory(category)
  };

  render() {
    return (
      <>
        {this.state.categories.map((category) => (
            <NavbarLink
              selected={this.context.currentCategory === category.name}
              onClick={() => this.handleClick(category.name)}
              key={category.name}
            >
              <span> {category.name} </span>
            </NavbarLink>
        ))}
      </>
    );
  }
}

NavbarMenu.contextType = CartContext

export default NavbarMenu;
