import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import GoldDivider from "../../ui/GoldDivider";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { ContentGrid, GreyContentGrid, TwoColumnGrid } from "../../ui/Grids";
import { TextContent, SubsectionTitle } from "../../ui/Typography";
import { IllustrationBox, ImageBox } from "../../ui/Media";
import { OutlineCard } from "../../ui/Cards";
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

interface CommunityManagementSectionProps {
  onNavigate: (page: string) => void;
}

const CommunityManagementSection: React.FC<CommunityManagementSectionProps> = ({ onNavigate: _onNavigate }) => {
  const { t } = useTranslation(['services', 'common']);
  
  const services = [
    {
      category: t('services:communityManagement.service1_category'),
      scope: t('services:communityManagement.service1_scope'),
      impact: t('services:communityManagement.service1_impact')
    },
    {
      category: t('services:communityManagement.service2_category'),
      scope: t('services:communityManagement.service2_scope'),
      impact: t('services:communityManagement.service2_impact')
    },
    {
      category: t('services:communityManagement.service3_category'),
      scope: t('services:communityManagement.service3_scope'),
      impact: t('services:communityManagement.service3_impact')
    },
    {
      category: t('services:communityManagement.service4_category'),
      scope: t('services:communityManagement.service4_scope'),
      impact: t('services:communityManagement.service4_impact')
    },
    {
      category: t('services:communityManagement.service5_category'),
      scope: t('services:communityManagement.service5_scope'),
      impact: t('services:communityManagement.service5_impact')
    }
  ];

  const divisions = [
    {
      name: t('services:communityManagement.division1_name'),
      description: t('services:communityManagement.division1_description')
    },
    {
      name: t('services:communityManagement.division2_name'),
      description: t('services:communityManagement.division2_description')
    },
    {
      name: t('services:communityManagement.division3_name'),
      description: t('services:communityManagement.division3_description')
    },
    {
      name: t('services:communityManagement.division4_name'),
      description: t('services:communityManagement.division4_description')
    }
  ];
  
  return (
    <>
      <TextHero
        title={t('services:communityManagement.title')}
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.services'), href: "/services" },
          { label: t('common:nav.communityManagement') }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <IntroTextContent>
            <p>{t('services:communityManagement.intro1')}</p>
            <p>{t('services:communityManagement.intro2')}</p>
          </IntroTextContent>
        </Container>
        <ContentGrid>
            <TextContent>
              <SubsectionTitle>{t('services:communityManagement.core_goals_title')}</SubsectionTitle>
              <p>
                {t('services:communityManagement.core_goals_text')}
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Community buildings - residential */}
                <path d="M 80 240 L 105 215 L 130 240" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="85" y="240" width="40" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="95" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="110" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                
                <path d="M 145 240 L 170 215 L 195 240" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="150" y="240" width="40" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="160" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="175" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                
                {/* Park/Green space */}
                <circle cx="260" cy="270" r="25" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="240" cy="290" r="18" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <circle cx="280" cy="295" r="15" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Community center */}
                <rect x="330" y="230" width="90" height="80" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="345" y="250" width="25" height="30" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="380" y="250" width="25" height="30" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <circle cx="375" cy="220" r="8" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Playground */}
                <rect x="450" y="280" width="35" height="30" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="467" cy="265" r="10" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="467" y1="275" x2="467" y2="280" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* People icons */}
                <circle cx="520" cy="270" r="12" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="520" y1="282" x2="520" y2="300" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="520" y1="288" x2="510" y2="295" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="520" y1="288" x2="530" y2="295" stroke="#0a3a3f" strokeWidth="2"/>
                
                <circle cx="555" cy="270" r="12" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="555" y1="282" x2="555" y2="300" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="555" y1="288" x2="545" y2="295" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="555" y1="288" x2="565" y2="295" stroke="#0a3a3f" strokeWidth="2"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealText>
            {t('communityManagement.tealIntro')}
          </TealText>
        </TealBox>
      </TealSection>
      
      <GreySection $reducedTopPadding>
        <Container>
          <TextContent>
            <SubsectionTitle>{t('sectionHeaders.keyCommunityServices')}</SubsectionTitle>
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
        <GreyContentGrid>
            <ImageBox>
              <img 
                src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800" 
                alt="Community management"
              />
            </ImageBox>
            <TextContent>
              <SubsectionTitle>{t('services:communityManagement.integration_heading')}</SubsectionTitle>
              <p>
                {t('services:communityManagement.integration_full_text')}
              </p>
            </TextContent>
        </GreyContentGrid>
      </GreySection>

      <GreySection>
        <Container>
          <TextContent>
            <SubsectionTitle>{t('services:communityManagement.teamFunctions_heading')}</SubsectionTitle>
            <TwoColumnGrid>
              {divisions.map((division, idx) => (
                <OutlineCard key={idx}>
                  <h4>{division.name}</h4>
                  <p>{division.description}</p>
                </OutlineCard>
              ))}
            </TwoColumnGrid>
          </TextContent>
        </Container>
      </GreySection>
    </>
  );
};

export default CommunityManagementSection;
