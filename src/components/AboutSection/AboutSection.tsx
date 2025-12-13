import React from "react";
import AboutHero from "./subcomponents/AboutHero";
import IntroSection from "./subcomponents/IntroSection";
import MissionBlock from "./subcomponents/MissionBlock";
import VisionBlock from "./subcomponents/VisionBlock";
import CorePillars from "./subcomponents/CorePillars";
import LeadershipCard from "./subcomponents/LeadershipCard";
import CTASection from "./subcomponents/CTASection";
import { SectionWrapper } from "./AboutSection.styles";

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  // ...existing code...
  return (
    <SectionWrapper>
      {/* HERO */}
      <AboutHero
        title="About Asia Pacific Opportunity Zone"
        paragraph="The Asia Pacific Opportunity Zone (APOZ) is a strategic development integrating industrial, commercial, and residential infrastructure in Southeast Texas."
      />
      <IntroSection />
      {/* MISSION */}
      <MissionBlock />
      {/* VISION */}
      <VisionBlock />
      {/* CORE PILLARS */}
      <CorePillars />
      {/* LEADERSHIP */}
      <LeadershipCard />
      {/* CTA */}
      <CTASection onNavigate={onNavigate} />
    </SectionWrapper>
  );
};

export default AboutSection;
