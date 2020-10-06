import React from "react";
import AboutSection from "../../components/AboutSection";
import { object1 } from "../../components/AboutSection/Data";
import HeroSection from "../../components/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection {...object1} />
    </>
  );
};

export default Home;
