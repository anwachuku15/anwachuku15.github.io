import React from "react";
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

const SectorRow1 = () => (
  <>
    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <div className="skills__icon">
        <FaCode fontSize={60} />
      </div>
      <p className="skills__iconTitle">Web Application Development</p>
      <p className="skills__description">
        Fast, responsive and engaging apps that bring your ideas to life.
      </p>
    </Grid>
    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <div className="skills__icon">
        <FaMobileAlt fontSize={60} />
      </div>
      <p className="skills__iconTitle">Mobile Application Development</p>
      <p className="skills__description">
        Cross-platform apps built with efficiency and speed for iOS and Android.
      </p>
    </Grid>
    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <div className="skills__icon">
        <FaCogs fontSize={60} />
      </div>
      <p className="skills__iconTitle">API Development</p>
      <p className="skills__description">
        REST APIs that are tailored to your needs and follow the best practices
        in performance and security.
      </p>
    </Grid>
  </>
);

const SectorRow2 = () => (
  <>
    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <div className="skills__icon">
        <FaLink fontSize={60} />
      </div>
      <p className="skills__iconTitle">Third-party API Integration</p>
      <p className="skills__description">
        Integration with any third-party API of your choice. Extend the
        functionality of your apps with the least amount of effort.
      </p>
    </Grid>
    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <div className="skills__icon">
        <FaDatabase fontSize={60} />
      </div>
      <p className="skills__iconTitle">Database Design</p>
      <p className="skills__description">
        Proper Database design for effective Web & Mobile development, always
        aiming for performance, scale and stability.
      </p>
    </Grid>
    <Grid item xs={12} md={4} lg={4} style={{ height: 350 }}>
      <div className="skills__icon">
        <FaCloud fontSize={60} />
      </div>
      <p className="skills__iconTitle">Cloud Integration</p>
      <p className="skills__description">
        Deployment and maintenance of your apps in a wide range of Cloud
        Services, from fully managed to highly customizable VPS.
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

  return (
    <div className="skills__container" id="whatIdo">
      <div className="skills__headerContainer">
        <div className="skills__headerDiv">
          <div className="skills__header">
            <div className="skills__headerText">
              <h2>What I Do</h2>
            </div>
          </div>
        </div>
        <div className="skills__divider">
          <div className="skills__dividerInternal"></div>
        </div>
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
