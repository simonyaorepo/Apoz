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

interface MissionSectionProps {
  onNavigate: (page: string) => void;
}

const MissionSection: React.FC<MissionSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title="Our Mission"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Mission" }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <p>
                APOZ (Asia Pacific Opportunity Zone) is dedicated to creating a dynamic, sustainable, and innovation-driven industrial and residential community in Southeast Texas. Our mission goes beyond simple development—we're architecting the future of economic opportunity in one of America's fastest-growing regions.
              </p>
              <p>
                By integrating smart infrastructure, affordable housing solutions, and strategic global partnerships, APOZ aims to become the premier hub for advanced manufacturing, international trade, and inclusive community development. We bridge continents, connecting Asian Pacific investment with North American opportunity while creating lasting value for local communities and regional economies.
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="120" width="80" height="120" stroke="currentColor" strokeWidth="2" fill="#e0f2fe"/>
                <rect x="140" y="90" width="60" height="150" stroke="currentColor" strokeWidth="2" fill="#bae6fd"/>
                <rect x="210" y="110" width="70" height="130" stroke="currentColor" strokeWidth="2" fill="#e0f2fe"/>
                <rect x="290" y="100" width="60" height="140" stroke="currentColor" strokeWidth="2" fill="#bae6fd"/>
                <circle cx="320" cy="50" r="25" stroke="#D4AF37" strokeWidth="2" fill="#fef3c7"/>
                <path d="M 20 240 L 380 240" stroke="currentColor" strokeWidth="3"/>
                <path d="M 80 140 L 120 140 M 100 140 L 100 180" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>
      
      <TealSection>
        <TealBox>
            <p>
              Every APOZ project is evaluated through the lens of people, planet, and profit. We prioritize affordable housing starting at $188,000 for working families, sustainable development practices that protect environmental resources, and economic structures that generate lasting value. Our mission extends beyond construction—we're building vibrant communities where businesses flourish, families thrive, and future generations inherit a legacy of opportunity.
            </p>
          </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Strategic business meeting"
              />
            </ImageBox>
            <TextContent>
              <p>
                APOZ integrates multiple development pillars: industrial parks designed to attract Fortune 500 manufacturers with Free Trade Zone advantages, commercial districts featuring retail, healthcare, and essential services, and residential communities that provide quality affordable housing for the workforce powering our industrial zones.
              </p>
              <p>
                Our strategic positioning in Southeast Texas leverages Houston's global port access, existing transportation infrastructure, and status as an international trade gateway. This creates unique competitive advantages for companies seeking to establish North American operations while maintaining efficient supply chain connections to Asian Pacific markets.
              </p>
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>
    </>
  );
};

export default MissionSection;
