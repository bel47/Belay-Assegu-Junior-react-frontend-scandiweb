import React, { Component } from "react";
import { NavbarLinkContainer, NavbarLink } from "./navbar-menu-styles";
// import { CSSTransition } from 'react-transition-group';

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

  getData = async () => {
    fetchCategoriesAPI().then((res) => {
      // console.log(res);
      this.setState({
        categories: res.data.categories,
      });
    });
  };

  handleClick = (category) => {
    this.setState({ ...this.state, isSelected: category });
    // console.log(this.props.navigation);
    this.context.setCategory(category)
  };

  render() {
    // console.log(this.props.location.pathname)
    // const match = useRouteMatch("match/this/route/:id")

    return (
      <NavbarLinkContainer>
        {this.state.categories.map((category) => (
          <div
            timeout={1000}
            in={this.context.currentCategory === category.name}
            key={category.name}
            classNames="categories-transition"
          >
            <NavbarLink
              selected={this.context.currentCategory=== category.name ? true : ""}
              onClick={() => this.handleClick(category.name)}
            >
              <span> {category.name} </span>
            </NavbarLink>
          </div>
        ))}
      </NavbarLinkContainer>
    );
  }
}

NavbarMenu.contextType = CartContext

export default NavbarMenu;
