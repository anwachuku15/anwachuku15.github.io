import React from "react";
import {
  BtnWrapper,
  ScrollBtn,
  RouteBtn,
  SubmitBtn,
  Btn,
  ResumeBtn,
  Arrow,
  GmailArrow,
} from "./ButtonElements";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  ArrowForwardIosRounded,
  SendOutlined,
  InfoOutlined,
} from "@material-ui/icons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GmailIcon from "./GmailIcon";
import GoogleDrive from "./GoogleDriveIcon";

const Button = ({
  title,
  openModal,
  contactLinkedIn,
  contactGmail,
  submit,
  isDisabled,
  direction,
  scrollTo,
  route,
  lightBg,
  primary,
  dark,
  dark2,
  resume,
}) => {
  return (
    <BtnWrapper
      lightBg={lightBg}
      resume={resume}
      disabled={isDisabled}
      contactLinkedIn={contactLinkedIn}
      contactGmail={contactGmail}
      onClick={() => {
        if (openModal) {
          openModal();
        } else if (contactLinkedIn) {
          window.open("https://www.linkedin.com/in/anwachuku15/", "_blank");
        } else if (contactGmail) {
          window.open("https://www.google.com/", "_blank");
        } else if (resume) {
          window.open(
            "https://drive.google.com/file/d/1hscrU-GcjnmHd83sh72dXREU_iTJ00kM/view?usp=sharing",
            "_blank"
          );
        }
      }}
    >
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
      {resume && (
        <>
          <ResumeBtn
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1hscrU-GcjnmHd83sh72dXREU_iTJ00kM/view?usp=sharing",
                "_blank"
              )
            }
            lightBg={lightBg}
            resume={resume}
          >
            {title}
          </ResumeBtn>
          <Arrow>
            <GoogleDrive
              style={{
                width: 20,
                height: 20,
                borderRadius: 2,
              }}
            />
          </Arrow>
        </>
      )}
      {contactLinkedIn && (
        <>
          <Btn
            onClick={() =>
              window.open("https://www.linkedin.com/in/anwachuku15/", "_blank")
            }
            lightBg={lightBg}
            contactLinkedIn={contactLinkedIn}
          >
            {title}
          </Btn>
          <Arrow>
            <LinkedInIcon fontSize="small" />
          </Arrow>
        </>
      )}
      {contactGmail && (
        <>
          <Btn
            onClick={() => window.open("https://www.google.com/", "_blank")}
            lightBg={lightBg}
            contactGmail={contactGmail}
          >
            {title}
          </Btn>
          <GmailArrow>
            <GmailIcon
              style={{
                width: 20,
                height: 20,
                // margin: 1,
                backgroundColor: "white",
                borderRadius: 2,
              }}
            />
          </GmailArrow>
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
