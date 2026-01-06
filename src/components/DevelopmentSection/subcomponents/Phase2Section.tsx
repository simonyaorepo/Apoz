import React from "react";
import OverviewSection from "./OverviewSection";
import SummaryBlock from "./SummaryBlock";
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
import { PHASE_2_DATA } from "../developmentSectionData";

const Phase2Section: React.FC = () => {
  return (
    <>
      <OverviewSection
        title={PHASE_2_DATA.title}
        backgroundImage="https://images.unsplash.com/photo-1605146769289-440113cc3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbLabel="Phase 2"
      />
      
      <PhaseSection>
        <SummaryBlock
          content={PHASE_2_DATA.overview}
          imageSrc="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80"
          imageAlt="Phase 2 Overview"
          reverse={true}
        />

        <GoldDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
              alt="Development Objectives"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>Development Objectives</PhaseTitle>
            {PHASE_2_DATA.objectives.map((objective, index) => (
              <PhaseParagraph key={index}>{objective}</PhaseParagraph>
            ))}
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock $reverse>
          <PhaseImageWrapper $reverse>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80" 
              alt="Project Scope"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>Project Scope</PhaseTitle>
            <PhaseParagraph>
              <strong>Total Units:</strong> {PHASE_2_DATA.scope.totalUnits}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>Unit Types:</strong>
            </PhaseParagraph>
            {PHASE_2_DATA.scope.unitTypes.map((type, index) => (
              <PhaseParagraph key={index}>• {type}</PhaseParagraph>
            ))}
            <PhaseParagraph>
              <strong>Community Features:</strong>
            </PhaseParagraph>
            {PHASE_2_DATA.scope.communityFeatures.map((feature, index) => (
              <PhaseParagraph key={index}>• {feature}</PhaseParagraph>
            ))}
            <PhaseParagraph>
              <strong>Land Use:</strong> {PHASE_2_DATA.scope.landUse}
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
              alt="Financing Structure"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>Financing Structure</PhaseTitle>
            <PhaseParagraph>
              <strong>Estimated Cost:</strong> {PHASE_2_DATA.financing.estimatedCost}
            </PhaseParagraph>
            <PhaseParagraph>
              <strong>Capital Sources:</strong>
            </PhaseParagraph>
            {PHASE_2_DATA.financing.sources.map((source, index) => (
              <PhaseParagraph key={index}>• {source}</PhaseParagraph>
            ))}
            <PhaseParagraph>
              <strong>Investor Benefits:</strong>
            </PhaseParagraph>
            {PHASE_2_DATA.financing.benefits.map((benefit, index) => (
              <PhaseParagraph key={index}>• {benefit}</PhaseParagraph>
            ))}
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock $reverse>
          <PhaseImageWrapper $reverse>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" 
              alt="Development Timeline"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>Development Timeline</PhaseTitle>
            {PHASE_2_DATA.timeline.map((phase, index) => (
              <PhaseParagraph key={index}>
                <strong>{phase.milestone} ({phase.targetDate}):</strong> {phase.keyActions}
              </PhaseParagraph>
            ))}
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
              alt="Phase 1 & 2 Synergy"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>Phase 1 & 2 Synergy</PhaseTitle>
            {PHASE_2_DATA.synergy.map((point, index) => (
              <PhaseParagraph key={index}>• {point}</PhaseParagraph>
            ))}
          </PhaseTextContent>
        </PhaseContentBlock>
      </PhaseSection>
    </>
  );
};

export default Phase2Section;
