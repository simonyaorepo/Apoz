import React from "react";
import SummarySection from "../../ui/SummarySection";
import { DEVELOPMENT_OVERVIEW_DATA } from "../developmentSectionData";

const SUMMARY_TEXT = `${DEVELOPMENT_OVERVIEW_DATA.vision.description} The development features strategic infrastructure, integrated industrial facilities, and comprehensive master planning that supports both manufacturing operations and workforce housing. Our phased approach ensures sustainable growth while providing multiple investment pathways for capital deployment and value realization.`;

const DevelopmentSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default DevelopmentSummary;
