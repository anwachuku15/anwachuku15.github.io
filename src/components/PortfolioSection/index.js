import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
  ModalButtonsContainer,
  ViewSiteButtonsContainer,
  ViewSiteButtonWrapper,
  ViewSiteButton,
  GoToSiteIcon,
  ExitButton,
  SelectedIconContainer,
  SelectedCard,
  SelectedIcon,
  SelectedH2,
  SelectedP,
  Overlay,
} from "./PortfolioElements";
import Button from "../Button";
import { projects } from "./ProjectData";
import LaunchIcon from "@material-ui/icons/Launch";
import CloseIcon from "@material-ui/icons/Close";
import GitHubIcon from "@material-ui/icons/GitHub";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const PortfolioSection = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Projects</PortfolioH1>
      <AnimateSharedLayout type="crossfade">
        <PortfolioWrapper>
          {projects.map((project) => (
            <PortfolioCard
              layoutId={project.id}
              onClick={() => handleClick(project.id)}
            >
              <PortfolioIcon src={project.img} />
              <PortfolioH2>{project.name}</PortfolioH2>
              <Button
                title="Learn More"
                openModal={() => handleClick(project.id)}
                lightBg={true}
              />

              {/* <PortfolioP>{project.description}</PortfolioP> */}
            </PortfolioCard>
          ))}
        </PortfolioWrapper>
        <AnimatePresence>
          {selectedId && (
            <>
              <Overlay
                onClick={() => setSelectedId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
              />

              <SelectedCard
                layoutId={selectedId}
                // initial={{ maxHeight: 560, width: 700 }}
                // animate={{maxHeight: 340, }}
              >
                <SelectedIcon src={projects[selectedId - 1].img} />
                <SelectedH2>{projects[selectedId - 1].name}</SelectedH2>
                <SelectedP>{projects[selectedId - 1].description}</SelectedP>
                <ModalButtonsContainer>
                  <ViewSiteButtonsContainer>
                    {projects[selectedId - 1].name !== "LNB" && (
                      <ViewSiteButtonWrapper
                        href={projects[selectedId - 1].url}
                        target="_blank"
                      >
                        <ViewSiteButton>View Site</ViewSiteButton>
                        <GoToSiteIcon>
                          <LaunchIcon fontSize="small" />
                        </GoToSiteIcon>
                      </ViewSiteButtonWrapper>
                    )}
                    <ViewSiteButtonWrapper
                      href={projects[selectedId - 1].github}
                      target="_blank"
                    >
                      <ViewSiteButton>Source Code</ViewSiteButton>
                      <GoToSiteIcon>
                        <GitHubIcon fontSize="small" />
                      </GoToSiteIcon>
                    </ViewSiteButtonWrapper>
                  </ViewSiteButtonsContainer>
                  <ExitButton onClick={() => setSelectedId(null)}>
                    <CloseIcon fontSize="large" />
                  </ExitButton>
                </ModalButtonsContainer>
              </SelectedCard>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
