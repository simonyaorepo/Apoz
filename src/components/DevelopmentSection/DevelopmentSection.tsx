import React from "react";
import DevelopmentHero from "./subcomponents/DevelopmentHero";
import DevelopmentSummary from "./subcomponents/DevelopmentSummary";
import PhasePreviews from "./subcomponents/PhasePreviews";
import Phase1Section from "./subcomponents/Phase1Section";
import Phase2Section from "./subcomponents/Phase2Section";
import Phase3Section from "./subcomponents/Phase3Section";

interface DevelopmentSectionProps {
  section?: string;
}

const DevelopmentSection: React.FC<DevelopmentSectionProps> = ({ section }) => {
  // If a specific section is requested, render only that section
  if (section === 'phase1') {
    return <Phase1Section />;
  }
  
  if (section === 'phase2') {
    return <Phase2Section />;
  }
  
  if (section === 'phase3') {
    return <Phase3Section />;
  }
  
  // Default: render full Development page
  return (
    <>
      <DevelopmentHero />
      <DevelopmentSummary />
      <PhasePreviews />
    </>
  );
};

export default DevelopmentSection;
