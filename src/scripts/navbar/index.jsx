import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default function(props) {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand><a href="#/">App</a></Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem href="#/sign-out"><i className="fa fa-sign-out"></i> Sign Out</NavItem>
      </Nav>
    </Navbar>
  );
}
