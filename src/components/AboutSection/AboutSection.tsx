import React from "react";
import AboutHero from "./subcomponents/AboutHero";
import AboutSummary from "./subcomponents/AboutSummary";
import AboutVideo from "./subcomponents/AboutVideo";
import AboutPreviews from "./subcomponents/AboutPreviews";
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
      <AboutHero />
      {/* SUMMARY */}
      <AboutSummary />
      {/* VIDEO */}
      <AboutVideo />
      {/* SECTION PREVIEWS */}
      <AboutPreviews onNavigate={onNavigate} />
    </SectionWrapper>
  );
};

export default AboutSection;
