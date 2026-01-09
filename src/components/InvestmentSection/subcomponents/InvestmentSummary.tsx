import React from "react";
import SummarySection from "../../ui/SummarySection";
import { INVESTMENT_OVERVIEW } from "./investmentSectionData";

const SUMMARY_TEXT = `${INVESTMENT_OVERVIEW.description} APOZ is strategically positioned in federally designated Qualified Opportunity Zone and Foreign-Trade Zone frameworks, offering investors dual tax and duty advantages. The development accommodates both equity and debt investors across multiple phases, with flexible structures designed to maximize returns through tax benefits and operational savings. Our phased approach provides multiple entry points for sophisticated investors, with exit strategies ranging from REIT conversion to institutional portfolio sales.`;

const InvestmentSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default InvestmentSummary;
