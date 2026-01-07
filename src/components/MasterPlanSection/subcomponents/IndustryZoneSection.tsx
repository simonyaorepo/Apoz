import React from "react";
import styled from "styled-components";
import {
  WhiteSection,
  GreySection,
  Container,
  ContentGrid,
  TextContent,
  TealSection,
  TealBox,
  IllustrationBox,
  ContentWrapper,
  IntroText,
  SectionTitle,
  SubsectionTitle,
  StyledTable,
} from "./SharedStyles";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 550px;
  height: 60vh;
  max-height: 750px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.darkBlue};
  
  @media (max-width: 1024px) {
    min-height: 500px;
    height: 55vh;
  }
  
  @media (max-width: 768px) {
    min-height: 450px;
    height: 50vh;
  }
  
  @media (max-width: 480px) {
    min-height: 400px;
    height: 48vh;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const ContentBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxxl};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
  }
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  }
  
  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
`;

const Breadcrumb = styled.nav`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  letter-spacing: 0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  opacity: 0.9;
  
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.goldAccent};
    }
  }
  
  .separator {
    margin: 0 ${({ theme }) => theme.spacing.sm};
  }
  
  .current {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.2;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 0;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  
  li {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "•";
      color: ${({ theme }) => theme.colors.accent};
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    li {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
`;

interface IndustryZoneSectionProps {
  onNavigate: (page: string) => void;
}

const IndustryZoneSection: React.FC<IndustryZoneSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <HeroSection>
        <HeroImage src="/assets/images/masterPlan/industryZone/hero.jpg" alt="Industry Zone" />
        <Overlay />
        <ContentBox>
          <Breadcrumb>
            <a href="/">Home</a>
            <span className="separator">›</span>
            <a href="/master-plan">Master Plan</a>
            <span className="separator">›</span>
            <span className="current">Industry Zone</span>
          </Breadcrumb>
          <Title>Industry Zone</Title>
        </ContentBox>
      </HeroSection>
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <IntroText>
                The APOZ industrial zone is designed as a smart logistics and manufacturing hub, integrating Foreign Trade Zone (FTZ) operations with Qualified Opportunity Zone (QOZ) investor advantages.
              </IntroText>
              <IntroText>
                Industrial zone management ensures smooth operations for tenants while maximizing the site's competitive benefits.
              </IntroText>
              <SubsectionTitle>Core Development Features</SubsectionTitle>
              <p>
                Manage facilities, infrastructure, and bonded warehouses. Coordinate with U.S. Customs & Border Protection (CBP) for FTZ compliance. Provide integrated logistics, supply chain, and tenant services. Support cross-border manufacturers relocating to the U.S.
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                <rect x="60" y="180" width="120" height="130" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="75" y="200" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="105" y="200" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="135" y="200" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="75" y="245" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="105" y="245" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="135" y="245" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="85" y="145" width="70" height="45" rx="3" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <text x="120" y="173" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#0a3a3f">FTZ</text>
                <rect x="220" y="200" width="100" height="110" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="235" y="220" width="20" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="265" y="220" width="20" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="295" y="220" width="20" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="360" y="220" width="80" height="90" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="400" cy="265" r="25" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <path d="M 385 265 L 415 265 M 400 250 L 400 280" stroke="#0a3a3f" strokeWidth="2"/>
                <rect x="470" y="240" width="100" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <path d="M 490 275 L 520 260 L 550 275 L 520 290 Z" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <p style={{ color: 'white', fontSize: '1.125rem', lineHeight: '1.8' }}>
            Strategic master planning integrates FTZ-171 advantages with QOZ tax incentives, creating a world-class industrial ecosystem positioned along the Houston Gulf Coast Corridor for advanced manufacturing and global trade infrastructure.
          </p>
        </TealBox>
      </TealSection>

      <GreySection>
        <Container>
          <ContentWrapper>
            <SectionTitle>Key Infrastructure Services</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Scope</th>
                  <th>Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tenant Operations</strong></td>
                  <td>Leasing, onboarding, site orientation, and ongoing tenant relations.</td>
                  <td>Increases occupancy & tenant retention.</td>
                </tr>
                <tr>
                  <td><strong>FTZ Administration</strong></td>
                  <td>Duty-free operations, customs reporting, bonded storage, and compliance audits.</td>
                  <td>Maximizes cost savings for tenants and investors.</td>
                </tr>
                <tr>
                  <td><strong>Infrastructure Management</strong></td>
                  <td>Roads, drainage, power, telecom, EV-ready facilities.</td>
                  <td>Maintains site efficiency & reliability.</td>
                </tr>
                <tr>
                  <td><strong>Logistics Coordination</strong></td>
                  <td>Trucking, rail, and last-mile distribution optimization.</td>
                  <td>Reduces supply chain costs & increases APOZ competitiveness.</td>
                </tr>
                <tr>
                  <td><strong>Safety & Security</strong></td>
                  <td>24/7 monitoring, customs-controlled entry, and ESG compliance.</td>
                  <td>Protects tenants, workers, and cargo.</td>
                </tr>
              </tbody>
            </StyledTable>
          </ContentWrapper>
        </Container>
      </GreySection>
    </>
  );
};

export default IndustryZoneSection;
