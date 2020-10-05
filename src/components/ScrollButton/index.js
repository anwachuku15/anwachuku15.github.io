import React from "react";
import { BtnWrapper, Btn, RouteBtn, Arrow } from "./ButtonElements";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";

const Button = ({ title, direction, route }) => {
  return (
    <BtnWrapper>
      {route ? (
        <RouteBtn to={route}>{title}</RouteBtn>
      ) : (
        <Btn to="portfolio">{title}</Btn>
      )}
      <Arrow>
        {direction === "down" && <KeyboardArrowDownRounded fontSize="small" />}
        {direction === "up" && <KeyboardArrowUpRounded fontSize="small" />}
        {direction === "forward" && <ArrowForwardIosRounded fontSize="small" />}
      </Arrow>
    </BtnWrapper>
  );
};

export default Button;
