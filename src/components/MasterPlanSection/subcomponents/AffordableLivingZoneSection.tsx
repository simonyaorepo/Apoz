import React from "react";
import TextHero from "../../TextHero";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { ContentGrid } from "../../ui/Grids";
import { TextContent, IntroText, SectionTitle, SubsectionTitle } from "../../ui/Typography";
import { IllustrationBox } from "../../ui/Media";
import { StyledTable } from "../../ui/Table";
import { BulletList } from "../../ui/Lists";

interface AffordableLivingZoneSectionProps {
  onNavigate: (page: string) => void;
}

const AffordableLivingZoneSection: React.FC<AffordableLivingZoneSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title="Affordable Living Zone"
        backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Master Plan", href: "/master-plan" },
          { label: "Affordable Living Zone" }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <IntroText>
                The residential component of APOZ supports the Phase 1 industrial tenants by providing affordable, high-quality workforce housing within walking or short commuting distance to the industrial park.
              </IntroText>
              <SubsectionTitle>Development Objectives</SubsectionTitle>
              <p>
                Manage 2,000 affordable homes under Phase 2 development. Provide property services and community amenities to residents. Ensure sustainable, livable, and attractive environments for families. Support APOZ's vision as an integrated 'live-work-play' ecosystem.
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                <path d="M 60 240 L 90 215 L 120 240" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="65" y="240" width="50" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="75" y="255" width="12" height="15" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="95" y="255" width="12" height="15" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="80" y="280" width="15" height="25" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <path d="M 150 240 L 180 215 L 210 240" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="155" y="240" width="50" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="165" y="255" width="12" height="15" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="185" y="255" width="12" height="15" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="170" y="280" width="15" height="25" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <path d="M 240 240 L 270 215 L 300 240" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="245" y="240" width="50" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="255" y="255" width="12" height="15" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="275" y="255" width="12" height="15" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="260" y="280" width="15" height="25" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="340" y="245" width="60" height="65" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="370" cy="277" r="15" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <path d="M 360 272 L 370 282 L 380 267" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="430" y="260" width="50" height="50" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="440" y="275" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="455" y="275" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="445" y="293" width="15" height="15" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <circle cx="540" cy="275" r="35" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <path d="M 515 285 Q 530 295 545 285" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="525" cy="270" r="3" fill="#0a3a3f"/>
                <circle cx="555" cy="270" r="3" fill="#0a3a3f"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <p style={{ color: 'white', lineHeight: '1.8' }}>
            Affordable housing development integrated with QOF/LIHTC financing creates a sustainable residential ecosystem supporting industrial workforce needs while delivering long-term value through high occupancy stability and tax-advantaged returns.
          </p>
        </TealBox>
      </TealSection>

      <GreySection>
        <Container>
          <TextContent>
            <SectionTitle>Core Development Services</SectionTitle>
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
                  <td><strong>Leasing & Tenant Relations</strong></td>
                  <td>Manage rental agreements, onboarding, and renewals.</td>
                  <td>Maintains high occupancy rates and predictable income.</td>
                </tr>
                <tr>
                  <td><strong>Property Maintenance</strong></td>
                  <td>Ongoing repairs, landscaping, and facility upkeep.</td>
                  <td>Enhances asset value and resident satisfaction.</td>
                </tr>
                <tr>
                  <td><strong>Community Services</strong></td>
                  <td>Operate parks, schools, clinics, recreation areas, and local retail.</td>
                  <td>Creates a well-rounded residential experience.</td>
                </tr>
                <tr>
                  <td><strong>Security & Safety</strong></td>
                  <td>On-site 24/7 security and compliance with housing regulations.</td>
                  <td>Ensures a safe and comfortable living environment.</td>
                </tr>
                <tr>
                  <td><strong>Sustainability Programs</strong></td>
                  <td>Implement energy efficiency, waste management, and green spaces.</td>
                  <td>Aligns with ESG-focused investment strategies.</td>
                </tr>
              </tbody>
            </StyledTable>

            <SubsectionTitle>Integration Benefits</SubsectionTitle>
            <BulletList>
              <li>Attracts skilled labor for Phase 1 industrial tenants.</li>
              <li>Improves employee retention through housing stability.</li>
              <li>Enhances the long-term appeal of APOZ for manufacturers and logistics operators.</li>
              <li>High Occupancy Stability: Workforce-driven demand ensures consistent rental yields.</li>
              <li>QOZ Tax Advantages: Residential investments benefit from capital gains deferral and tax-free growth.</li>
              <li>REIT Readiness: Stabilized residential assets can be securitized for exit strategies.</li>
            </BulletList>
          </TextContent>
        </Container>
      </GreySection>
    </>
  );
};

export default AffordableLivingZoneSection;
