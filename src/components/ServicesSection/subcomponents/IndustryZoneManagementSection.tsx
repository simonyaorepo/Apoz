import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import GoldDivider from "../../ui/GoldDivider";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { ContentGrid, GreyContentGrid } from "../../ui/Grids";
import { TextContent, SubsectionTitle } from "../../ui/Typography";
import { IllustrationBox, ImageBox } from "../../ui/Media";
import { StyledTable } from "../../ui/Table";

const TealText = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  margin: 0;
`;

const IntroTextContent = styled(TextContent)`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

interface IndustryZoneManagementSectionProps {
  onNavigate: (page: string) => void;
}

const IndustryZoneManagementSection: React.FC<IndustryZoneManagementSectionProps> = ({ onNavigate: _onNavigate }) => {
  const { t } = useTranslation(['services', 'common']);
  
  const services = [
    {
      category: t('services:industryZoneManagement.service1_category'),
      scope: t('services:industryZoneManagement.service1_scope'),
      impact: t('services:industryZoneManagement.service1_impact')
    },
    {
      category: t('services:industryZoneManagement.service2_category'),
      scope: t('services:industryZoneManagement.service2_scope'),
      impact: t('services:industryZoneManagement.service2_impact')
    },
    {
      category: t('services:industryZoneManagement.service3_category'),
      scope: t('services:industryZoneManagement.service3_scope'),
      impact: t('services:industryZoneManagement.service3_impact')
    },
    {
      category: t('services:industryZoneManagement.service4_category'),
      scope: t('services:industryZoneManagement.service4_scope'),
      impact: t('services:industryZoneManagement.service4_impact')
    },
    {
      category: t('services:industryZoneManagement.service5_category'),
      scope: t('services:industryZoneManagement.service5_scope'),
      impact: t('services:industryZoneManagement.service5_impact')
    }
  ];
  
  return (
    <>
      <TextHero
        title={t('services:industryZoneManagement.title')}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.services'), href: "/services" },
          { label: t('common:nav.industryZoneManagement') }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <IntroTextContent>
            <p>{t('services:industryZoneManagement.intro1')}</p>
            <p>{t('services:industryZoneManagement.intro2')}</p>
          </IntroTextContent>
          <ContentGrid>
            <TextContent>
              <SubsectionTitle>{t('services:industryZoneManagement.core_responsibilities_title')}</SubsectionTitle>
              <p>
                {t('services:industryZoneManagement.core_responsibilities_text')}
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
            {t('industryZoneManagement.tealIntro')}
          </TealText>
        </TealBox>
      </TealSection>
      
      <GreySection $reducedTopPadding>
        <Container>
          <TextContent>
            <SubsectionTitle>{t('sectionHeaders.keyManagementServices')}</SubsectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>{t('services:tableHeaders.category')}</th>
                  <th>{t('services:tableHeaders.scope')}</th>
                  <th>{t('services:tableHeaders.impact')}</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, idx) => (
                  <tr key={idx}>
                    <td data-label={t('services:tableHeaders.category')}>{service.category}</td>
                    <td data-label={t('services:tableHeaders.scope')}>{service.scope}</td>
                    <td data-label={t('services:tableHeaders.impact')}>{service.impact}</td>
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
              <SubsectionTitle>{t('services:industryZoneManagement.tenantSupport_heading')}</SubsectionTitle>
              <p>
                {t('services:industryZoneManagement.tenantSupport_text')}
              </p>
            </TextContent>
          </GreyContentGrid>
        </Container>
      </GreySection>

      <GreySection>
        <Container>
          <TextContent>
            <SubsectionTitle>{t('services:industryZoneManagement.technology_heading')}</SubsectionTitle>
            <p>
              {t('services:industryZoneManagement.technology_text')}
            </p>
          </TextContent>
        </Container>
      </GreySection>
    </>
  );
};

export default IndustryZoneManagementSection;
