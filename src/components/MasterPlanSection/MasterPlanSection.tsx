import React from "react";
import MasterPlanHero from "./subcomponents/MasterPlanHero";
import MasterPlanSummary from "./subcomponents/MasterPlanSummary";
import MasterPlanPreviews from "./subcomponents/MasterPlanPreviews";
import InternationalHubSection from "./subcomponents/InternationalHubSection";
import FTZZoneSection from "./subcomponents/FTZZoneSection";
import QOFZoneSection from "./subcomponents/QOFZoneSection";
import QOZZoneSection from "./subcomponents/QOZZoneSection";
import IndustryZoneSection from "./subcomponents/IndustryZoneSection";
import AffordableLivingZoneSection from "./subcomponents/AffordableLivingZoneSection";

interface MasterPlanSectionProps {
  section?: string;
  onNavigate: (page: string) => void;
}

const MasterPlanSection: React.FC<MasterPlanSectionProps> = ({ section, onNavigate }) => {
  // Route to specific subsections
  if (section === 'international-hub') {
    return <InternationalHubSection onNavigate={onNavigate} />;
  }
  
  if (section === 'ftz-zone') {
    return <FTZZoneSection onNavigate={onNavigate} />;
  }
  
  if (section === 'qof-zone') {
    return <QOFZoneSection onNavigate={onNavigate} />;
  }
  
  if (section === 'qoz-zone') {
    return <QOZZoneSection onNavigate={onNavigate} />;
  }
  
  if (section === 'industry-zone') {
    return <IndustryZoneSection onNavigate={onNavigate} />;
  }
  
  if (section === 'affordable-living-zone') {
    return <AffordableLivingZoneSection onNavigate={onNavigate} />;
  }
  
  // Default: render Master Plan main page with summary and previews
  return (
    <>
      <MasterPlanHero />
      <MasterPlanSummary />
      <MasterPlanPreviews />
    </>
  );
};

export default MasterPlanSection;
