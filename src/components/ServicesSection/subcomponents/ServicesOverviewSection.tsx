import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { TealTitle, TealSubtitle, TealText, TealContentBlock } from "../../ui/TealComponents";
import { Container } from "../../ui/Containers";
import { ContentGrid } from "../../ui/Grids";
import { TextContent, SubsectionTitle } from "../../ui/Typography";
import { IllustrationBox } from "../../ui/Media";

const ServicesList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ServiceCard = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.goldAccent};
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(10, 58, 63, 0.03);
  
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.foreground};
    margin: 0;
  }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.goldAccent};
  
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 0;
  }
`;

interface ServicesOverviewSectionProps {
  onNavigate: (page: string) => void;
}

const ServicesOverviewSection: React.FC<ServicesOverviewSectionProps> = ({ onNavigate: _onNavigate }) => {
  const { t } = useTranslation('services');
  const { t: tCommon } = useTranslation('common');
  
  return (
    <>
      <TextHero
        title={t('overview.title')}
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: tCommon('breadcrumbs.home'), href: '/' },
          { label: t('overview.title') }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <p>{t('overview.intro')}</p>
              <SubsectionTitle>{tCommon('keyOfferings', 'Key Offerings')}</SubsectionTitle>
              <ServicesList>
                <ServiceCard>
                  <h4>{t('overview.coreService1_title')}</h4>
                  <p>{t('overview.coreService1_description')}</p>
                </ServiceCard>
                <ServiceCard>
                  <h4>{t('overview.coreService2_title')}</h4>
                  <p>{t('overview.coreService2_description')}</p>
                </ServiceCard>
                <ServiceCard>
                  <h4>{t('overview.coreService3_title')}</h4>
                  <p>{t('overview.coreService3_description')}</p>
                </ServiceCard>
                <ServiceCard>
                  <h4>{t('overview.coreService4_title')}</h4>
                  <p>{t('overview.coreService4_description')}</p>
                </ServiceCard>
                <ServiceCard>
                  <h4>{t('overview.coreService5_title')}</h4>
                  <p>{t('overview.coreService5_description')}</p>
                </ServiceCard>
              </ServicesList>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Industrial building */}
                <rect x="60" y="200" width="100" height="110" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="75" y="220" width="20" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="110" y="220" width="20" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="75" y="260" width="20" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="110" y="260" width="20" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Residential homes */}
                <path d="M 190 240 L 215 215 L 240 240" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="195" y="240" width="40" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="205" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="220" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                
                {/* Trade/logistics icon */}
                <rect x="280" y="240" width="80" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="320" cy="275" r="25" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <path d="M 305 275 L 335 275 M 320 260 L 320 290" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Investment/money icon */}
                <circle cx="420" cy="260" r="40" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <text x="420" y="275" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#0a3a3f">$</text>
                
                {/* Services hub */}
                <rect x="490" y="220" width="90" height="90" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="535" cy="265" r="15" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="520" y1="265" x2="510" y2="265" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="550" y1="265" x2="560" y2="265" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="535" y1="250" x2="535" y2="240" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="535" y1="280" x2="535" y2="290" stroke="#0a3a3f" strokeWidth="2"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealTitle>{t('overview.tradeLogistics_heading')}</TealTitle>
          <TealContentBlock>
            <TealSubtitle>{t('overview.tradeLogistics1_title')}</TealSubtitle>
            <TealText>{t('overview.tradeLogistics1_description')}</TealText>
          </TealContentBlock>
          <TealContentBlock>
            <TealSubtitle>{t('overview.tradeLogistics2_title')}</TealSubtitle>
            <TealText>{t('overview.tradeLogistics2_description')}</TealText>
          </TealContentBlock>
          <TealContentBlock>
            <TealSubtitle>{t('overview.tradeLogistics3_title')}</TealSubtitle>
            <TealText>{t('overview.tradeLogistics3_description')}</TealText>
          </TealContentBlock>
          <TealContentBlock>
            <TealSubtitle>{t('overview.tradeLogistics4_title')}</TealSubtitle>
            <TealText>{t('overview.tradeLogistics4_description')}</TealText>
          </TealContentBlock>
        </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <TextContent>
            <SubsectionTitle>{t('overview.tenantServices_heading')}</SubsectionTitle>
            <p dangerouslySetInnerHTML={{ __html: t('overview.tenantService1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('overview.tenantService2') }} />
            <p dangerouslySetInnerHTML={{ __html: t('overview.tenantService3') }} />
            <p dangerouslySetInnerHTML={{ __html: t('overview.tenantService4') }} />
          </TextContent>
        </Container>
      </GreySection>

      <GreySection>
        <Container>
          <TextContent>
            <SubsectionTitle>{tCommon('serviceAdvantage', 'APOZ Service Advantage')}</SubsectionTitle>
            <AdvantagesGrid>
              <AdvantageCard>
                <h4>{t('overview.advantage1_feature')}</h4>
                <p>{t('overview.advantage1_edge')}</p>
              </AdvantageCard>
              <AdvantageCard>
                <h4>{t('overview.advantage2_feature')}</h4>
                <p>{t('overview.advantage2_edge')}</p>
              </AdvantageCard>
              <AdvantageCard>
                <h4>{t('overview.advantage3_feature')}</h4>
                <p>{t('overview.advantage3_edge')}</p>
              </AdvantageCard>
              <AdvantageCard>
                <h4>{t('overview.advantage4_feature')}</h4>
                <p>{t('overview.advantage4_edge')}</p>
              </AdvantageCard>
            </AdvantagesGrid>
          </TextContent>
        </Container>
      </GreySection>
    </>
  );
};

export default ServicesOverviewSection;
