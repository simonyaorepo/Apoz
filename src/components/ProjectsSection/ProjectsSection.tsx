import React from "react";
import ProjectsHero from "./subcomponents/ProjectsHero";
import ProjectsSummary from "./subcomponents/ProjectsSummary";
import ProjectPreviews from "./subcomponents/ProjectPreviews";
import Phase1Section from "./subcomponents/Phase1Section";
import Phase2Section from "./subcomponents/Phase2Section";
import Phase3Section from "./subcomponents/Phase3Section";

interface ProjectsSectionProps {
  section?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ section }) => {
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
