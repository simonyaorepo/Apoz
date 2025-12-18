import React from "react";
import SummarySection from "../../ui/SummarySection";

const SUMMARY_TEXT = "The Asia Pacific Opportunity Zone (APOZ) is a strategic development integrating industrial, commercial, and residential infrastructure in Southeast Texas. APOZ is designed to serve as a comprehensive hub connecting Asian and Pacific markets with North American industry, leveraging Houston's position as a global trade gateway. Through strategic partnerships with international trade corporations and local government entities, APOZ creates a sustainable ecosystem for economic growth, housing development, and cross-continental commerce.";

const AboutSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default AboutSummary;
