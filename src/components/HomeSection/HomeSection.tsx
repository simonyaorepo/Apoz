
import HomeHero from "./subcomponents/HomeHero";
import AboutIntro from "./subcomponents/AboutIntro";
import WhoWeAre from "./subcomponents/WhoWeAre";
import NewsPreview from "./subcomponents/NewsPreview";

interface HomeSectionProps {
  onNavigate: (page: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <div>
      <HomeHero />
      <AboutIntro />
      <WhoWeAre onNavigate={onNavigate} />
      <NewsPreview />
    </div>
  );
};

export default HomeSection;
