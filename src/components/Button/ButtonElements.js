import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

// const navy = "#322f4e";

export const BtnWrapper = styled.div`
  display: flex;
  width: max-content;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 6px 15px 8px 15px;
  border-radius: 50px;
  border: ${({ lightBg }) =>
    lightBg ? `${"2px solid #322f4e"}` : `${"2px solid white"}`};
  background-color: transparent;
  transition: background-color 150ms, border 150ms, opacity 1s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: rgba(210, 63, 63, 1);
    border: 2px solid transparent;
    align-items: center;
  }
`;

export const ScrollBtn = styled(ScrollLink)`
  display: flex;
  color: ${({ lightBg }) => (lightBg ? "#322f4e" : "white")};
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
  color: ${({ lightBg }) => (lightBg ? "#322f4e" : "white")};
  text-decoration: none;
  font-size: 18px;
  transition: color 150ms ease;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  ${BtnWrapper}:hover & {
    color: white;
  }
`;

export const Btn = styled.p`
  display: flex;
  color: ${({ lightBg }) => (lightBg ? "#322f4e" : "white")};
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
