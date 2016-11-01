import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Autheus } from "autheus";

export default function(props) {
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#/">Stimulant</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        {
          Autheus.isSignedIn &&
          <Nav pullRight>
            <NavItem eventKey={1} href="#/sign-out">
              <i className="fa fa-sign-out"></i> Sign Out
            </NavItem>
          </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  );
}
