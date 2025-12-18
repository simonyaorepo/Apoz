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

interface VisionSectionProps {
  onNavigate: (page: string) => void;
}

const VisionSection: React.FC<VisionSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title="Our Vision"
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Vision" }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <p>
                APOZ envisions becoming the premier Asia Pacific-North American economic bridge in Southeast Texas—a world-class development zone where international commerce, advanced manufacturing, and thriving residential communities converge to create unprecedented regional prosperity.
              </p>
              <p>
                We see a future where underdeveloped Texas land transforms into vibrant economic hubs attracting Fortune 500 companies, supporting thousands of quality jobs, and providing affordable housing for working families. Our vision extends beyond economic metrics to community vitality, environmental sustainability, and creating a model for how 21st-century development can benefit all stakeholders.
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="150" r="80" stroke="#0a3a3f" strokeWidth="2" fill="#e0f2fe"/>
                <circle cx="200" cy="150" r="60" stroke="#0a3a3f" strokeWidth="2" fill="#bae6fd"/>
                <circle cx="200" cy="150" r="40" stroke="#d4af37" strokeWidth="3" fill="#fef3c7"/>
                <line x1="200" y1="70" x2="200" y2="30" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="200" y1="230" x2="200" y2="270" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="120" y1="150" x2="80" y2="150" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="280" y1="150" x2="320" y2="150" stroke="#0a3a3f" strokeWidth="2"/>
                <circle cx="200" cy="30" r="8" fill="#d4af37"/>
                <circle cx="200" cy="270" r="8" fill="#d4af37"/>
                <circle cx="80" cy="150" r="8" fill="#d4af37"/>
                <circle cx="320" cy="150" r="8" fill="#d4af37"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>
      
      <TealSection>
        <TealBox>
          <p>
            APOZ will serve as the primary destination for Asian Pacific companies establishing North American operations, leveraging Houston's strategic port access, Free Trade Zone benefits, and established international trade networks. We envision industrial zones buzzing with advanced manufacturing, logistics centers connecting continents, commercial districts serving diverse communities, and residential neighborhoods providing quality affordable housing—all working in harmony to demonstrate that economic growth and community well-being are complementary outcomes of thoughtful development.
          </p>
        </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Business collaboration"
              />
            </ImageBox>
            <TextContent>
              <p>
                Our vision is creating a lasting legacy that transforms how development happens—proving that large-scale industrial and residential projects can prioritize affordability, sustainability, and community benefit while delivering strong returns for investors and partners.
              </p>
              <p>
                APOZ will demonstrate that strategic international partnerships, government collaboration, and community-focused planning create better outcomes than traditional development models. We envision setting new standards for how economic zones integrate housing affordability, environmental stewardship, and job creation into core development frameworks.
              </p>
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>
    </>
  );
};

export default VisionSection;
