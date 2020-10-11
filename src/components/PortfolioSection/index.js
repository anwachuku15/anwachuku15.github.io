import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import { wrap } from "@popmotion/popcorn";

import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  // PortfolioP,
  ModalButtonsContainer,
  ViewSiteButtonsContainer,
  ViewSiteButtonWrapper,
  ViewSiteButton,
  GoToSiteIcon,
  ExitButton,
  // SelectedImageContainer,
  SelectedCard,
  CarouselWrapper,
  CarouselWindow,
  Carousel,
  SelectedImage,
  SelectedTextContent,
  SelectedH2,
  SelectedP,
  Overlay,
  NextButton,
  PrevButton,
} from "./PortfolioElements";
import "./PortfolioSection.css";
import Button from "../Button";
import { projects } from "./ProjectData";
import LaunchIcon from "@material-ui/icons/Launch";
import CloseIcon from "@material-ui/icons/Close";
import GitHubIcon from "@material-ui/icons/GitHub";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";

const PortfolioSection = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [images, setImages] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const selectProject = (id) => {
    setSelectedId(id);
    setImages(projects[id - 1].images);
  };
  const carousel = useRef();
  // transition 0.7s
  const slideControl = (n) => {
    // carousel.current.style.transition = 0.7;
    carousel.current.classList.add(n < 0 ? "prevSlide" : "nextSlide");
    setTimeout(() => {
      if (imageIndex === 2 && n === 1) {
        setImageIndex(0);
      } else if (imageIndex === 0 && n === -1) {
        setImageIndex(2);
      } else {
        setImageIndex(imageIndex + n);
      }
      carousel.current.classList.remove(n < 0 ? "prevSlide" : "nextSlide");
    }, 700);
  };

  const swipeControl = (n) => {
    carousel.current.classList.add(n < 0 ? "swipePrev" : "swipeNext");
    setTimeout(() => {
      if (imageIndex === 2 && n === 1) {
        setImageIndex(0);
      } else if (imageIndex === 0 && n === -1) {
        setImageIndex(2);
      } else {
        setImageIndex(imageIndex + n);
      }
      carousel.current.classList.remove(n < 0 ? "swipePrev" : "swipeNext");
    }, 200);
  };

  const closeModal = () => {
    setSelectedId(null);
    setImages(null);
    setImageIndex(0);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  // snap points
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Projects</PortfolioH1>
      <AnimateSharedLayout type="crossfade">
        <PortfolioWrapper>
          {projects.map((project) => (
            <PortfolioCard
              layoutId={project.id}
              onClick={() => selectProject(project.id)}
            >
              <PortfolioIcon src={project.images[0]} />
              <PortfolioH2>{project.name}</PortfolioH2>
              <Button
                title="Learn More"
                openModal={() => selectProject(project.id)}
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
                onClick={closeModal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
              />

              <SelectedCard layoutId={selectedId}>
                <CarouselWrapper>
                  <CarouselWindow>
                    <Carousel
                      ref={carousel}
                      // transition={{
                      //   x: { type: "spring", stiffness: 300, damping: 200 },
                      // }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        console.log(swipe);
                        if (
                          swipe < -swipeConfidenceThreshold &&
                          carousel.current.style.transform <
                            "translate3d(-40%, 0px, 0px)"
                        ) {
                          swipeControl(1);
                        } else if (
                          swipe > swipeConfidenceThreshold &&
                          carousel.current.style.transform >
                            "translate3d(40%, 0px, 0px)"
                        ) {
                          swipeControl(-1);
                        }
                      }}
                    >
                      <SelectedImage
                        src={images[imageIndex === 0 ? 2 : imageIndex - 1]}
                      />
                      <SelectedImage src={images[imageIndex]} />
                      <SelectedImage
                        src={images[imageIndex === 2 ? 0 : imageIndex + 1]}
                      />
                    </Carousel>
                  </CarouselWindow>
                </CarouselWrapper>
                <PrevButton onClick={() => slideControl(-1)}>
                  <ArrowBackIosRounded />
                </PrevButton>
                <NextButton onClick={() => slideControl(1)}>
                  <ArrowForwardIosRounded />
                </NextButton>
                <SelectedTextContent>
                  <SelectedH2>{projects[selectedId - 1].name}</SelectedH2>
                  <SelectedP>{projects[selectedId - 1].description}</SelectedP>
                </SelectedTextContent>
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
                  <ExitButton onClick={closeModal}>
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
