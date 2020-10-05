import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 30px; */
  height: 800px;
  position: relative;
  z-index: 1;

  /* TODO: add :before styles */
`;

export const HeroBg = styled.div`
  position: aboslute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  --o-object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: "center";
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  width: max-content;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 6px 15px 8px 15px;
  border-radius: 3px;
  border: 2px solid white;
  background-color: transparent;
  transition: background-color 150ms, border 150ms, opacity 1s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: rgba(201, 201, 201, 0.384);
    border: 2px solid transparent;

    align-items: center;
  }
`;

export const HeroBtn = styled(ScrollLink)`
  display: flex;
  color: white !important;
  text-decoration: none;
  font-size: 20px;
`;

export const Arrow = styled.div`
  position: relative;
  bottom: -3px;
  margin-left: -20px;
  color: transparent;
  transition: all 200ms;

  ${HeroBtnWrapper}:hover & {
    margin-left: 10px !important;
    color: white;
  }
`;
