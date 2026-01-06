import React from "react";
import SummarySection from "../../ui/SummarySection";

const SUMMARY_TEXT = `The APOZ Master Plan establishes a comprehensive framework for developing a world-class industrial and residential ecosystem in Winnie, Texas. Strategically positioned within both a Qualified Opportunity Zone (QOZ) and Foreign Trade Zone (FTZ-171), the master plan integrates multiple components to create a competitive advantage for investors and tenants.

Our International Hub serves as a cross-border trade gateway connecting Asia-Pacific manufacturers with U.S. markets and global logistics networks. The Foreign Trade Zone (FTZ-171) designation provides duty-free import/export capabilities, customs facilitation, and bonded storage solutions that reduce operational costs for international tenants.

The Qualified Opportunity Fund (QOF) structure channels private capital into the zone through special investment vehicles, offering investors capital gains tax deferral until 2026 and 100% tax-free growth on appreciation after 10 years. The Qualified Opportunity Zone (QOZ) designation provides federal tax benefits for real estate and business investments, including capital gains deferral, step-up in basis benefits, and tax-free growth for long-term holdings.

This integrated approach combines strategic location advantages, dual tax incentives (QOZ + FTZ), and comprehensive development planning to create an unmatched investment and operational environment for industrial, residential, and commercial growth.`;

const MasterPlanSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default MasterPlanSummary;
