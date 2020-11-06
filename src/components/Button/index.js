import React from "react";
import {
  BtnWrapper,
  ScrollBtn,
  RouteBtn,
  SubmitBtn,
  Btn,
  Arrow,
} from "./ButtonElements";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  ArrowForwardIosRounded,
  SendOutlined,
  InfoOutlined,
} from "@material-ui/icons";

const Button = ({
  title,
  openModal,
  submit,
  isDisabled,
  direction,
  scrollTo,
  route,
  lightBg,
  primary,
  dark,
  dark2,
}) => {
  return (
    <BtnWrapper lightBg={lightBg} disabled={isDisabled}>
      {route && <RouteBtn to={route}>{title}</RouteBtn>}
      {direction && (
        <>
          <ScrollBtn
            lightBg={lightBg}
            onClick={() => (openModal ? openModal : {})}
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
            <Arrow>
              {direction === "down" && (
                <KeyboardArrowDownRounded fontSize="small" />
              )}
              {direction === "up" && (
                <KeyboardArrowUpRounded fontSize="small" />
              )}
              {direction === "forward" && (
                <ArrowForwardIosRounded fontSize="small" />
              )}
            </Arrow>
          </ScrollBtn>
        </>
      )}
      {openModal && (
        <>
          <Btn
            onClick={() => (openModal ? openModal : {})}
            lightBg={lightBg}
            primary={primary ? 1 : 0}
            dark={dark ? 1 : 0}
            dark2={dark2 ? 1 : 0}
          >
            {title}
          </Btn>
          <Arrow>
            <InfoOutlined fontSize="small" />
          </Arrow>
        </>
      )}
      {submit && (
        <SubmitBtn lightBg={lightBg} onClick={submit} disabled={isDisabled}>
          {title}
          {!isDisabled && (
            <Arrow>
              <SendOutlined fontSize="small" />
            </Arrow>
          )}
        </SubmitBtn>
      )}
    </BtnWrapper>
  );
};

export default Button;
