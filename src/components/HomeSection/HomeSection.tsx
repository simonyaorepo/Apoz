
import HomeHero from "./subcomponents/HomeHero";
import AboutIntro from "./subcomponents/AboutIntro";
import HomePreviews from "./subcomponents/HomePreviews";
import OverviewSection from "./subcomponents/OverviewSection";
import WhoWeAreSection from "./subcomponents/WhoWeAreSection";
import HomeVisionSection from "./subcomponents/HomeVisionSection";
import HomeMissionSection from "./subcomponents/HomeMissionSection";
import ManagementSection from "./subcomponents/ManagementSection";
import NewsPreview from "./subcomponents/NewsPreview";

interface HomeSectionProps {
  onNavigate: (page: string) => void;
  section?: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate, section }) => {
  // Support for subsections: overview, who-are-we, vision, mission, management
  
  // Render specific subsection if section param is provided
  if (section === 'overview') return <OverviewSection onNavigate={onNavigate} />;
  if (section === 'who-are-we') return <WhoWeAreSection onNavigate={onNavigate} />;
  if (section === 'vision') return <HomeVisionSection onNavigate={onNavigate} />;
  if (section === 'mission') return <HomeMissionSection onNavigate={onNavigate} />;
  if (section === 'management') return <ManagementSection onNavigate={onNavigate} />;
  
  // Default home page with previews
  return (
    <div>
      <HomeHero />
      <AboutIntro />
      <HomePreviews onNavigate={onNavigate} />
      <NewsPreview />
    </div>
  );
};

export default HomeSection;
