import React from "react";
import TextHero from "../../TextHero";
import {
  WhiteSection,
  GreySection,
  Container,
  ContentGrid,
  GreyContentGrid,
  TextContent,
  TealSection,
  TealBox,
  IllustrationBox,
  ImageBox,
} from "./SharedStyles";

const PartnershipSection: React.FC = () => {
  return (
    <>
      <TextHero
        title="Our Partnership"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Partnership" }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <p>
                APOZ's partnership strategy is built on creating mutually beneficial relationships across government, industry, and international trade sectors. We bring together diverse stakeholders—from local municipalities to Fortune 500 corporations, from Asian Pacific investors to North American manufacturers—to create development ecosystems that deliver value for all participants.
              </p>
              <p>
                Our approach prioritizes transparency, shared risk, and aligned incentives. By partnering with established entities that bring complementary strengths—whether regulatory expertise, market access, or financial resources—APOZ accelerates project timelines and ensures communities benefit from world-class infrastructure and economic opportunities.
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="150" r="40" stroke="#d4af37" strokeWidth="3" fill="#fef3c7"/>
                <circle cx="100" cy="100" r="30" stroke="#0a3a3f" strokeWidth="2" fill="#e0f2fe"/>
                <circle cx="300" cy="100" r="30" stroke="#0a3a3f" strokeWidth="2" fill="#e0f2fe"/>
                <circle cx="100" cy="200" r="30" stroke="#0a3a3f" strokeWidth="2" fill="#bae6fd"/>
                <circle cx="300" cy="200" r="30" stroke="#0a3a3f" strokeWidth="2" fill="#bae6fd"/>
                <line x1="130" y1="100" x2="170" y2="130" stroke="#d4af37" strokeWidth="2"/>
                <line x1="270" y1="100" x2="230" y2="130" stroke="#d4af37" strokeWidth="2"/>
                <line x1="130" y1="200" x2="170" y2="170" stroke="#d4af37" strokeWidth="2"/>
                <line x1="270" y1="200" x2="230" y2="170" stroke="#d4af37" strokeWidth="2"/>
                <text x="200" y="155" textAnchor="middle" fill="#0a3a3f" fontSize="14" fontWeight="bold">APOZ</text>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>
      
      <TealSection>
        <TealBox>
            <p>
              APOZ collaborates with ASC Global Inc. as our primary development partner, providing leadership and international market expertise. We work closely with the City of Houston for regulatory alignment and infrastructure coordination, while partnerships with ITC Houston and Asia Pacific trade networks facilitate cross-border investment and business establishment. These strategic alliances combine government support, corporate expertise, and international connections to create seamless pathways for development success.
            </p>
          </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Partnership collaboration"
              />
            </ImageBox>
            <TextContent>
              <p>
                Our partnership model extends beyond traditional developer relationships. We cultivate connections with Asian Pacific investment groups seeking North American market access, domestic manufacturers looking for strategic logistics positioning, and community organizations focused on affordable housing and workforce development.
              </p>
              <p>
                Through these diverse partnerships, APOZ creates integrated ecosystems where international trade corporations, local governments, Fortune 500 companies, and community stakeholders work together toward shared prosperity. This collaborative approach ensures our developments deliver economic growth, housing accessibility, and sustainable community benefits that extend far beyond individual project boundaries.
              </p>
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>
    </>
  );
};

export default PartnershipSection;
