import React, { useEffect } from "react";
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

const SectorRow1 = () => (
  <>
    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <ScrollAnimation animateIn="flipInX" animateOnce offset={0}>
        <div className="skills__icon">
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
        <div className="skills__icon">
          <FaMobileAlt fontSize={60} />
        </div>
      </ScrollAnimation>
      <p className="skills__iconTitle">Mobile Application Development</p>
      <p className="skills__description">
        Cross-platform apps built with efficiency and speed for iOS and Android.
      </p>
    </Grid>
    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <ScrollAnimation
        animateIn="flipInX"
        animateOnce
        delay={window.innerWidth > 960 ? 200 : 0}
        offset={0}
      >
        <div className="skills__icon">
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

const SectorRow2 = () => (
  <>
    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <ScrollAnimation
        animateIn="flipInX"
        animateOnce
        delay={window.innerWidth > 960 ? 300 : 0}
        offset={0}
      >
        <div className="skills__icon">
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
        <div className="skills__icon">
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
        <div className="skills__icon">
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
  // let delay;
  // useEffect(() => {
  //   window.onresize = (e) => {
  //     console.log(window.innerWidth);
  //     if (window.innerWidth < 960) {
  //       delay = 0;
  //     }
  //   };
  // });

  return (
    <div className="skills__container" id="whatIdo">
      <div className="skills__headerContainer">
        <ScrollAnimation
          animateIn="slideInLeft"
          duration={1}
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
          delay={200}
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
            <SectorRow1 />
            <SectorRow2 />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
