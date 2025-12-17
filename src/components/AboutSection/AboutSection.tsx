import React from "react";
import AboutHero from "./subcomponents/AboutHero";
import AboutSummary from "./subcomponents/AboutSummary";
import SectionPreviews from "./subcomponents/SectionPreviews";
import IntroSection from "./subcomponents/IntroSection";
import MissionBlock from "./subcomponents/MissionBlock";
import VisionBlock from "./subcomponents/VisionBlock";
import CorePillars from "./subcomponents/CorePillars";
import LeadershipCard from "./subcomponents/LeadershipCard";
import CTASection from "./subcomponents/CTASection";
import MissionSection from "./subcomponents/MissionSection";
import VisionSection from "./subcomponents/VisionSection";
import ApproachSection from "./subcomponents/ApproachSection";
import PartnershipSection from "./subcomponents/PartnershipSection";
import { SectionWrapper } from "./AboutSection.styles";

interface AboutSectionProps {
  onNavigate: (page: string) => void;
  section?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, section }) => {
  // If a specific section is requested, render only that section
  if (section === 'mission') {
    return (
      <SectionWrapper>
        <MissionSection onNavigate={onNavigate} />
      </SectionWrapper>
    );
  }
  
  if (section === 'vision') {
    return (
      <SectionWrapper>
        <VisionSection onNavigate={onNavigate} />
      </SectionWrapper>
    );
  }
  
  if (section === 'approach') {
    return (
      <SectionWrapper>
        <ApproachSection onNavigate={onNavigate} />
      </SectionWrapper>
    );
  }
  
  if (section === 'partnership') {
    return (
      <SectionWrapper>
        <PartnershipSection onNavigate={onNavigate} />
      </SectionWrapper>
    );
  }
  
  // Default: render full About page
  return (
    <SectionWrapper>
      {/* HERO */}
      <AboutHero
        title="About Us"
        paragraph="The Asia Pacific Opportunity Zone (APOZ) is a strategic development integrating industrial, commercial, and residential infrastructure in Southeast Texas."
      />
      {/* SUMMARY */}
      <AboutSummary />
      {/* SECTION PREVIEWS */}
      <SectionPreviews onNavigate={onNavigate} />
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
