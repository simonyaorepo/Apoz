import React from "react";
import SummarySection from "../../ui/SummarySection";

const SUMMARY_TEXT = "APOZ presents unique investment opportunities in one of the fastest-growing regions in Southeast Texas. Our integrated development approach combines industrial, commercial, and residential infrastructure to create long-term value for investors and stakeholders.";

const InvestmentSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default InvestmentSummary;
