import React from "react";
import SummarySection from "../../ui/SummarySection";

const SUMMARY_TEXT = `The APOZ Master Plan establishes a comprehensive framework for developing a world-class industrial and residential ecosystem in Winnie, Texas. Strategically positioned within both a Qualified Opportunity Zone and Foreign Trade Zone (FTZ-171), the master plan integrates multiple components to create competitive advantages for investors and tenants. Our International Hub serves as a cross-border trade gateway connecting Asia-Pacific manufacturers with U.S. markets, while dual tax incentives and comprehensive infrastructure planning create an unmatched environment for industrial, residential, and commercial growth.`;

const MasterPlanSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default MasterPlanSummary;
