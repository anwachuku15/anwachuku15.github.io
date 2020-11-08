import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarBtnLink,
} from "./SidebarElements";
import GitHubIcon from "@material-ui/icons/GitHub";

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleMenu}>
      <Icon onClick={toggleMenu}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home">Home</SidebarLink>
          {/* <SidebarLink to="about">About</SidebarLink> */}
          <SidebarLink to="whatIdo">Skills</SidebarLink>
          <SidebarLink to="portfolio">Portfolio</SidebarLink>
          <SidebarLink to="contact">Contact</SidebarLink>
        </SidebarMenu>
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
