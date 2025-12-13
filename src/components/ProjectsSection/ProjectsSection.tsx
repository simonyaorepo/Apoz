import ProjectsHero from "./subcomponents/ProjectsHero";
import BandsSection from "./subcomponents/BandsSection";
import PROJECT_BANDS from "./subcomponents/projectBandsData";
import FuturePhasesSection from "./subcomponents/FuturePhasesSection";
import CTASection from "./subcomponents/CTASection";



interface ProjectsSectionProps {
  onNavigate: (page: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigate }) => {
  return (
    <>
      <ProjectsHero onNavigate={onNavigate} />
      <BandsSection bands={PROJECT_BANDS} onNavigate={onNavigate} />
      <FuturePhasesSection />
      <CTASection onNavigate={onNavigate} />
    </>
  );
};

export default ProjectsSection;
