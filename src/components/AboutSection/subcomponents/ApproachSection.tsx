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

const ApproachSection: React.FC = () => {
  return (
    <>
      <TextHero
        title="Our Approach"
        backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Approach" }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <p>
                APOZ's approach centers on creating comprehensive, sustainable development zones that serve as bridges between Asian Pacific markets and North American industry. We don't just develop land—we architect economic ecosystems that generate long-term value for communities, investors, and international partners.
              </p>
              <p>
                Our methodology combines strategic site selection in Southeast Texas, robust infrastructure planning leveraging Houston's port and transportation networks, international partnership cultivation with established trade corporations, and community-focused execution that prioritizes local employment and quality of life.
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="80" y="50" width="60" height="40" rx="4" stroke="#0a3a3f" strokeWidth="2" fill="#e0f2fe"/>
                <rect x="170" y="50" width="60" height="40" rx="4" stroke="#0a3a3f" strokeWidth="2" fill="#e0f2fe"/>
                <rect x="260" y="50" width="60" height="40" rx="4" stroke="#0a3a3f" strokeWidth="2" fill="#e0f2fe"/>
                <path d="M 110 90 L 110 130" stroke="#0a3a3f" strokeWidth="2" markerEnd="url(#arrow)"/>
                <path d="M 200 90 L 200 130" stroke="#0a3a3f" strokeWidth="2" markerEnd="url(#arrow)"/>
                <path d="M 290 90 L 290 130" stroke="#0a3a3f" strokeWidth="2" markerEnd="url(#arrow)"/>
                <rect x="80" y="140" width="60" height="40" rx="4" stroke="#0a3a3f" strokeWidth="2" fill="#bae6fd"/>
                <rect x="170" y="140" width="60" height="40" rx="4" stroke="#0a3a3f" strokeWidth="2" fill="#bae6fd"/>
                <rect x="260" y="140" width="60" height="40" rx="4" stroke="#0a3a3f" strokeWidth="2" fill="#bae6fd"/>
                <path d="M 140 160 L 170 160" stroke="#d4af37" strokeWidth="3"/>
                <path d="M 230 160 L 260 160" stroke="#d4af37" strokeWidth="3"/>
                <circle cx="200" cy="230" r="30" stroke="#d4af37" strokeWidth="3" fill="#fef3c7"/>
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#0a3a3f"/>
                  </marker>
                </defs>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>
      
      <TealSection>
        <TealBox>
            <p>
              APOZ employs a holistic development strategy that emphasizes infrastructure-first planning, sustainable growth patterns, and strategic partnerships with government entities like the City of Houston and international corporations such as ITC Houston. Our approach ensures that industrial, commercial, and residential components work in harmony to create vibrant, economically resilient communities positioned to capitalize on global trade opportunities.
            </p>
          </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Sustainable development"
              />
            </ImageBox>
            <TextContent>
              <p>
                APOZ's success stems from strategic alliances with key partners across government, industry, and international trade sectors. Our collaboration with ASC Global Inc. provides leadership and global market access, while partnerships with the City of Houston ensure regulatory alignment and infrastructure support.
              </p>
              <p>
                Through entities like ITC Houston, we facilitate connections between Asian Pacific manufacturers and North American markets, creating mutually beneficial trade relationships. Our approach combines public-private cooperation, international investment coordination, and community engagement to deliver developments that transform regional economies.
              </p>
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>
    </>
  );
};

export default ApproachSection;
