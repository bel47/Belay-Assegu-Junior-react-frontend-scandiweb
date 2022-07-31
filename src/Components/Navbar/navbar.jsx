import React, { Component } from "react";
import {
  NavbarContainer,
  NavbarLogo,
  NavbarActionContainer,
} from "./navbar-styles";
import NavbarMenu from "../NavbarMenu/navbar-menu";
import Actions from "../NavActions/actions";


export class Navbar extends Component {
  render() {
    return (
      <NavbarContainer>
        <NavbarMenu />
        <NavbarLogo>
          <img src="/logo.svg" alt="Logo" />
        </NavbarLogo>
        <NavbarActionContainer>
          <Actions />
        </NavbarActionContainer>
      </NavbarContainer>
    );
  }
}


export default Navbar;
