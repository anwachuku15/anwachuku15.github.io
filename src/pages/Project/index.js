import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { projects } from "../../components/PortfolioSection/ProjectData";

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
          height: 600,
          marginTop: 80,
        }}
      >
        <h1 style={{ fontSize: 48 }}>404</h1>
        <p style={{ fontSize: 24 }}>Page Not Found</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 80 }}>
      <h1>{project.name}</h1>
    </div>
  );
};

export default Project;