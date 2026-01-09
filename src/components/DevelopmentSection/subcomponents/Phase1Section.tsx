import React from "react";
import TextHero from "../../TextHero";
import SummaryBlock from "./SummaryBlock";
import QuoteSection from "./QuoteSection";
import GoldDivider from "../../ui/GoldDivider";
import GreyDivider from "../../ui/GreyDivider";
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

const Phase1Section: React.FC = () => {
  return (
    <>
      <TextHero
        title={PHASE_1_DATA.title}
        backgroundImage={PHASE_1_DATA.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Development", href: "/development" },
          { label: "Phase 1" }
        ]}
      />
      
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
            <PhaseParagraph style={{ marginTop: '1rem' }}>
              <strong>Capital Sources:</strong>
            </PhaseParagraph>
            {PHASE_1_DATA.financing.sources.map((source, idx) => (
              <PhaseParagraph key={idx} dangerouslySetInnerHTML={{ __html: source }} />
            ))}
            <PhaseParagraph style={{ marginTop: '1.5rem' }}>
              {PHASE_1_DATA.financing.returnsSummary}
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
