import React from "react";
import AboutSection from "../../components/AboutSection";
import { object1, object2, object3 } from "../../components/AboutSection/Data";
import HeroSection from "../../components/HeroSection";
import PortfolioSection from "../../components/PortfolioSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection {...object1} />
      <AboutSection {...object2} />
      <AboutSection {...object3} />
      <PortfolioSection />
    </>
  );
};

export default Home;
