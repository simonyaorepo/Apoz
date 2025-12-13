
import HomeHero from "./subcomponents/HomeHero";
import FeatureTiles from "./subcomponents/FeatureTiles";
import KpiBar from "./subcomponents/KpiBar";
import ValueProps from "./subcomponents/ValueProps";
import MissionVision from "./subcomponents/MissionVision";
import ProjectPreview from "./subcomponents/ProjectPreview";
import TimelineBar from "./subcomponents/TimelineBar";
import FinalContact from "./subcomponents/FinalContact";
import {
  HERO_CONTENT,
  FEATURE_TILES,
  KPI_METRICS,
  VALUE_PROPS,
  MISSION,
  VISION,
  PROJECT_PREVIEWS,
  TIMELINE_ITEMS,
} from "./subcomponents/homeSectionData";

interface HomeSectionProps {
  onNavigate: (page: string) => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <div>
      <HomeHero
        headline={HERO_CONTENT.headline}
        rotatingNews={HERO_CONTENT.rotatingNews}
        cta1={HERO_CONTENT.cta1}
        cta2={HERO_CONTENT.cta2}
        onNavigate={onNavigate}
      />
      <FeatureTiles tiles={FEATURE_TILES} onNavigate={onNavigate} />
      <KpiBar metrics={KPI_METRICS} />
      <ValueProps propsList={VALUE_PROPS} />
      <MissionVision mission={MISSION} vision={VISION} />
      <ProjectPreview projects={PROJECT_PREVIEWS} onNavigate={onNavigate} />
      <TimelineBar items={TIMELINE_ITEMS} />
      <FinalContact onNavigate={onNavigate} />
    </div>
  );
};

export default HomeSection;
