import styled from "styled-components";
import { motion } from "framer-motion";

export const PortfolioContainer = styled(motion.div)`
  /* max-height: 860px; */
  position: relative;
  height: auto;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 64px;
  padding-bottom: 30px;
  align-items: center;
  background: #2e1c1c;

  /* @media screen and (max-width: 1000px) {
    padding-top: 50px;
  } */
  /* @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  } */
`;

export const PortfolioWrapper = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PortfolioCard = styled(motion.div)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  /* max-height: 340px; */
  height: fit-content;
  padding-bottom: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  /* transition: all 0.2s ease-in-out; */

  /* &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */
`;

export const SelectedCard = styled(motion.div)`
  background: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: fit-content;
  /* max-height: 75%; */
  /* height: 560px; */
  /* width: 40%; */
  width: 700px;
  top: 100px;
  z-index: 1;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  /* padding: 30px 30px 15px 30px; */
  padding-bottom: 15px;
  overflow: hidden;

  @media screen and (max-width: 740px) {
    width: 460px;
    /* height: 70vh; */
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    /* height: 70vh; */
  }
`;

export const PortfolioIcon = styled(motion.img)`
  /* width: 160px; */
  /* height: 160px; */
  /* margin-bottom: 10px; */
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* height: 195px; */
`;

export const CarouselWrapper = styled.div`
  display: flex;
  height: 70%;
  width: 100%;
  position: relative;
  @media screen and (max-width: 740px) {
    /* width: 400px; */
    height: fit-content;
  }

  @media screen and (max-width: 480px) {
    /* width: 360px; */
    height: fit-content;
  }
`;

export const CarouselWindow = styled.div`
  position: relative;
  overflow: hidden;
  /* display: block; */
`;

export const Widget = styled(motion.iframe)`
  width: 100%;
  height: 100%;
  border: none;
`;

export const Carousel = styled(motion.div)`
  display: flex;
  position: relative;
  left: -100%;
  /* width: 10000px; */
`;

export const SelectedImage = styled(motion.img)`
  object-fit: contain;
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
  /* 
  @media screen and (max-width: 740px) {
    width: 460px;
    height: fit-content;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    height: fit-content;
  } */
`;

export const CarouselControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 0;
  color: rgba(255, 255, 255, 0.7);
`;

export const PrevButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(107, 107, 107, 0.3);
  color: white;
  border-top-right-radius: 5px;
  width: 60px;
  height: 60px;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(107, 107, 107, 0.6);
  }
`;

export const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(107, 107, 107, 0.3);
  color: white;
  border-top-left-radius: 5px;
  width: 60px;
  height: 60px;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(107, 107, 107, 0.6);
  }
`;

export const PortfolioH1 = styled(motion.h1)`
  /* font-size: 2.5rem; */
  font-size: 48px;
  line-height: 1.6em;
  font-weight: 500;
  color: white;
  /* margin-top: 10px; */
  /* margin-bottom: 64px; */
  padding-bottom: 10px;

  @media screen and (max-width: 480px) {
    /* font-size: 2rem; */
  }
`;

export const PortfolioDivider = styled(motion.div)`
  max-width: 70px;
  height: 23px;
  margin: 0 auto 64px auto;
  box-sizing: content-box;
  border-color: #d23f3f transparent transparent transparent;
  border-top-width: 3px;
  border-style: solid;
  content: "";
  width: 100%;
  height: 1px;
`;

export const PortfolioDividerInternal = styled(motion.div)`
  display: inline-block;
  width: 100%;
`;

export const PortfolioH2 = styled(motion.h2)`
  font-size: 1rem;
  margin-bottom: 10px;
  color: black !important;
`;

export const SelectedTextContent = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 30px 0 30px;
  overflow: scroll;
`;

export const SelectedH2 = styled(motion.h2)`
  text-align: left;
  width: 100%;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SelectedH3 = styled(motion.h3)`
  text-align: left;
  width: 100%;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const PortfolioP = styled(motion.p)`
  font-size: 1rem;
  text-align: center;
  color: black !important;
`;

export const SelectedP = styled(motion.p)`
  text-align: left;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 30px 15px 30px;
`;

export const ViewSiteButtonsContainer = styled(motion.div)`
  display: flex;
`;
export const ViewSiteButtonWrapper = styled(motion.a)`
  display: flex;
  text-decoration: none;
  width: max-content;
  align-self: center;
  align-items: center;
  justify-content: center;
  /* margin-top: 20px; */
  padding: 6px 15px 8px 15px;
  border-radius: 50px;
  border: 2px solid #d82c2c;
  background-color: transparent;
  transition: background-color 150ms, border 150ms, opacity 1s ease;
  position: relative;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #d82c2c;
    border: 2px solid transparent;
    align-items: center;
  }
`;
export const ViewSiteButton = styled(motion.p)`
  /* display: flex; */
  color: #d82c2c;

  ${ViewSiteButtonWrapper}:hover & {
    color: white;
  }
`;

export const GoToSiteIcon = styled.div`
  position: relative;
  bottom: -3px;
  margin-left: -20px;
  color: transparent;
  transition: all 200ms;

  ${ViewSiteButtonWrapper}:hover & {
    margin-left: 10px !important;
    color: white;
  }
`;

export const ExitButton = styled(motion.div)`
  cursor: pointer;
  width: 36px;
  height: 36px;
  color: #8a8a8a;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
    color: #322f4e;
    transition: all 0.2s ease-in-out;
  }
`;

export const Overlay = styled(motion.div)`
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  will-change: opacity;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  /* max-width: 990px; */
`;
