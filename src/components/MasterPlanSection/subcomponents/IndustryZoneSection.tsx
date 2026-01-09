import React from "react";
import TextHero from "../../TextHero";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { TealText } from "../../ui/TealComponents";
import { Container } from "../../ui/Containers";
import { ContentGrid } from "../../ui/Grids";
import { TextContent, IntroText, SectionTitle, SubsectionTitle } from "../../ui/Typography";
import { IllustrationBox } from "../../ui/Media";
import { StyledTable } from "../../ui/Table";

interface IndustryZoneSectionProps {
  onNavigate: (page: string) => void;
}

const IndustryZoneSection: React.FC<IndustryZoneSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title="Industry Zone"
        backgroundImage="/assets/images/masterPlan/industryZone/hero.jpg"
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
          <TealText>
            Strategic master planning integrates FTZ-171 advantages with QOZ tax incentives, creating a world-class industrial ecosystem positioned along the Houston Gulf Coast Corridor for advanced manufacturing and global trade infrastructure.
          </TealText>
        </TealBox>
      </TealSection>

      <GreySection>
        <Container>
          <TextContent>
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
                  <td data-label="Category"><strong>Tenant Operations</strong></td>
                  <td data-label="Scope">Leasing, onboarding, site orientation, and ongoing tenant relations.</td>
                  <td data-label="Impact">Increases occupancy & tenant retention.</td>
                </tr>
                <tr>
                  <td data-label="Category"><strong>FTZ Administration</strong></td>
                  <td data-label="Scope">Duty-free operations, customs reporting, bonded storage, and compliance audits.</td>
                  <td data-label="Impact">Maximizes cost savings for tenants and investors.</td>
                </tr>
                <tr>
                  <td data-label="Category"><strong>Infrastructure Management</strong></td>
                  <td data-label="Scope">Roads, drainage, power, telecom, EV-ready facilities.</td>
                  <td data-label="Impact">Maintains site efficiency & reliability.</td>
                </tr>
                <tr>
                  <td data-label="Category"><strong>Logistics Coordination</strong></td>
                  <td data-label="Scope">Trucking, rail, and last-mile distribution optimization.</td>
                  <td data-label="Impact">Reduces supply chain costs & increases APOZ competitiveness.</td>
                </tr>
                <tr>
                  <td data-label="Category"><strong>Safety & Security</strong></td>
                  <td data-label="Scope">24/7 monitoring, customs-controlled entry, and ESG compliance.</td>
                  <td data-label="Impact">Protects tenants, workers, and cargo.</td>
                </tr>
              </tbody>
            </StyledTable>
          </TextContent>
        </Container>
      </GreySection>
    </>
  );
};

export default IndustryZoneSection;
