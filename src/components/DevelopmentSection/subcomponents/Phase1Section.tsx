import React from "react";
import OverviewSection from "./OverviewSection";
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
      <OverviewSection
        title={PHASE_1_DATA.title}
        backgroundImage={PHASE_1_DATA.backgroundImage}
        breadcrumbLabel={PHASE_1_DATA.breadcrumbLabel}
      />
      
      <PhaseSection>
        <SummaryBlock
          content={PHASE_1_DATA.overview.intro}
          imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
          imageAlt="Phase 1 Overview"
          reverse={true}
        />

        <GoldDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
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
              src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800&q=80" 
              alt="Key Objectives"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>Key Objectives of Phase 1</PhaseTitle>
            {PHASE_1_DATA.objectives.map((objective, idx) => (
              <PhaseParagraph key={idx}>• {objective}</PhaseParagraph>
            ))}
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
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
              <PhaseParagraph key={idx}>• {source}</PhaseParagraph>
            ))}
            <PhaseParagraph style={{ marginTop: '1.5rem' }}>
              <strong>Estimated ROI:</strong> {PHASE_1_DATA.financing.returns.description}
            </PhaseParagraph>
            {PHASE_1_DATA.financing.returns.details.map((detail, idx) => (
              <PhaseParagraph key={idx}>• {detail}</PhaseParagraph>
            ))}
          </PhaseTextContent>
        </PhaseContentBlock>
      </PhaseSection>
      
      <GoldDivider />
      
      <QuoteSection quote="Phase One establishes APOZ as the premier FTZ+QOZ dual-status business park, creating unprecedented economic opportunity in Southeast Texas with 9.8M sq. ft. of industrial space and integrated workforce housing." />
    </>
  );
};

export default Phase1Section;
