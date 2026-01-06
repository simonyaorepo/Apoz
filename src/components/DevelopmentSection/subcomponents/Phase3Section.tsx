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

const Phase3Section: React.FC = () => {
  return (
    <>
      <OverviewSection
        title="Phase 3"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbLabel="Phase 3"
      />
      
      <PhaseSection>
        <SummaryBlock
          content={[
            "Phase 3 represents the future vision of APOZ, expanding into commercial and mixed-use developments that complete our master-planned community.",
            "Building on the foundation of Phase 1 infrastructure and Phase 2 residential growth, Phase 3 will introduce commercial centers, industrial parks, and innovation districts that leverage our unique dual FTZ and QOZ designation.",
            "This phase will create thousands of jobs, attract international investment from Fortune 500 companies, and establish APOZ as a premier business destination and smart innovation hub in Southeast Texas."
          ]}
          imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
          imageAlt="Phase 3 Overview"
          reverse={true}
        />

        <GoldDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
              alt="Smart Innovation Hub" 
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>Smart Innovation Hub for Sustainable Growth</PhaseTitle>
            <PhaseParagraph>
              Phase 3 envisions APOZ as a world-class innovation hub that seamlessly integrates advanced manufacturing, 
              global logistics, sustainable energy, commercial real estate, and smart living ecosystems. Building on 
              Phases I & II, Phase III scales APOZ into a next-generation economic powerhouse.
            </PhaseParagraph>
            <PhaseParagraph>
              This phase positions APOZ to attract global investment from leading multinational enterprises and 
              high-tech industries, fostering innovation across advanced manufacturing and logistics sectors.
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock $reverse>
          <PhaseImageWrapper $reverse>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
              alt="Advanced Manufacturing"
            />
          </PhaseImageWrapper>
          <PhaseTextContent $reverse>
            <PhaseTitle>Advanced Manufacturing & Global Logistics</PhaseTitle>
            <PhaseParagraph>
              Leveraging APOZ's unique dual FTZ+QOZ status, Phase 3 attracts Fortune 500 companies and international 
              manufacturers seeking to localize production and manufacture "Made in USA" products. The development 
              provides cutting-edge facilities for AI, semiconductors, clean energy, and pharmaceuticals.
            </PhaseParagraph>
            <PhaseParagraph>
              Strategic proximity to the Port of Houston, I-10 corridor access, and established FTZ infrastructure 
              create an unparalleled logistics advantage for global supply chain optimization.
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>

        <GreyDivider />

        <PhaseContentBlock>
          <PhaseImageWrapper>
            <PhaseImage 
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80" 
              alt="Sustainable Development"
            />
          </PhaseImageWrapper>
          <PhaseTextContent>
            <PhaseTitle>Sustainable Energy & Long-Term Vision</PhaseTitle>
            <PhaseParagraph>
              Phase 3 promotes sustainable growth through energy efficiency, green infrastructure, and circular economy 
              initiatives. Solar farms, renewable energy integration, and environmental stewardship principles are 
              embedded throughout the development.
            </PhaseParagraph>
            <PhaseParagraph>
              This phase reflects APOZ's commitment to long-term economic resilience, technological leadership, 
              and its role as a strategic gateway for international collaboration and industrial excellence—creating 
              the future of integrated development where commerce, innovation, and community converge.
            </PhaseParagraph>
          </PhaseTextContent>
        </PhaseContentBlock>
      </PhaseSection>
      
      <GoldDivider />
      
      <QuoteSection quote="Phase 3 establishes APOZ as a world-class innovation hub where advanced manufacturing, sustainable energy, and global commerce converge to build lasting economic prosperity." />
    </>
  );
};

export default Phase3Section;
