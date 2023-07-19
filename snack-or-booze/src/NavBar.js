import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>
        <div className="navItems">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/additem">Add Item</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/snacks">Snacks</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/drinks">drinks</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
