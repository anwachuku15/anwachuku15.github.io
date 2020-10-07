import React from "react";
import AboutSection from "../../components/AboutSection";
import { object1, object2, object3 } from "../../components/AboutSection/Data";
import ContactSection from "../../components/ContactSection";
import HeroSection from "../../components/HeroSection";
import PortfolioSection from "../../components/PortfolioSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection {...object1} />
      <PortfolioSection />
      <ContactSection {...object2} />
    </>
  );
};

export default Home;
