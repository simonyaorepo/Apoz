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
} from "./SharedStyles";
import { INFRASTRUCTURE_INVESTMENT_DATA } from "./investmentSectionData";

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
          <h3 style={{ marginBottom: '1rem', color: 'white' }}>Infrastructure Scope</h3>
          <ScopeTable>
            {INFRASTRUCTURE_INVESTMENT_DATA.content.scope.map((item, idx) => (
              <ScopeCard key={idx}>
                <h4>{item.category}</h4>
                <p className="components"><strong>Key Components:</strong> {item.components}</p>
                <p className="purpose"><strong>Purpose:</strong> {item.purpose}</p>
              </ScopeCard>
            ))}
          </ScopeTable>
        </TealBox>
      </TealSection>
      
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
              <h3 style={{ marginBottom: '1.5rem' }}>Construction & Development Timeline</h3>
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
            <h3 style={{ marginBottom: '1.5rem' }}>{INFRASTRUCTURE_INVESTMENT_DATA.content.funding.heading}</h3>
            <FundingList>
              {INFRASTRUCTURE_INVESTMENT_DATA.content.funding.sources.map((source, idx) => (
                <li key={idx}>{source}</li>
              ))}
            </FundingList>
          </TextContent>
        </Container>
      </WhiteSection>

      <GreySection>
        <Container>
          <TextContent>
            <h3 style={{ marginBottom: '1.5rem' }}>Benefits for Tenants & Investors</h3>
            <BenefitsGrid>
              <BenefitCard>
                <h4>For Tenants</h4>
                <ul>
                  {INFRASTRUCTURE_INVESTMENT_DATA.content.benefits.tenants.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </BenefitCard>
              <BenefitCard>
                <h4>For Investors</h4>
                <ul>
                  {INFRASTRUCTURE_INVESTMENT_DATA.content.benefits.investors.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </BenefitCard>
            </BenefitsGrid>
          </TextContent>
        </Container>
      </GreySection>
    </>
  );
};

export default InfrastructureSection;
