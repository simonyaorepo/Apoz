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
} from "./PhaseShared";

const Phase2Section: React.FC = () => {
  return (
    <>
      <OverviewSection
        title="Phase 2"
        backgroundImage="https://images.unsplash.com/photo-1605146769289-440113cc3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbLabel="Phase 2"
      />
      
      <PhaseSection>
        <SummaryBlock
          content={[
            "Phase 2 focuses on residential development, delivering 1,500 affordable housing units across 210+ acres as part of our build-to-sell strategy.",
            "With homes starting at $188,000, Phase 2 provides working-class families the opportunity to invest in homeownership within the APOZ community, creating stable workforce housing that supports industrial growth.",
            "This development generates projected sales revenue of $282 million with a gross profit of $94.5 million, while strengthening the Greater Houston region with quality, affordable housing in one of the nation's fastest-growing metropolitan areas."
          ]}
          imageSrc="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80"
          imageAlt="Phase 2 Overview"
          reverse={true}
        />

        <GoldDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
              alt="Affordable Housing Development"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>1,500 Affordable Housing Units</PhaseTitle>
            <PhaseParagraph>
              Phase 2 delivers 1,500 affordable housing units across 210+ acres, providing quality homes starting at $188,000. 
              With an average lot size of 10,000 sq. ft., each 3-bedroom, 1,200 sq. ft. home offers working-class families 
              the opportunity to invest in their future within the APOZ community.
            </PhaseParagraph>
            <PhaseParagraph>
              This build-to-sell development generates projected gross profit of $94.5 million while creating stable 
              workforce housing that supports APOZ's industrial growth and strengthens the Greater Houston region.
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock $reverse>
          <PhaseImageWrapper $reverse>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80" 
              alt="Community Integration"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>Community Integration & Workforce Stability</PhaseTitle>
            <PhaseParagraph>
              By providing affordable housing directly within APOZ, Phase 2 ensures employee retention and creates 
              a self-sustaining community ecosystem. Workers can live minutes from their jobs, reducing commute times 
              and strengthening community ties.
            </PhaseParagraph>
            <PhaseParagraph>
              This integrated approach combines economic opportunity with quality living, fostering a vibrant 
              residential environment that serves both APOZ tenants and the broader region.
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
              alt="Economic Impact"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>Economic & Regional Impact</PhaseTitle>
            <PhaseParagraph>
              Phase 2's residential expansion contributes significantly to the Greater Houston area by delivering 
              hundreds of affordable homes in one of the nation's fastest-growing metropolitan regions. With projected 
              sales revenue of $282 million, this development drives measurable economic growth.
            </PhaseParagraph>
            <PhaseParagraph>
              The build-to-sell model ensures sustainable development while providing families with homeownership 
              opportunities that build generational wealth and community stability.
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>
      </PhaseSection>
      
      <GoldDivider />
      
      <QuoteSection quote="Phase 2 transforms APOZ into a complete community, delivering 1,500 affordable homes that create workforce stability and drive regional economic growth in Greater Houston." />
    </>
  );
};

export default Phase2Section;
