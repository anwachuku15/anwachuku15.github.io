import React from "react";
import Button from "../Button";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  AboutH1,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ContactLink,
  ContactP,
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
  return (
    <>
      <AboutContainer lightBg={lightBg} id="about">
        <AboutH1>About</AboutH1>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{heading}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  I build front-end and full-stack web/mobile applications. I am
                  proficient in the{" "}
                  <strong style={{ color: "#43853d" }}>MERN</strong> stack
                  (MongoDB, Express, React, and Node) as well as{" "}
                  <strong style={{ color: "#51be95" }}>
                    Python Django web framework
                  </strong>
                  . I also create cross-platform mobile applications with{" "}
                  <strong style={{ color: "#61dafb" }}>React Native</strong>.
                  <br />
                  <br />
                  <ContactLink
                    lightBg={lightBg}
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    <ContactP>Let's work together.</ContactP>
                  </ContactLink>
                </Subtitle>

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
