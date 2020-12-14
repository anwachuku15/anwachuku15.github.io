import React, { useEffect, useState } from "react";
import { projects } from "../../components/PortfolioSection/ProjectData";
import Colors from "../../constants/Colors";
import { ProjectContainer, ProjectWrapper } from "./ProjectElements";

const Project = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    let currentProject;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].linkTo === window.location.pathname) {
        currentProject = projects[i];
        break;
      }
    }
    if (currentProject === undefined) {
      setError(true);
    } else {
      setProject(currentProject);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div style={{ marginTop: 80 }}>
        <h1>LOADING...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: 570,
          marginTop: 80,
        }}
      >
        <h1 style={{ fontSize: 48, color: Colors.primaryRed }}>404</h1>
        <p style={{ fontSize: 24, color: "#101522" }}>Page Not Found</p>
        <img
          src={require("../../assets/images/svgs/lost.svg")}
          alt="lost"
          style={{ objectFit: "contain", width: 400 }}
        />
      </div>
    );
  }

  return (
    <>
      <ProjectContainer>
        <ProjectWrapper>
          <h1>{project.name}</h1>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Project;
