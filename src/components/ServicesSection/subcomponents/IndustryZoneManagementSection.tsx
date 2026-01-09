import React from "react";
import TextHero from "../../TextHero";
import GoldDivider from "../../ui/GoldDivider";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { ContentGrid, GreyContentGrid } from "../../ui/Grids";
import { TextContent, SubsectionTitle } from "../../ui/Typography";
import { IllustrationBox, ImageBox } from "../../ui/Media";
import { StyledTable } from "../../ui/Table";
import { INDUSTRY_ZONE_MANAGEMENT_DATA } from "../servicesSectionData";

const TealText = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  margin: 0;
`;

interface IndustryZoneManagementSectionProps {
  onNavigate: (page: string) => void;
}

const IndustryZoneManagementSection: React.FC<IndustryZoneManagementSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title={INDUSTRY_ZONE_MANAGEMENT_DATA.title}
        backgroundImage={INDUSTRY_ZONE_MANAGEMENT_DATA.backgroundImage}
        breadcrumbs={INDUSTRY_ZONE_MANAGEMENT_DATA.breadcrumbs}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              {INDUSTRY_ZONE_MANAGEMENT_DATA.content.intro.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              <SubsectionTitle>Core Responsibilities</SubsectionTitle>
              <p>
                The management team oversees day-to-day operations of all industrial facilities including maintenance, security, and regulatory compliance. They coordinate Foreign-Trade Zone (FTZ) operations and ensure all customs procedures meet federal requirements, while supporting tenant businesses through lease management and operational services remains a key priority. Maintaining infrastructure systems such as utilities, roads, and waste management ensures smooth operations across the park.
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Industrial warehouse 1 */}
                <rect x="60" y="180" width="120" height="130" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="75" y="200" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="105" y="200" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="135" y="200" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="75" y="245" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="105" y="245" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="135" y="245" width="22" height="28" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* FTZ Badge */}
                <rect x="85" y="145" width="70" height="45" rx="3" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <text x="120" y="173" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#0a3a3f">FTZ</text>
                
                {/* Bonded warehouse */}
                <rect x="210" y="200" width="110" height="110" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="210" y1="255" x2="320" y2="255" stroke="#0a3a3f" strokeWidth="1.5"/>
                <rect x="225" y="220" width="30" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="270" y="220" width="30" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="225" y="270" width="30" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="270" y="270" width="30" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Truck/Logistics */}
                <rect x="360" y="250" width="90" height="60" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="375" y="235" width="20" height="15" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <circle cx="380" cy="310" r="12" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="430" cy="310" r="12" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="365" y1="265" x2="445" y2="265" stroke="#0a3a3f" strokeWidth="1"/>
                
                {/* Customs gate/checkpoint */}
                <rect x="480" y="240" width="45" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="502" y1="240" x2="502" y2="210" stroke="#0a3a3f" strokeWidth="2"/>
                <rect x="492" y="205" width="20" height="12" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Security camera */}
                <circle cx="560" cy="220" r="18" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <path d="M 545 220 L 560 210 L 575 220" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="555" y="238" width="10" height="15" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealText>
            APOZ industrial zone management integrates Foreign-Trade Zone (FTZ) operations with comprehensive tenant services, infrastructure oversight, and logistics coordination to maximize cost savings and operational efficiency for manufacturing and distribution tenants.
          </TealText>
        </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <TextContent>
            <SubsectionTitle>Key Management Services</SubsectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Scope</th>
                  <th>Impact</th>
                </tr>
              </thead>
              <tbody>
                {INDUSTRY_ZONE_MANAGEMENT_DATA.content.services.map((service, idx) => (
                  <tr key={idx}>
                    <td data-label="Category">{service.category}</td>
                    <td data-label="Scope">{service.scope}</td>
                    <td data-label="Impact">{service.impact}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TextContent>
        </Container>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <Container>
          <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Industrial zone management"
              />
            </ImageBox>
            <TextContent>
              <SubsectionTitle>{INDUSTRY_ZONE_MANAGEMENT_DATA.content.tenantSupport.heading}</SubsectionTitle>
              <p>
                Tenants receive comprehensive support including FTZ compliance assistance to maximize duty savings and navigate customs regulations. The team provides ongoing operational guidance for manufacturing and logistics processes, while facilitating connections to local suppliers, service providers, and business networks. Additional support includes workforce recruitment assistance and training program coordination to help businesses build and retain qualified teams.
              </p>
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>

      <GreySection>
        <Container>
          <TextContent>
            <SubsectionTitle>{INDUSTRY_ZONE_MANAGEMENT_DATA.content.technology.heading}</SubsectionTitle>
            <p>
              The industrial zone leverages advanced technology systems for enhanced security and operational efficiency. Real-time monitoring of utilities and environmental systems ensures optimal facility performance, while digital platforms streamline FTZ documentation and customs reporting. Smart building controls optimize energy usage across all facilities, reducing costs and supporting sustainability goals.
            </p>
          </TextContent>
        </Container>
      </GreySection>
    </>
  );
};

export default IndustryZoneManagementSection;
