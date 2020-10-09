import React from "react";
import Button from "../Button";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./ContactElements";

const ContactSection = ({
  lightBg,
  imgStart,
  topline,
  lightText,
  heading,
  description,
  lightTextDesc,
  darkText,
  img,
  alt,
  dark,
  primary,
  buttonLabel,
}) => {
  return (
    <>
      <ContactContainer lightBg={lightBg} id="contact">
        <ContactWrapper>
          <ContactRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{heading}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    title={buttonLabel}
                    direction="down"
                    scrollTo="portfolio"
                    lightBg={lightBg}
                    primary={primary}
                    dark={dark}
                  />
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
