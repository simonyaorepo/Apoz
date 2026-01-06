import React from "react";
import InvestmentHero from "./subcomponents/InvestmentHero";
import InvestmentSummary from "./subcomponents/InvestmentSummary";
import InvestmentPreviews from "./subcomponents/InvestmentPreviews";
import InvestmentOverviewSection from "./subcomponents/InvestmentOverviewSection";
import InfrastructureSection from "./subcomponents/InfrastructureSection";
import IndustryZoneInvestmentSection from "./subcomponents/IndustryZoneInvestmentSection";
import ResidentialZoneInvestmentSection from "./subcomponents/ResidentialZoneInvestmentSection";

interface InvestmentSectionProps {
  section?: string;
  onNavigate: (page: string) => void;
}

const InvestmentSection: React.FC<InvestmentSectionProps> = ({ section, onNavigate }) => {
  // Route to specific subsections
  if (section === 'overview') {
    return <InvestmentOverviewSection onNavigate={onNavigate} />;
  }
  
  if (section === 'infrastructure') {
    return <InfrastructureSection onNavigate={onNavigate} />;
  }
  
  if (section === 'industry-zone') {
    return <IndustryZoneInvestmentSection onNavigate={onNavigate} />;
  }
  
  if (section === 'residential-zone') {
    return <ResidentialZoneInvestmentSection onNavigate={onNavigate} />;
  }
  
  // Default: render Investment main page with summary and previews
  return (
    <>
      <InvestmentHero />
      <InvestmentSummary />
      <InvestmentPreviews />
    </>
  );
};

export default InvestmentSection;
