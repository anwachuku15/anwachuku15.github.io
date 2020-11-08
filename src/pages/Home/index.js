import React from "react";
import AboutSection from "../../components/AboutSection";
import SkillsSection from "../../components/SkillsSection";
import { object1, object2 } from "../../components/AboutSection/Data";
import ContactSection from "../../components/ContactSection";
import HeroSection from "../../components/HeroSection";
import PortfolioSection from "../../components/PortfolioSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <AboutSection {...object1} /> */}
      <SkillsSection />
      <PortfolioSection />
      <ContactSection {...object2} />
    </>
  );
};

export default Home;
