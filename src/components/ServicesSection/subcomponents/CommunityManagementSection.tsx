import React from "react";
import TextHero from "../../TextHero";
import styled from "styled-components";
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
  BulletList,
  CardGrid,
  BorderCard,
  TwoColumnGrid,
  OutlineCard,
} from "./SharedStyles";
import { COMMUNITY_MANAGEMENT_DATA } from "../servicesSectionData";

const ServiceCard = styled(BorderCard)`
  .scope {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.foreground};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  .impact {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.teal};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

interface CommunityManagementSectionProps {
  onNavigate: (page: string) => void;
}

const CommunityManagementSection: React.FC<CommunityManagementSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title={COMMUNITY_MANAGEMENT_DATA.title}
        backgroundImage={COMMUNITY_MANAGEMENT_DATA.backgroundImage}
        breadcrumbs={COMMUNITY_MANAGEMENT_DATA.breadcrumbs}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              {COMMUNITY_MANAGEMENT_DATA.content.intro.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Core Goals</h3>
              <p>
                The community management team focuses on fostering a safe, vibrant, and sustainable residential environment for all residents. They maintain high-quality amenities and common areas while building a strong sense of community through events and programming. The team also coordinates seamlessly with the industrial park operations to ensure residents benefit from proximity to employment opportunities.
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Community buildings - residential */}
                <path d="M 80 240 L 105 215 L 130 240" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="85" y="240" width="40" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="95" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="110" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                
                <path d="M 145 240 L 170 215 L 195 240" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="150" y="240" width="40" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="160" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="175" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                
                {/* Park/Green space */}
                <circle cx="260" cy="270" r="25" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="240" cy="290" r="18" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <circle cx="280" cy="295" r="15" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Community center */}
                <rect x="330" y="230" width="90" height="80" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="345" y="250" width="25" height="30" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="380" y="250" width="25" height="30" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <circle cx="375" cy="220" r="8" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Playground */}
                <rect x="450" y="280" width="35" height="30" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="467" cy="265" r="10" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="467" y1="275" x2="467" y2="280" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* People icons */}
                <circle cx="520" cy="270" r="12" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="520" y1="282" x2="520" y2="300" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="520" y1="288" x2="510" y2="295" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="520" y1="288" x2="530" y2="295" stroke="#0a3a3f" strokeWidth="2"/>
                
                <circle cx="555" cy="270" r="12" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="555" y1="282" x2="555" y2="300" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="555" y1="288" x2="545" y2="295" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="555" y1="288" x2="565" y2="295" stroke="#0a3a3f" strokeWidth="2"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>Key Community Management Services</h3>
          {COMMUNITY_MANAGEMENT_DATA.content.services.map((service, idx) => (
            <div key={idx} style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{service.category}</h4>
              <p style={{ color: 'white', fontSize: '1rem', marginBottom: '0.25rem', opacity: 0.9 }}>
                <strong>Scope:</strong> {service.scope}
              </p>
              <p style={{ color: 'white', fontSize: '1rem', opacity: 0.9 }}>
                <strong>Impact:</strong> {service.impact}
              </p>
            </div>
          ))}
        </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Community management"
              />
            </ImageBox>
            <TextContent>
              <h3 style={{ marginBottom: '1.5rem' }}>{COMMUNITY_MANAGEMENT_DATA.content.integration.heading}</h3>
              <p>{COMMUNITY_MANAGEMENT_DATA.content.integration.description}</p>
              <p>
                The residential zone provides workforce housing for industrial park employees, creating a live-work ecosystem that reduces commute times and improves quality of life. Community programs are designed to support working families with childcare services and after-school activities. Shared infrastructure including transit connections and recreational facilities benefit both residential and commercial areas, while the overall development attracts skilled workers and their families to support long-term industrial growth.
              </p>
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>

      <GreySection>
        <Container>
          <TextContent>
            <h3 style={{ marginBottom: '1.5rem' }}>{COMMUNITY_MANAGEMENT_DATA.content.teamFunctions.heading}</h3>
            <TwoColumnGrid>
              {COMMUNITY_MANAGEMENT_DATA.content.teamFunctions.divisions.map((division, idx) => (
                <OutlineCard key={idx}>
                  <h4>{division.name}</h4>
                  <p>{division.description}</p>
                </OutlineCard>
              ))}
            </TwoColumnGrid>
          </TextContent>
        </Container>
      </GreySection>
    </>
  );
};

export default CommunityManagementSection;
