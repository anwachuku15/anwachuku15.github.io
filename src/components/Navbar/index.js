import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  // NavLogoIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggleMenu, notFound }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: "white " }}>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Andrew Nwachuku
            {/* <NavLogoIcon src={require("../../assets/images/A.png")} /> */}
          </NavLogo>
          <MobileIcon onClick={toggleMenu}>
            <FaBars color="#d82c2c" />
          </MobileIcon>

          {!notFound && (
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="hero"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="whatIdo"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  What I Do
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Portfolio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
          )}

          <NavBtn>
            <NavBtnLink href="https://github.com/anwachuku15" target="_blank">
              Github <GitHubIcon fontSize="small" style={{ marginLeft: 5 }} />
            </NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
