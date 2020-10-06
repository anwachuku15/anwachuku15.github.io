import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
} from "./HeroElements";
import Button from "../Button";
import Video from "../../assets/videos/herovideo.mp4";

const HeroSection = () => {
  return (
    <HeroContainer className="HeroContainer">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Hello, I'm{" "}
          <HeroH1
            style={{
              color: "rgb(225 21 21)",
              background: "rgba(255, 255, 255, 0.69)",
              padding: "1px 5px",
              borderRadius: 10,
              display: "inline-block",
            }}
          >
            Andrew Nwachuku
          </HeroH1>
          .
        </HeroH1>
        <HeroH1>I'm a full-stack web developer.</HeroH1>
        <Button
          title="See my work!"
          direction="down"
          scrollTo="portfolio"
          lightBg={false}
        />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
