import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarHome,
  SideBtnWrap,
  SidebarBtnLink,
} from "./SidebarElements";
import { NavLogo } from "../Navbar/NavbarElements";
import GitHubIcon from "@material-ui/icons/GitHub";

const Sidebar = ({ isOpen, toggleMenu, notFound }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleMenu}>
      <Icon onClick={toggleMenu}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        {!notFound ? (
          <SidebarMenu>
            <SidebarLink to="home" onClick={toggleMenu}>
              Home
            </SidebarLink>
            {/* <SidebarLink to="about">About</SidebarLink> */}
            <SidebarLink to="whatIdo" onClick={toggleMenu}>
              Skills
            </SidebarLink>
            <SidebarLink to="portfolio" onClick={toggleMenu}>
              Portfolio
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggleMenu}>
              Contact
            </SidebarLink>
          </SidebarMenu>
        ) : (
          <SidebarHome to="/" onClick={toggleMenu}>
            Home
          </SidebarHome>
        )}
        <SideBtnWrap>
          <SidebarBtnLink href="https://github.com/anwachuku15" target="_blank">
            Github <GitHubIcon fontSize="medium" style={{ marginLeft: 10 }} />
          </SidebarBtnLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
