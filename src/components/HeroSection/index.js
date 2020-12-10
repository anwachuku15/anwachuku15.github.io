import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroMainText,
  HeroH1,
} from "./HeroElements";
import "./HeroSection.css";
import Button from "../Button";
import Video from "../../assets/videos/herovideo.mp4";
import ScrollAnimation from "react-animate-on-scroll";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const HeroSection = () => {
  return (
    <HeroContainer className="HeroContainer" id="hero">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <ScrollAnimation animateIn="zoomIn" duration={1} animateOnce>
          <HeroH1>Hello,</HeroH1>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="zoomIn"
          duration={1}
          animateOnce
          delay={100}
        >
          <HeroMainText>
            <HeroH1>I'm</HeroH1>
            <HeroH1
              className="hero__h1 animate__animated"
              onClick={() =>
                window.open("https://www.linkedin.com/in/anwachuku15")
              }
            >
              Andrew Nwachuku
              <div className="hero__linkedIn">
                <LinkedInIcon fontSize="large" />
              </div>
            </HeroH1>
            <HeroH1>.</HeroH1>
          </HeroMainText>
        </ScrollAnimation>
        <ScrollAnimation
          delay={500}
          animateIn="zoomInLeft"
          duration={1}
          animateOnce={true}
        >
          <HeroH1>I'm a full-stack web developer.</HeroH1>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="rotateIn"
          delay={1800}
          duration={1}
          animateOnce={true}
          style={{ alignSelf: "center" }}
        >
          <Button
            title="See my work!"
            direction="down"
            scrollTo="whatIdo"
            lightBg={false}
          />
        </ScrollAnimation>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
