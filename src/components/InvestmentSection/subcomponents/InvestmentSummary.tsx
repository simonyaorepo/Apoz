import React from "react";
import SummarySection from "../../ui/SummarySection";
import { INVESTMENT_OVERVIEW } from "./investmentSectionData";

const SUMMARY_TEXT = `${INVESTMENT_OVERVIEW.description}

${INVESTMENT_OVERVIEW.highlights.join(' ')}

Our investment strategy unfolds across three phases: ${INVESTMENT_OVERVIEW.investmentStrategy.map(p => `${p.phase} (${p.scope}, ${p.capitalRequired})`).join(', ')}.

The recommended capital structure includes ${INVESTMENT_OVERVIEW.capitalStructure.map(c => c.layer).join(', ')}, providing multiple pathways for investor participation. With base case IRR of ${INVESTMENT_OVERVIEW.investorBenefits.irrPotential.baseCase} and QOZ tax advantages providing ${INVESTMENT_OVERVIEW.investorBenefits.irrPotential.withQOZ} additional uplift, APOZ offers compelling returns.

Exit opportunities include ${INVESTMENT_OVERVIEW.exitStrategy.join(' ')}`;

const InvestmentSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default InvestmentSummary;
