import React from "react";
import { BtnWrapper, Btn, RouteBtn, Arrow } from "./ButtonElements";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";

const Button = ({
  title,
  direction,
  scrollTo,
  route,
  lightBg,
  primary,
  dark,
  dark2,
}) => {
  return (
    <BtnWrapper lightBg={lightBg}>
      {route ? (
        <RouteBtn to={route}>{title}</RouteBtn>
      ) : (
        <Btn
          lightBg={lightBg}
          to={scrollTo}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          primary={primary ? 1 : 0}
          dark={dark ? 1 : 0}
          dark2={dark2 ? 1 : 0}
        >
          {title}
        </Btn>
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
