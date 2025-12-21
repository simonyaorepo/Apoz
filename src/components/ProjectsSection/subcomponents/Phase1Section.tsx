import React from "react";
import OverviewSection from "./OverviewSection";
import { PHASE_ONE_DATA } from "./projectsSectionData";

const Phase1Section: React.FC = () => {
  return (
    <OverviewSection
      title="Phase 1"
      overlayTitle="436 Acres"
      overlaySubtitle="Industrial Park"
      backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      breadcrumbLabel="Phase 1"
      content={[
        `Phase One of APOZ consists of ${PHASE_ONE_DATA.acreage} acres and is the cornerstone of our transformative vision—positioning APOZ as a world-class industrial park with significant residential integration.`,
        `${PHASE_ONE_DATA.stageOne.description} This initial phase includes ${PHASE_ONE_DATA.stageOne.details.squareFootage} of industrial space across ${PHASE_ONE_DATA.stageOne.details.acreage} acres, establishing the framework for larger development.`,
        `${PHASE_ONE_DATA.stageTwo.description} Full build-out will feature ${PHASE_ONE_DATA.stageTwo.details.industrial.squareFootage} of industrial space, ${PHASE_ONE_DATA.stageTwo.details.commercial.squareFootage} of commercial facilities, and ${PHASE_ONE_DATA.stageTwo.details.residential.units} residential units across the development.`,
        `Our projected annual income at full buildout is ${PHASE_ONE_DATA.projectedIncome}, combining industrial lease revenue of ${PHASE_ONE_DATA.revenueStreams.industrial}, commercial income of ${PHASE_ONE_DATA.revenueStreams.commercial}, and residential revenue of ${PHASE_ONE_DATA.revenueStreams.residential}.`
      ]}
      quote="Phase One establishes APOZ as the premier FTZ+QOZ dual-status business park, creating unprecedented economic opportunity in Southeast Texas."
    />
  );
};

export default Phase1Section;
