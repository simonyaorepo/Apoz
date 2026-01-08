import React from "react";
import SummaryBlock from "./SummaryBlock";
import QuoteSection from "./QuoteSection";
import GoldDivider from "../../ui/GoldDivider";
import GreyDivider from "../../ui/GreyDivider";
import styled from "styled-components";
import {
  PhaseSection,
  PhaseContentBlock,
  PhaseImageWrapper,
  PhaseImage,
  PhaseTextContent,
  PhaseTitle,
  PhaseParagraph
} from "./SharedStyles";
import { PHASE_1_DATA } from "../developmentSectionData";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 550px;
  height: 60vh;
  max-height: 750px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.darkBlue};
  
  @media (max-width: 1024px) {
    min-height: 500px;
    height: 55vh;
  }
  
  @media (max-width: 768px) {
    min-height: 450px;
    height: 50vh;
  }
  
  @media (max-width: 480px) {
    min-height: 400px;
    height: 48vh;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  z-index: 1;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const HeroContentBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxxl};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
  }
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  }
  
  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
`;

const HeroBreadcrumb = styled.nav`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  letter-spacing: 0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  opacity: 0.9;
  
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.goldAccent};
    }
  }
  
  .separator {
    margin: 0 ${({ theme }) => theme.spacing.sm};
  }
  
  .current {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.2;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Phase1Section: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroImage src={PHASE_1_DATA.backgroundImage} alt={PHASE_1_DATA.title} />
        <HeroOverlay />
        <HeroContentBox>
          <HeroBreadcrumb>
            <a href="/">Home</a>
            <span className="separator">›</span>
            <a href="/development">Development</a>
            <span className="separator">›</span>
            <span className="current">{PHASE_1_DATA.breadcrumbLabel}</span>
          </HeroBreadcrumb>
          <HeroTitle>{PHASE_1_DATA.title}</HeroTitle>
        </HeroContentBox>
      </HeroSection>
      
      <PhaseSection>
        <SummaryBlock
          content={PHASE_1_DATA.overview.intro}
          imageSrc="/assets/images/development/phase1/1.jpg"
          imageAlt="Phase 1 Overview"
          reverse={true}
        />

        <GoldDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="/assets/images/development/phase1/2.png" 
              alt="Strategic Positioning"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>Strategic Positioning</PhaseTitle>
            {PHASE_1_DATA.overview.positioning.map((paragraph, idx) => (
              <PhaseParagraph key={idx}>{paragraph}</PhaseParagraph>
            ))}
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock $reverse>
          <PhaseImageWrapper $reverse>
            <PhaseImage 
              src="/assets/images/development/phase1/3.png" 
              alt="Key Objectives"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>Key Objectives of Phase 1</PhaseTitle>
            <PhaseParagraph>
              <strong>Infrastructure Development:</strong> Roads, utilities, data connectivity.
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>Anchor Tenants:</strong> Attract initial manufacturing & distribution tenants.
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>Financial Close:</strong> Raise funds via QOF, REITs, and strategic LPs.
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>Regulatory Activation:</strong> FTZ approval, environmental permits, construction readiness.
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="/assets/images/development/phase1/4.jpg" 
              alt="Investment Timeline"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>Phase 1 Investment & Timeline</PhaseTitle>
            {PHASE_1_DATA.timeline.map((item, idx) => (
              <PhaseParagraph key={idx}>
                <strong>{item.milestone}</strong> ({item.targetDate}): {item.keyActions}
              </PhaseParagraph>
            ))}
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock $reverse>
          <PhaseImageWrapper $reverse>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920" 
              alt="Financing Structure"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>Phase 1 Financing Structure</PhaseTitle>
            <PhaseParagraph>
              <strong>Target Raise:</strong> {PHASE_1_DATA.financing.targetRaise}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>Funding Sources:</strong>
            </PhaseParagraph>
            {PHASE_1_DATA.financing.sources.map((source, idx) => (
              <PhaseParagraph key={idx} dangerouslySetInnerHTML={{ __html: source }} />
            ))}
            <PhaseParagraph style={{ marginTop: '1.5rem' }}>
              <strong>Estimated ROI:</strong> {PHASE_1_DATA.financing.returns.description}. {PHASE_1_DATA.financing.returns.details.join('. ')}.
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>
      </PhaseSection>
      
      <GoldDivider />
      
      <QuoteSection quote="Phase One establishes APOZ as the premier FTZ+QOZ dual-status business park, creating unprecedented economic opportunity in Southeast Texas with 9.8M sq. ft. of industrial space and integrated workforce housing." />
    </>
  );
};

export default Phase1Section;
