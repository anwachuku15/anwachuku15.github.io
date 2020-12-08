import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import { wrap } from "@popmotion/popcorn";
import ScrollAnimation from "react-animate-on-scroll";

import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioDivider,
  PortfolioDividerInternal,
  PortfolioP,
  MobileCard,
  MobileIcon,
  ModalButtonsContainer,
  ViewSiteButtonsContainer,
  ViewSiteButtonWrapper,
  ViewSiteButton,
  GoToSiteIcon,
  ExitButton,
  // SelectedImageContainer,
  SelectedCard,
  MobileSelectedCard,
  CarouselWrapper,
  CarouselWindow,
  // Widget,
  Carousel,
  CarouselControls,
  MobileCarouselWrapper,
  MobileCarouselWindow,
  MobileCarousel,
  MobileCarouselControls,
  MobileSelectedImage,
  SelectedImage,
  SelectedTextContent,
  SelectedH2,
  SelectedH3,
  SelectedP,
  Overlay,
  NextButton,
  PrevButton,
} from "./PortfolioElements";
import "./PortfolioSection.css";
import Button from "../Button";
import { projects, darkscreen, login } from "./ProjectData";
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

  const closeModal = () => {
    setSelectedId(null);
    setImages(null);
    setImageIndex(0);
  };

  // const swipeControl = (n) => {
  //   carousel.current.classList.add(n < 0 ? "swipePrev" : "swipeNext");
  //   setTimeout(() => {
  //     if (imageIndex === 2 && n === 1) {
  //       setImageIndex(0);
  //     } else if (imageIndex === 0 && n === -1) {
  //       setImageIndex(2);
  //     } else {
  //       setImageIndex(imageIndex + n);
  //     }
  //     carousel.current.classList.remove(n < 0 ? "swipePrev" : "swipeNext");
  //   }, 200);
  // };

  // const swipeConfidenceThreshold = 10000;
  // const swipePower = (offset, velocity) => {
  //   return Math.abs(offset) * velocity;
  // };
  // snap points
  return (
    <PortfolioContainer id="portfolio">
      <ScrollAnimation animateIn="slideInRight" duration={1} animateOnce={true}>
        <PortfolioH1>Portfolio</PortfolioH1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="slideInLeft"
        duration={1}
        // delay={1000}
        animateOnce
        style={{ width: 70 }}
      >
        <PortfolioDivider>
          <PortfolioDividerInternal />
        </PortfolioDivider>
      </ScrollAnimation>
      <AnimateSharedLayout type="crossfade">
        <PortfolioWrapper>
          {projects.map((project, index) => {
            let delay;
            if (index === 0) delay = 0;
            else if (index === 1) delay = 100;
            else if (index === 2) delay = 200;
            else if (index === 3) delay = 300;
            else if (index === 4) delay = 400;
            else if (index === 5) delay = 500;

            return (
              <ScrollAnimation
                offset={0}
                animateOnce={true}
                animateIn={"fadeInUp"}
                duration={1}
                delay={delay}
                key={index}
              >
                {project.name !== "LNB" ? (
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
                ) : (
                  <>
                    <MobileCard
                      layoutId={project.id}
                      onClick={() => selectProject(project.id)}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <MobileIcon src={project.images[0]} />
                        <MobileIcon src={login} />
                        <MobileIcon src={project.images[1]} />
                        <MobileIcon src={project.images[2]} />
                      </div>
                      <PortfolioH2>{project.name}</PortfolioH2>
                      <Button
                        title="Learn More"
                        openModal={() => selectProject(project.id)}
                        lightBg={true}
                      />
                    </MobileCard>
                  </>
                )}
              </ScrollAnimation>
            );
          })}
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
              {selectedId !== 2 ? (
                <SelectedCard layoutId={selectedId}>
                  <CarouselWrapper>
                    {/* <Widget src={projects[selectedId - 1].url} /> */}
                    <CarouselWindow>
                      <Carousel ref={carousel}>
                        <SelectedImage
                          src={images[imageIndex === 0 ? 2 : imageIndex - 1]}
                        />
                        <SelectedImage src={images[imageIndex]} />
                        <SelectedImage
                          src={images[imageIndex === 2 ? 0 : imageIndex + 1]}
                        />
                      </Carousel>
                      <CarouselControls>
                        <PrevButton onClick={() => slideControl(-1)}>
                          <ArrowBackIosRounded />
                        </PrevButton>
                        <NextButton onClick={() => slideControl(1)}>
                          <ArrowForwardIosRounded />
                        </NextButton>
                      </CarouselControls>
                    </CarouselWindow>
                  </CarouselWrapper>

                  <SelectedTextContent>
                    <SelectedH2>{projects[selectedId - 1].name}</SelectedH2>
                    <SelectedH3>({projects[selectedId - 1].stack})</SelectedH3>
                    <SelectedP>
                      {projects[selectedId - 1].description}
                    </SelectedP>
                  </SelectedTextContent>
                  <ModalButtonsContainer>
                    <ViewSiteButtonsContainer>
                      <ViewSiteButtonWrapper
                        href={projects[selectedId - 1].url}
                        target="_blank"
                      >
                        <ViewSiteButton>View Site</ViewSiteButton>
                        <GoToSiteIcon>
                          <LaunchIcon fontSize="small" />
                        </GoToSiteIcon>
                      </ViewSiteButtonWrapper>
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
              ) : (
                <MobileSelectedCard layoutId={selectedId}>
                  <MobileCarouselWrapper>
                    {/* <Widget src={projects[selectedId - 1].url} /> */}
                    <MobileCarouselWindow>
                      <MobileCarousel ref={carousel}>
                        <MobileSelectedImage
                          src={images[imageIndex === 0 ? 2 : imageIndex - 1]}
                        />
                        <MobileSelectedImage src={images[imageIndex]} />
                        <MobileSelectedImage
                          src={images[imageIndex === 2 ? 0 : imageIndex + 1]}
                        />
                      </MobileCarousel>
                      <MobileCarouselControls>
                        <PrevButton onClick={() => slideControl(-1)}>
                          <ArrowBackIosRounded />
                        </PrevButton>
                        <NextButton onClick={() => slideControl(1)}>
                          <ArrowForwardIosRounded />
                        </NextButton>
                      </MobileCarouselControls>
                    </MobileCarouselWindow>
                  </MobileCarouselWrapper>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignSelf: "flex-end",
                    }}
                  >
                    <SelectedTextContent>
                      <SelectedH2>{projects[selectedId - 1].name}</SelectedH2>
                      <SelectedH3>
                        ({projects[selectedId - 1].stack})
                      </SelectedH3>
                      <SelectedP>
                        {projects[selectedId - 1].description}
                      </SelectedP>
                      <SelectedP>
                        {projects[selectedId - 1].description2}
                      </SelectedP>
                    </SelectedTextContent>
                    <ModalButtonsContainer>
                      <ViewSiteButtonsContainer>
                        {selectedId !== 2 && (
                          <ViewSiteButtonWrapper
                            href={projects[selectedId - 1].url}
                            target="_blank"
                          >
                            <ViewSiteButton>View Demo</ViewSiteButton>
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
                  </div>
                </MobileSelectedCard>
              )}
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
