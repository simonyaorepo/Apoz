import React from "react";
import SummarySection from "../../ui/SummarySection";
import { INVESTMENT_OVERVIEW } from "./investmentSectionData";

const SUMMARY_TEXT = `${INVESTMENT_OVERVIEW.description}

APOZ is strategically positioned in federally designated Qualified Opportunity Zone (QOZ) and Foreign-Trade Zone (FTZ) frameworks, offering investors dual tax and duty advantages. The development accommodates both equity and debt investors across multiple phases, with flexible structures designed to maximize returns through QOZ tax benefits and FTZ operational savings.

Our phased development approach includes ${INVESTMENT_OVERVIEW.investmentStrategy.map(p => p.scope).join(', ')} with total capital requirements spanning ${INVESTMENT_OVERVIEW.investmentStrategy.map(p => p.capitalRequired).join(' to ')}. The recommended capital structure leverages ${INVESTMENT_OVERVIEW.capitalStructure.map(c => c.layer).join(', ')}, providing multiple entry points for sophisticated investors.

Target returns include base case IRR of ${INVESTMENT_OVERVIEW.investorBenefits.irrPotential.baseCase}, with QOZ tax advantages delivering an additional ${INVESTMENT_OVERVIEW.investorBenefits.irrPotential.withQOZ} uplift. Exit strategies range from REIT conversion to institutional portfolio sales, ensuring liquidity for long-term investors.`;

const InvestmentSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default InvestmentSummary;
