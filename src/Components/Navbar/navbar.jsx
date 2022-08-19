import React, { Component } from "react";
import {
  NavbarContainer,
  NavbarLogo,
  NavbarActionContainer,
  NavbarLinkContainer,
} from "./navbar-styles";
import logo from "../../Assets/logo.svg";
import NavbarMenu from "../NavbarMenu/navbar-menu";
import Actions from "../NavActions/actions";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <NavbarContainer>
        <NavbarLinkContainer>
          <NavbarMenu />
        </NavbarLinkContainer>
        <NavbarLogo>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </NavbarLogo>
        <NavbarActionContainer>
          <Actions />
        </NavbarActionContainer>
      </NavbarContainer>
    );
  }
}

export default Navbar;
