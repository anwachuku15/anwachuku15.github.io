import React, { useState, useRef, useCallback } from "react";
import "./Skills.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  FaCode,
  FaMobileAlt,
  FaCogs,
  FaLink,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const SectorRow1 = ({ showOverlay, setSelectedIcon }) => {
  const skillRef = useRef();

  return (
    <>
      <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
        <ScrollAnimation animateIn="flipInX" animateOnce offset={0}>
          <div
            ref={skillRef}
            className="skills__icon skills__selectedIcon"
            onClick={() => {
              showOverlay();
              setSelectedIcon(0);
            }}
          >
            <FaCode fontSize={60} />
          </div>
        </ScrollAnimation>
        <p className="skills__iconTitle">Web Application Development</p>
        <p className="skills__description">
          Fast, responsive and engaging apps that bring your ideas to life.
        </p>
      </Grid>
      <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
        <ScrollAnimation
          animateIn="flipInX"
          animateOnce
          delay={window.innerWidth > 960 ? 100 : 0}
          offset={0}
        >
          <div
            className="skills__icon"
            onClick={() => {
              showOverlay();
              setSelectedIcon(1);
            }}
          >
            <FaMobileAlt fontSize={60} />
          </div>
        </ScrollAnimation>
        <p className="skills__iconTitle">Mobile Application Development</p>
        <p className="skills__description">
          Cross-platform apps built with efficiency and speed for iOS and
          Android.
        </p>
      </Grid>
      <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
        <ScrollAnimation
          animateIn="flipInX"
          animateOnce
          delay={window.innerWidth > 960 ? 200 : 0}
          offset={0}
        >
          <div
            className="skills__icon"
            onClick={() => {
              showOverlay();
              setSelectedIcon(2);
            }}
          >
            <FaDatabase fontSize={60} />
          </div>
        </ScrollAnimation>
        <p className="skills__iconTitle">Database Design</p>
        <p className="skills__description">
          Proper Database design for effective Web & Mobile development, always
          aiming for performance, scale and stability.
        </p>
      </Grid>
    </>
  );
};

const SectorRow2 = ({ showOverlay, setSelectedIcon }) => (
  <>
    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <ScrollAnimation
        animateIn="flipInX"
        animateOnce
        delay={window.innerWidth > 960 ? 300 : 0}
        offset={0}
      >
        <div
          className="skills__icon"
          onClick={() => {
            showOverlay();
            setSelectedIcon(3);
          }}
        >
          <FaCogs fontSize={60} />
        </div>
      </ScrollAnimation>
      <p className="skills__iconTitle">API Development</p>
      <p className="skills__description">
        REST APIs that are tailored to your needs and follow the best practices
        in performance and security.
      </p>
    </Grid>
    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <ScrollAnimation
        animateIn="flipInX"
        animateOnce
        delay={window.innerWidth > 960 ? 400 : 0}
        offset={0}
      >
        <div
          className="skills__icon"
          onClick={() => {
            showOverlay();
            setSelectedIcon(4);
          }}
        >
          <FaLink fontSize={60} />
        </div>
      </ScrollAnimation>
      <p className="skills__iconTitle">Third-party API Integration</p>
      <p className="skills__description">
        Integration with any third-party API of your choice. Extend the
        functionality of your apps with the least amount of effort.
      </p>
    </Grid>

    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <ScrollAnimation
        animateIn="flipInX"
        animateOnce
        delay={window.innerWidth > 960 ? 500 : 0}
        offset={0}
      >
        <div
          className="skills__icon"
          onClick={() => {
            showOverlay();
            setSelectedIcon(5);
          }}
        >
          <FaCloud fontSize={60} />
        </div>
      </ScrollAnimation>
      <p className="skills__iconTitle">Cloud Integration</p>
      <p className="skills__description">
        Deployment and maintenance of your apps with industry standard Cloud
        Services.
      </p>
    </Grid>
  </>
);

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 980,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const SkillsSection = () => {
  const classes = useStyles();
  const [selectedIcon, setSelectedIcon] = useState();

  const icons = [
    <div className="skills__icon">
      <FaCode fontSize={60} />
    </div>,
    <div className="skills__icon">
      <FaMobileAlt fontSize={60} />
    </div>,
    <div className="skills__icon">
      <FaDatabase fontSize={60} />
    </div>,
    <div className="skills__icon">
      <FaCogs fontSize={60} />
    </div>,
    <div className="skills__icon">
      <FaLink fontSize={60} />
    </div>,
    <div className="skills__icon">
      <FaCloud fontSize={60} />
    </div>,
  ];

  const overlayRef = useRef();

  const showOverlay = () => {
    // console.log("SHOW");
    // overlayRef.current.classList.remove("hideOverlay");
    // overlayRef.current.classList.add("showOverlay");
    // overlayRef.current.style.display = "flex";
  };

  const hideDisplay = () => {
    setTimeout(() => {
      overlayRef.current.style.display = "none";
    }, 500);
  };

  const hideOverlay = () => {
    // console.log("HIDDEN");
    // setSelectedIcon(null);
    // overlayRef.current.classList.add("hideOverlay");
    // hideDisplay();
  };

  return (
    <div className="skills__container" id="whatIdo">
      <div className="skills__headerContainer">
        <ScrollAnimation
          animateIn="slideInLeft"
          duration={1}
          delay={0}
          animateOnce={true}
        >
          <div className="skills__headerDiv">
            <div className="skills__header">
              <div className="skills__headerText">
                <h2>What I Do</h2>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInLeft"
          duration={1}
          delay={300}
          animateOnce={true}
        >
          <div className="skills__divider">
            <div className="skills__dividerInternal"></div>
          </div>
        </ScrollAnimation>
      </div>
      <div className={classes.root}>
        <div style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Grid container spacing={3}>
            <SectorRow1
              showOverlay={showOverlay}
              setSelectedIcon={setSelectedIcon}
            />
            <SectorRow2
              showOverlay={showOverlay}
              setSelectedIcon={setSelectedIcon}
            />
          </Grid>
        </div>
      </div>

      {/* <div className="skills__overlay" ref={overlayRef} onClick={hideOverlay}>
        <div className="skills__overlayContent">{icons[selectedIcon]}</div>
      </div> */}
    </div>
  );
};

export default SkillsSection;
