import React from "react";
import TextHero from "../../TextHero";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { Container, ContentWrapper } from "../../ui/Containers";
import { ContentGrid, GreyContentGrid } from "../../ui/Grids";
import { TextContent, SubsectionTitle, SectionTitle } from "../../ui/Typography";
import { IllustrationBox, ImageBox } from "../../ui/Media";
import { INFRASTRUCTURE_INVESTMENT_DATA } from "./investmentSectionData";
import { RequirementsList, RequirementTitle, RequirementText } from "../../ui/Requirements";
import { StyledTable } from "../../ui/Table";

const ScopeTable = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ScopeCard = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.goldAccent};
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(10, 58, 63, 0.03);
  
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  .components {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.foreground};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  .purpose {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.teal};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

const TimelineCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.goldAccent};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  .scope {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.foreground};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  .milestones {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.teal};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

const FundingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  
  li {
    padding-left: ${({ theme }) => theme.spacing.lg};
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    
    &:before {
      content: "•";
      color: ${({ theme }) => theme.colors.goldAccent};
      font-size: 1.5rem;
      position: absolute;
      left: 0;
    }
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.goldAccent};
  
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      padding-left: ${({ theme }) => theme.spacing.lg};
      position: relative;
      margin-bottom: ${({ theme }) => theme.spacing.xs};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      
      &:before {
        content: "•";
        color: ${({ theme }) => theme.colors.goldAccent};
        font-size: 1.2rem;
        position: absolute;
        left: 0;
      }
    }
  }
`;

interface InfrastructureSectionProps {
  onNavigate: (page: string) => void;
}

const InfrastructureSection: React.FC<InfrastructureSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title={INFRASTRUCTURE_INVESTMENT_DATA.title}
        backgroundImage={INFRASTRUCTURE_INVESTMENT_DATA.backgroundImage}
        breadcrumbs={INFRASTRUCTURE_INVESTMENT_DATA.breadcrumbs}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              {INFRASTRUCTURE_INVESTMENT_DATA.content.intro.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Road/Transportation */}
                <rect x="60" y="250" width="150" height="60" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="80" y1="280" x2="190" y2="280" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="100" y1="273" x2="120" y2="273" stroke="#0a3a3f" strokeWidth="1.5"/>
                <line x1="150" y1="273" x2="170" y2="273" stroke="#0a3a3f" strokeWidth="1.5"/>
                
                {/* Power/Utilities */}
                <line x1="240" y1="200" x2="240" y2="310" stroke="#0a3a3f" strokeWidth="3"/>
                <line x1="230" y1="220" x2="250" y2="220" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="230" y1="250" x2="250" y2="250" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="230" y1="280" x2="250" y2="280" stroke="#0a3a3f" strokeWidth="2"/>
                <circle cx="240" cy="190" r="15" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                
                {/* Digital/Connectivity */}
                <circle cx="340" cy="240" r="40" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="340" cy="240" r="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <line x1="315" y1="215" x2="305" y2="205" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="365" y1="215" x2="375" y2="205" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="365" y1="265" x2="375" y2="275" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Building/Facilities */}
                <rect x="430" y="220" width="80" height="90" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="445" y="240" width="18" height="22" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="475" y="240" width="18" height="22" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="445" y="275" width="18" height="22" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="475" y="275" width="18" height="22" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Environmental/Green */}
                <circle cx="560" cy="265" r="25" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <path d="M 550 255 Q 560 245 570 255" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="560" y1="255" x2="555" y2="260" stroke="#0a3a3f" strokeWidth="1.5"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <p style={{ color: 'white', fontSize: '1.125rem', lineHeight: '1.8' }}>
            Infrastructure development underpins the success of APOZ's industrial facilities and affordable housing, creating a fully integrated trade and manufacturing ecosystem with transportation, utilities, digital connectivity, FTZ facilities, residential infrastructure, and environmental systems.
          </p>
        </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <ContentWrapper>
            <SectionTitle>Infrastructure Scope</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Key Components</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {INFRASTRUCTURE_INVESTMENT_DATA.content.scope.map((item, idx) => (
                  <tr key={idx}>
                    <td><strong>{item.category}</strong></td>
                    <td>{item.components}</td>
                    <td>{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </ContentWrapper>
        </Container>
      </GreySection>

      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Construction and development"
              />
            </ImageBox>
            <TextContent>
              <SubsectionTitle>Construction & Development Timeline</SubsectionTitle>
              {INFRASTRUCTURE_INVESTMENT_DATA.content.timeline.map((item, idx) => (
                <TimelineCard key={idx}>
                  <h4>{item.phase}</h4>
                  <p className="scope"><strong>Scope:</strong> {item.scope}</p>
                  <p className="milestones"><strong>Key Milestones:</strong> {item.milestones}</p>
                </TimelineCard>
              ))}
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>

      <WhiteSection>
        <Container>
          <TextContent>
            <SubsectionTitle>{INFRASTRUCTURE_INVESTMENT_DATA.content.funding.heading}</SubsectionTitle>
            <RequirementsList>
              <div>
                <RequirementTitle>Private Capital via QOF</RequirementTitle>
                <RequirementText>Leverage Qualified Opportunity Zone (QOZ) tax benefits.</RequirementText>
              </div>
              <div>
                <RequirementTitle>Infrastructure Financing</RequirementTitle>
                <RequirementText>Partnerships with Texas development authorities.</RequirementText>
              </div>
              <div>
                <RequirementTitle>Tenant Participation</RequirementTitle>
                <RequirementText>Built-to-suit facilities include partial cost-sharing.</RequirementText>
              </div>
              <div>
                <RequirementTitle>Public-Private Grants</RequirementTitle>
                <RequirementText>Potential HUD and DOE programs for sustainable energy and housing.</RequirementText>
              </div>
            </RequirementsList>
          </TextContent>
        </Container>
      </WhiteSection>
    </>
  );
};

export default InfrastructureSection;
