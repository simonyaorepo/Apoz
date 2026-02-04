import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import GoldDivider from "../../ui/GoldDivider";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { ContentGrid, GreyContentGrid } from "../../ui/Grids";
import { TextContent, SubsectionTitle, IntroTextContent } from "../../ui/Typography";
import { IllustrationBox, ImageBox } from "../../ui/Media";
import { StyledTable } from "../../ui/Table";

const TealText = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  margin: 0;
`;

interface ResidentialManagementSectionProps {
  onNavigate: (page: string) => void;
}

const ResidentialManagementSection: React.FC<ResidentialManagementSectionProps> = () => {
  const { t } = useTranslation(['services', 'common']);
  
  const coreServices = [
    {
      category: t('services:residentialManagement.coreService1_category'),
      scope: t('services:residentialManagement.coreService1_scope'),
      impact: t('services:residentialManagement.coreService1_impact')
    },
    {
      category: t('services:residentialManagement.coreService2_category'),
      scope: t('services:residentialManagement.coreService2_scope'),
      impact: t('services:residentialManagement.coreService2_impact')
    },
    {
      category: t('services:residentialManagement.coreService3_category'),
      scope: t('services:residentialManagement.coreService3_scope'),
      impact: t('services:residentialManagement.coreService3_impact')
    },
    {
      category: t('services:residentialManagement.coreService4_category'),
      scope: t('services:residentialManagement.coreService4_scope'),
      impact: t('services:residentialManagement.coreService4_impact')
    },
    {
      category: t('services:residentialManagement.coreService5_category'),
      scope: t('services:residentialManagement.coreService5_scope'),
      impact: t('services:residentialManagement.coreService5_impact')
    }
  ];
  
  return (
    <>
      <TextHero
        title={t('services:residentialManagement.title')}
        backgroundImage="https://images.unsplash.com/photo-1605146769289-440113cc3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.services'), href: "/services" },
          { label: t('common:nav.residentialManagement') }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <IntroTextContent>
            <p>{t('services:residentialManagement.intro')}</p>
          </IntroTextContent>
        </Container>
        <ContentGrid>
            <TextContent>
              <SubsectionTitle>{t('services:residentialManagement.primary_objectives_title')}</SubsectionTitle>
              <p>
                {t('services:residentialManagement.primary_objectives_text')}
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="currentColor" strokeWidth="2"/>
                
                {/* Residential buildings */}
                <path d="M 80 240 L 105 215 L 130 240" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="85" y="240" width="40" height="70" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="95" y="255" width="10" height="12" stroke="currentColor" strokeWidth="1" fill="none"/>
                <rect x="110" y="255" width="10" height="12" stroke="currentColor" strokeWidth="1" fill="none"/>
                
                <path d="M 165 240 L 190 215 L 215 240" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="170" y="240" width="40" height="70" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="180" y="255" width="10" height="12" stroke="currentColor" strokeWidth="1" fill="none"/>
                <rect x="195" y="255" width="10" height="12" stroke="currentColor" strokeWidth="1" fill="none"/>
                
                {/* Amenities building */}
                <rect x="280" y="230" width="80" height="80" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="295" y="250" width="20" height="25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="330" y="250" width="20" height="25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                
                {/* People */}
                <circle cx="420" cy="270" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
                <line x1="420" y1="282" x2="420" y2="300" stroke="currentColor" strokeWidth="2"/>
                
                {/* Maintenance vehicle */}
                <rect x="480" y="270" width="60" height="40" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="500" cy="310" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="520" cy="310" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </IllustrationBox>
        </ContentGrid>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealText>
            {t('services:residentialManagement.integration_text')}
          </TealText>
        </TealBox>
      </TealSection>
      
      <GreySection $reducedTopPadding>
        <Container>
          <TextContent>
            <SubsectionTitle>{t('services:residentialManagement.core_services_title')}</SubsectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>{t('services:tableHeaders.category')}</th>
                  <th>{t('services:tableHeaders.scope')}</th>
                  <th>{t('services:tableHeaders.impact')}</th>
                </tr>
              </thead>
              <tbody>
                {coreServices.map((service, idx) => (
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
        <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Residential management"
              />
            </ImageBox>
            <TextContent>
              <SubsectionTitle>{t('services:residentialManagement.technology_title')}</SubsectionTitle>
              <p>
                {t('services:residentialManagement.technology_text')}
              </p>
            </TextContent>
        </GreyContentGrid>
      </GreySection>
    </>
  );
};

export default ResidentialManagementSection;

