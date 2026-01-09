import React from "react";
import TextHero from "../../TextHero";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { TealText } from "../../ui/TealComponents";
import { Container } from "../../ui/Containers";
import { ContentGrid, GreyContentGrid } from "../../ui/Grids";
import { TextContent, SectionTitle } from "../../ui/Typography";
import { IllustrationBox, ImageBox } from "../../ui/Media";
import { StyledTable } from "../../ui/Table";
import { INTERNATIONAL_HUB_DATA } from "../masterPlanSectionData";

const SubsectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h5};
  }
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const IndustryCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.goldAccent};
  
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 0;
  }
`;

interface InternationalHubSectionProps {
  onNavigate: (page: string) => void;
}

const InternationalHubSection: React.FC<InternationalHubSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title={INTERNATIONAL_HUB_DATA.title}
        backgroundImage={INTERNATIONAL_HUB_DATA.backgroundImage}
        breadcrumbs={INTERNATIONAL_HUB_DATA.breadcrumbs}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              {INTERNATIONAL_HUB_DATA.content.intro.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              <SubsectionTitle>Target Partners</SubsectionTitle>
              {INTERNATIONAL_HUB_DATA.content.targetPartners.map((partner, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: partner }} />
              ))}
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Globe/World connectivity */}
                <circle cx="150" cy="200" r="60" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <ellipse cx="150" cy="200" rx="60" ry="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <line x1="150" y1="140" x2="150" y2="260" stroke="#0a3a3f" strokeWidth="1.5"/>
                <path d="M120 170 Q150 185 180 170" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <path d="M120 230 Q150 215 180 230" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Connection arrows */}
                <line x1="210" y1="200" x2="280" y2="200" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M265 190 L280 200 L265 210" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                {/* Trade/Hub center */}
                <rect x="300" y="160" width="120" height="80" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <text x="360" y="205" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0a3a3f">HUB</text>
                
                {/* Outgoing connections */}
                <line x1="420" y1="180" x2="480" y2="150" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M470 145 L480 150 L470 157" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                <line x1="420" y1="200" x2="480" y2="200" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M465 190 L480 200 L465 210" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                <line x1="420" y1="220" x2="480" y2="250" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M470 243 L480 250 L470 255" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                {/* Destination nodes */}
                <rect x="490" y="130" width="80" height="40" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="490" y="180" width="80" height="40" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="490" y="230" width="80" height="40" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealText>
            APOZ's International Hub serves as a global trade gateway connecting Asia-Pacific manufacturers with U.S. markets through FTZ-171 duty-free operations, cross-border e-commerce platforms, advanced manufacturing clusters, and tax-advantaged investment structures for international capital.
          </TealText>
        </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <TextContent>
            <SectionTitle>Core Functions of the International Hub</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>Function</th>
                  <th>Description</th>
                  <th>Impact</th>
                </tr>
              </thead>
              <tbody>
                {INTERNATIONAL_HUB_DATA.content.coreFunctions.map((item, idx) => (
                  <tr key={idx}>
                    <td data-label="Function"><strong>{item.function}</strong></td>
                    <td data-label="Description">{item.description}</td>
                    <td data-label="Impact">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TextContent>
        </Container>
      </GreySection>
      
      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Strategic advantages"
              />
            </ImageBox>
            <TextContent>
              <SubsectionTitle>{INTERNATIONAL_HUB_DATA.content.advantages.heading}</SubsectionTitle>
              {INTERNATIONAL_HUB_DATA.content.advantages.items.map((item, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>

      <WhiteSection>
        <Container>
          <TextContent>
            <SubsectionTitle>{INTERNATIONAL_HUB_DATA.content.industries.heading}</SubsectionTitle>
            <IndustryGrid>
              {INTERNATIONAL_HUB_DATA.content.industries.sectors.map((industry, idx) => (
                <IndustryCard key={idx}>
                  <h4>{industry.name}</h4>
                  <p>{industry.description}</p>
                </IndustryCard>
              ))}
            </IndustryGrid>
          </TextContent>
        </Container>
      </WhiteSection>
    </>
  );
};

export default InternationalHubSection;
