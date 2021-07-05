import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
const Header = () => {
  return (
    <div>
      <Navbar color="black" light expand="md">
        <NavbarBrand href="/">React Application</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">GitHub</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <div>
            <AiOutlineUser></AiOutlineUser>
          </div>
        </NavbarText>
      </Navbar>
    </div>
  );
};
export default Header;
