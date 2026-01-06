import React from "react";
import SummarySection from "../../ui/SummarySection";
import { DEVELOPMENT_OVERVIEW_DATA } from "../developmentSectionData";

const SUMMARY_TEXT = `${DEVELOPMENT_OVERVIEW_DATA.vision.description}

The development features ${DEVELOPMENT_OVERVIEW_DATA.vision.advantages[0].title} providing ${DEVELOPMENT_OVERVIEW_DATA.vision.advantages[0].description.toLowerCase()}, ${DEVELOPMENT_OVERVIEW_DATA.vision.advantages[1].title} enabling ${DEVELOPMENT_OVERVIEW_DATA.vision.advantages[1].description.toLowerCase()}, and a ${DEVELOPMENT_OVERVIEW_DATA.vision.advantages[2].title.toLowerCase()} ${DEVELOPMENT_OVERVIEW_DATA.vision.advantages[2].description.toLowerCase()}.

Our development unfolds across three major phases: ${DEVELOPMENT_OVERVIEW_DATA.phases[0].phase} focuses on ${DEVELOPMENT_OVERVIEW_DATA.phases[0].scope} (${DEVELOPMENT_OVERVIEW_DATA.phases[0].timeline}), ${DEVELOPMENT_OVERVIEW_DATA.phases[1].phase} will deliver ${DEVELOPMENT_OVERVIEW_DATA.phases[1].scope}, and ${DEVELOPMENT_OVERVIEW_DATA.phases[2].phase} establishes ${DEVELOPMENT_OVERVIEW_DATA.phases[2].scope}.

Infrastructure priorities include ${DEVELOPMENT_OVERVIEW_DATA.infrastructure.priorities.map(p => p.category.toLowerCase()).join(', ')}, ensuring comprehensive support for industrial and residential growth. Our investment strategy combines ${DEVELOPMENT_OVERVIEW_DATA.investment.strategies.map(s => s.title).join(', ')}, creating multiple pathways for capital deployment and value realization.`;

const DevelopmentSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default DevelopmentSummary;
