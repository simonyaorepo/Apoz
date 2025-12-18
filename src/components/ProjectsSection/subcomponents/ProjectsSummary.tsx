import React from "react";
import SummarySection from "../../ui/SummarySection";

const SUMMARY_TEXT = "At APOZ (Asia Pacific Opportunity Zone), we are turning visionary planning into tangible progress. Our master-planned development spans residential, commercial, and industrial zones—all designed to foster sustainable growth, community well-being, and long-term economic opportunity. From infrastructure to innovation hubs, every project within APOZ is purpose-driven, strategically located, and built to benefit both the local and global economy.";

const ProjectsSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default ProjectsSummary;
