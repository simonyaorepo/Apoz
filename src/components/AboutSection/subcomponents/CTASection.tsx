
import React from "react";
import { useTheme } from "styled-components";
import { Section, SectionContainer, SectionTitle, SectionText, CTAButtonRow, CTAButton } from "../AboutSection.styles";

interface CTASectionProps {
  onNavigate: (page: string) => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  const theme = useTheme();
  return (
    <Section bg={theme.colors.white} pad={theme.spacing.xxxl}>
      <SectionContainer center>
        <SectionTitle color={theme.colors.darkBlue}>Ready to Learn More?</SectionTitle>
        <SectionText color={theme.colors.mutedForeground} style={{ maxWidth: 600, margin: '0 auto' }}>
          Explore our development projects or get in touch with our team
        </SectionText>
        <CTAButtonRow>
          <CTAButton className="primary" onClick={() => onNavigate("projects")}>View Projects</CTAButton>
          <CTAButton className="secondary" onClick={() => onNavigate("contact")}>Contact Us</CTAButton>
        </CTAButtonRow>
      </SectionContainer>
    </Section>
  );
};

export default CTASection;
