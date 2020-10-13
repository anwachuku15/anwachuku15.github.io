import React from "react";
import { BtnWrapper, ScrollBtn, RouteBtn, Btn, Arrow } from "./ButtonElements";
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
  formInfo,
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
        <div
          style={{ display: "flex" }}
          onClick={() =>
            submit
              ? submit(formInfo.name, formInfo.email, formInfo.message)
              : {}
          }
        >
          <Btn
            lightBg={lightBg}
            primary={primary ? 1 : 0}
            dark={dark ? 1 : 0}
            dark2={dark2 ? 1 : 0}
          >
            {title}
          </Btn>
          <Arrow>
            <SendOutlined fontSize="small" />
          </Arrow>
        </div>
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
