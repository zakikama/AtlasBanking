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
        <NavbarBrand href="/">Atlas Banking</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/zakikama/AtlasBanking">GitHub</NavLink>
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
