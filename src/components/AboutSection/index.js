import React from "react";
import Button from "../Button";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./AboutElements";

const AboutSection = ({
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
  // const id = "id";
  return (
    <>
      <AboutContainer lightBg={lightBg} id="about">
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
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
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
