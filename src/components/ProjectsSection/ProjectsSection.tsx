import React from "react";
import ProjectsHero from "./subcomponents/ProjectsHero";
import ProjectsSummary from "./subcomponents/ProjectsSummary";
import ProjectPreviews from "./subcomponents/ProjectPreviews";
import Phase1Section from "./subcomponents/Phase1Section";
import ResidentialSection from "./subcomponents/ResidentialSection";
import CommercialSection from "./subcomponents/CommercialSection";
import IndustrialSection from "./subcomponents/IndustrialSection";
import FutureSection from "./subcomponents/FutureSection";

interface ProjectsSectionProps {
  section?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ section }) => {
  // If a specific section is requested, render only that section
  if (section === 'phase1') {
    return <Phase1Section />;
  }
  
  if (section === 'residential') {
    return <ResidentialSection />;
  }
  
  if (section === 'commercial') {
    return <CommercialSection />;
  }
  
  if (section === 'industrial') {
    return <IndustrialSection />;
  }
  
  if (section === 'future') {
    return <FutureSection />;
  }
  
  // Default: render full Projects page
  return (
    <>
      <ProjectsHero />
      <ProjectsSummary />
      <ProjectPreviews />
    </>
  );
};

export default ProjectsSection;
