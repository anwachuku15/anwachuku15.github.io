import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
    </>
  );
};

export default ResponsiveNavbar;
