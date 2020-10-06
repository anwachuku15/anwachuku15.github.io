import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavLogoIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggleMenu }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            Andrew Nwachuku
            {/* <NavLogoIcon src={require("../../assets/images/A.png")} /> */}
          </NavLogo>
          <MobileIcon onClick={toggleMenu}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Contact</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink href="https://github.com/anwachuku15" target="_blank">
              Github
            </NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
