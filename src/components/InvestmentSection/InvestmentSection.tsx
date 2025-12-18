import React from "react";
import InvestmentHero from "./subcomponents/InvestmentHero";
import InvestmentSummary from "./subcomponents/InvestmentSummary";
import BenefitsSection from "./subcomponents/BenefitsSection";
import OpportunitiesSection from "./subcomponents/OpportunitiesSection";
import CTASection from "./subcomponents/CTASection";

const InvestmentSection: React.FC = () => {
  return (
    <>
      <InvestmentHero />
      <InvestmentSummary />
      <BenefitsSection />
      <OpportunitiesSection />
      <CTASection />
    </>
  );
};

export default InvestmentSection;
