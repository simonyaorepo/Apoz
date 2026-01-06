import React from "react";
import ServicesHero from "./subcomponents/ServicesHero";
import ServicesSummary from "./subcomponents/ServicesSummary";
import ServicesPreviews from "./subcomponents/ServicesPreviews";
import ServicesOverviewSection from "./subcomponents/ServicesOverviewSection";
import CommunityManagementSection from "./subcomponents/CommunityManagementSection";
import IndustryZoneManagementSection from "./subcomponents/IndustryZoneManagementSection";
import ResidentialManagementSection from "./subcomponents/ResidentialManagementSection";

interface ServicesSectionProps {
  section?: string;
  onNavigate: (page: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ section, onNavigate }) => {
  // Route to specific subsections
  if (section === 'overview') {
    return <ServicesOverviewSection onNavigate={onNavigate} />;
  }
  
  if (section === 'community-management') {
    return <CommunityManagementSection onNavigate={onNavigate} />;
  }
  
  if (section === 'industry-zone-management') {
    return <IndustryZoneManagementSection onNavigate={onNavigate} />;
  }
  
  if (section === 'residential-management') {
    return <ResidentialManagementSection onNavigate={onNavigate} />;
  }
  
  // Default: render Services main page with summary and previews
  return (
    <>
      <ServicesHero />
      <ServicesSummary />
      <ServicesPreviews />
    </>
  );
};

export default ServicesSection;
