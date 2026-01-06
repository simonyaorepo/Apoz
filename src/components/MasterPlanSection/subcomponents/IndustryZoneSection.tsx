import React from "react";
import TextHero from "../../TextHero";
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
  StyledTable,
} from "./SharedStyles";

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
      <TextHero
        title="Industry Zone"
        backgroundImage="https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Master Plan", href: "/master-plan" },
          { label: "Industry Zone" }
        ]}
      />
      
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
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Core Development Features</h3>
              <BulletList>
                <li>Manage facilities, infrastructure, and bonded warehouses.</li>
                <li>Coordinate with U.S. Customs & Border Protection (CBP) for FTZ compliance.</li>
                <li>Provide integrated logistics, supply chain, and tenant services.</li>
                <li>Support cross-border manufacturers relocating to the U.S.</li>
              </BulletList>
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
