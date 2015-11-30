import React from "react";
import {Navbar as BsNavbar, Nav, NavItem} from "react-bootstrap";

export class Navbar extends React.Component {
  render() {
    return (
      <BsNavbar fixedTop fluid>
        <BsNavbar.Header>
          <BsNavbar.Brand><a href="#/">App</a></BsNavbar.Brand>
        </BsNavbar.Header>
        <Nav pullRight>
          <NavItem href="#/sign-out"><i className="fa fa-sign-out"></i> Sign Out</NavItem>
        </Nav>
      </BsNavbar>
    );
  }
}
