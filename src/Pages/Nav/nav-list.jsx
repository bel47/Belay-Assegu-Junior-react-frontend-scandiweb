import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

let activeStyle = {
  textDecoration: "underline",
};
let activeClassName = "underline";

export class NavList extends Component {
  render() {
    return (
      <nav>
      <ul>
        <li>
          <NavLink
            to="all"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }    
          >
            ALL
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            CLOTHES
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                TECH
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
    )
  }
}

export default NavList