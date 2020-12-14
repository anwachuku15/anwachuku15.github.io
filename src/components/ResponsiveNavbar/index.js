import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const ResponsiveNavbar = ({ notFound }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} notFound={notFound} />
      <Navbar toggleMenu={toggleMenu} notFound={notFound} />
    </>
  );
};

export default ResponsiveNavbar;
