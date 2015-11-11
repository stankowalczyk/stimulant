import React from "react";
import {Navbar as BsNavbar, NavBrand, Nav, NavItem} from "react-bootstrap";

export class Navbar extends React.Component {
  render() {
    return (
      <BsNavbar fixedTop fluid>
        <NavBrand><a href="#/">App</a></NavBrand>
        <Nav right>
          <NavItem href="#/sign-out"><i className="fa fa-sign-out"></i> Sign Out</NavItem>
        </Nav>
      </BsNavbar>
    );
  }
}
