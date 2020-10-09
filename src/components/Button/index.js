import React from "react";
import {
  BtnWrapper,
  ScrollBtn,
  RouteBtn,
  ModalBtn,
  Arrow,
} from "./ButtonElements";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const Button = ({
  title,
  openModal,
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
      {route && <RouteBtn to={route}>{title}</RouteBtn>}
      {direction && (
        <ScrollBtn
          onClick={() => (openModal ? openModal : {})}
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
        </ScrollBtn>
      )}
      {openModal && (
        <>
          <ModalBtn
            onClick={() => (openModal ? openModal : {})}
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
          </ModalBtn>
          <Arrow>
            <InfoOutlinedIcon fontSize="small" />
          </Arrow>
        </>
      )}

      {direction && (
        <Arrow>
          {direction === "down" && (
            <KeyboardArrowDownRounded fontSize="small" />
          )}
          {direction === "up" && <KeyboardArrowUpRounded fontSize="small" />}
          {direction === "forward" && (
            <ArrowForwardIosRounded fontSize="small" />
          )}
        </Arrow>
      )}
    </BtnWrapper>
  );
};

export default Button;
