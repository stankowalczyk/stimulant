import React from "react";
import {Link} from "react-router";
import {Navbar as BsNavbar, Nav, NavItem} from "react-bootstrap";

export class Navbar extends React.Component {
  render() {
    return (
      <BsNavbar brand={<Link to="app">App</Link>} fixedTop fluid>
        <Nav right>
          <NavItem href="#/sign-out"><i className="fa fa-sign-out"></i> Sign Out</NavItem>
        </Nav>
      </BsNavbar>
    );
  }
}
