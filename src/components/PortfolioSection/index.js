import React from "react";
import { Link } from "react-router-dom";
import Icon1 from "../../assets/images/responsivewebapp.svg";
import Icon2 from "../../assets/images/mobileinterface.svg";
import Icon3 from "../../assets/images/database.svg";

import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
} from "./PortfolioElements";

import { projects } from "./ProjectData";

const PortfolioSection = () => {
  // FRAMER ANIMATION
  // const [selectedId, setSelectedId] = useState(null)

  // <AnimateSharedLayout type="crossfade">
  //   {items.map(item => (
  //     <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
  //       <motion.h5>{item.subtitle}</motion.h5>
  //       <motion.h2>{item.title}</motion.h2>
  //     </motion.div>
  //   ))}

  //   <AnimatePresence>
  //     {selectedId && (
  //       <motion.div layoutId={selectedIdentifier}>
  //         <motion.h5>{item.subtitle}</motion.h5>
  //         <motion.h2>{item.title}</motion.h2>
  //         <motion.button onClick={() => setSelectedId(null)} />
  //       </motion.div>
  //     )}
  //   </AnimatePresence>
  // </AnimateSharedLayout>

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>Projects</PortfolioH1>
      <PortfolioWrapper>
        <Link to={`${projects[0].linkTo}`} style={{ textDecoration: "none" }}>
          <PortfolioCard>
            <PortfolioIcon src={Icon1} />
            <PortfolioH2>{projects[0].name}</PortfolioH2>
            <PortfolioP>{projects[0].description}</PortfolioP>
          </PortfolioCard>
        </Link>
        <Link to={`${projects[1].linkTo}`} style={{ textDecoration: "none" }}>
          <PortfolioCard>
            <PortfolioIcon src={Icon2} />
            <PortfolioH2>{projects[1].name}</PortfolioH2>
            <PortfolioP>{projects[1].description}</PortfolioP>
          </PortfolioCard>
        </Link>
        <Link to={`${projects[2].linkTo}`} style={{ textDecoration: "none" }}>
          <PortfolioCard>
            <PortfolioIcon src={Icon2} />
            <PortfolioH2>{projects[2].name}</PortfolioH2>
            <PortfolioP>{projects[2].description}</PortfolioP>
          </PortfolioCard>
        </Link>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
