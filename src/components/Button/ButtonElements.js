import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Colors from "../../constants/Colors";

export const BtnWrapper = styled.div`
  display: flex;
  width: max-content;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 6px 15px 8px 15px;
  border-radius: 50px;
  border: ${({ lightBg, disabled, contactLinkedIn, contactGmail }) => {
    if (disabled) {
      return `${"2px solid lightgray"}`;
    } else if (lightBg && !contactLinkedIn && !contactGmail) {
      return `${"2px solid rgba(210,63,63,1)"}`;
    } else if (contactLinkedIn) {
      return `${"2px solid #0A66C2"}`;
    } else if (contactGmail) {
      return `${"2px solid #EA4335"}`;
    } else {
      return `${"2px solid white"}`;
    }
  }};
  background-color: ${({ disabled }) =>
    disabled ? `${"lightgray"}` : `${"transparent"}`};
  transition: background-color 150ms, border 150ms, opacity 1s ease;
  position: relative;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${({ disabled, contactLinkedIn, contactGmail }) => {
      if (disabled) {
        return `${"lightgray"}`;
      } else if (contactLinkedIn) {
        return Colors.linkedIn;
      } else if (contactGmail) {
        return Colors.googleGreen;
      } else {
        return Colors.secondaryRed;
      }
    }};
    border: ${({ contactGmail }) =>
      contactGmail ? `${"2px solid #34A853"}` : `${"2px solid transparent"}`};
    align-items: center;
  }
`;

export const ScrollBtn = styled(ScrollLink)`
  display: flex;
  color: ${({ lightBg }) => (lightBg ? Colors.navy : "white")};
  text-decoration: none;
  font-size: 18px;
  transition: color 150ms ease;

  ${BtnWrapper}:hover & {
    color: white;
  }
`;

export const RouteBtn = styled(Link)`
  display: flex;
  color: white !important;
  text-decoration: none;
  font-size: 20px;
  transition: color 150ms ease;

  ${BtnWrapper}:hover & {
    color: white;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  color: ${({ lightBg, disabled }) => {
    if (disabled) {
      return "white";
    } else if (lightBg) {
      return Colors.navy;
    } else {
      return "white";
    }
  }};
  /* color: ${({ lightBg }) => (lightBg ? Colors.navy : "white")}; */
  text-decoration: none;
  font-size: 18px;
  transition: color 150ms ease;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  ${BtnWrapper}:hover & {
    color: white;
  }
`;

export const Btn = styled.p`
  display: flex;
  color: ${({ lightBg, contactLinkedIn, contactGmail }) => {
    if (lightBg && !contactLinkedIn && !contactGmail) {
      return Colors.secondaryRed;
    } else if (contactLinkedIn) {
      return Colors.linkedIn;
    } else if (contactGmail) {
      return Colors.googleRed;
    } else {
      return "white";
    }
  }};
  text-decoration: none;
  font-size: 18px;
  transition: color 150ms ease;

  ${BtnWrapper}:hover & {
    color: white;
  }
`;

export const Arrow = styled.div`
  position: relative;
  bottom: -3px;
  margin-left: -20px;
  color: transparent;
  transition: all 200ms;

  ${BtnWrapper}:hover & {
    margin-left: 10px !important;
    color: white;
  }
`;

export const GmailArrow = styled.div`
  position: relative;
  bottom: -3px;
  margin-left: -20px;
  opacity: 0;
  transition: all 200ms;

  ${BtnWrapper}:hover & {
    margin-left: 10px !important;
    opacity: 1;
  }
`;
