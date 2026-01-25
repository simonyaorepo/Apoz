import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { TealText } from "../../ui/TealComponents";
import { Container } from "../../ui/Containers";
import { ContentGrid } from "../../ui/Grids";
import { TextContent, IntroText, SectionTitle, SubsectionTitle } from "../../ui/Typography";
import { IllustrationBox } from "../../ui/Media";
import { StyledTable } from "../../ui/Table";
import { BulletList } from "../../ui/Lists";

const IntroTextContent = styled(TextContent)`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

interface AffordableLivingZoneSectionProps {
  onNavigate: (page: string) => void;
}

const AffordableLivingZoneSection: React.FC<AffordableLivingZoneSectionProps> = ({ onNavigate: _onNavigate }) => {
  const { t } = useTranslation(['masterPlan', 'common']);
  
  return (
    <>
      <TextHero
        title={t('affordableLiving.title', 'Affordable Living Zone')}
        backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.masterPlan'), href: "/master-plan" },
          { label: t('common:breadcrumbs.affordableLivingZone') }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <IntroTextContent>
            <IntroText>
              {t('affordableLiving.intro_paragraph')}
            </IntroText>
          </IntroTextContent>
          <ContentGrid>
            <TextContent>
              <SubsectionTitle>{t('affordableLiving.objectives_title', 'Development Objectives')}</SubsectionTitle>
              <p>
                {t('affordableLiving.objectives_description')}
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
          <TealText>
            {t('affordableLiving.teal_description')}
          </TealText>
        </TealBox>
      </TealSection>

      <GreySection $reducedTopPadding>
        <Container>
          <TextContent>
            <SectionTitle>{t('affordableLiving.services_title')}</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>{t('affordableLiving.table_category_header')}</th>
                  <th>{t('affordableLiving.table_scope_header')}</th>
                  <th>{t('affordableLiving.table_impact_header')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label={t('affordableLiving.table_category_header')}><strong>{t('affordableLiving.table_leasing_tenant_category')}</strong></td>
                  <td data-label={t('affordableLiving.table_scope_header')}>{t('affordableLiving.table_leasing_tenant_scope')}</td>
                  <td data-label={t('affordableLiving.table_impact_header')}>{t('affordableLiving.table_leasing_tenant_impact')}</td>
                </tr>
                <tr>
                  <td data-label={t('affordableLiving.table_category_header')}><strong>{t('affordableLiving.table_property_maintenance_category')}</strong></td>
                  <td data-label={t('affordableLiving.table_scope_header')}>{t('affordableLiving.table_property_maintenance_scope')}</td>
                  <td data-label={t('affordableLiving.table_impact_header')}>{t('affordableLiving.table_property_maintenance_impact')}</td>
                </tr>
                <tr>
                  <td data-label={t('affordableLiving.table_category_header')}><strong>{t('affordableLiving.table_community_services_category')}</strong></td>
                  <td data-label={t('affordableLiving.table_scope_header')}>{t('affordableLiving.table_community_services_scope')}</td>
                  <td data-label={t('affordableLiving.table_impact_header')}>{t('affordableLiving.table_community_services_impact')}</td>
                </tr>
                <tr>
                  <td data-label={t('affordableLiving.table_category_header')}><strong>{t('affordableLiving.table_security_safety_category')}</strong></td>
                  <td data-label={t('affordableLiving.table_scope_header')}>{t('affordableLiving.table_security_safety_scope')}</td>
                  <td data-label={t('affordableLiving.table_impact_header')}>{t('affordableLiving.table_security_safety_impact')}</td>
                </tr>
                <tr>
                  <td data-label={t('affordableLiving.table_category_header')}><strong>{t('affordableLiving.table_sustainability_programs_category')}</strong></td>
                  <td data-label={t('affordableLiving.table_scope_header')}>{t('affordableLiving.table_sustainability_programs_scope')}</td>
                  <td data-label={t('affordableLiving.table_impact_header')}>{t('affordableLiving.table_sustainability_programs_impact')}</td>
                </tr>
              </tbody>
            </StyledTable>

            <SubsectionTitle>{t('affordableLiving.integration_benefits_title')}</SubsectionTitle>
            <BulletList>
              <li>{t('affordableLiving.benefit1')}</li>
              <li>{t('affordableLiving.benefit2')}</li>
              <li>{t('affordableLiving.benefit3')}</li>
              <li>{t('affordableLiving.benefit4')}</li>
              <li>{t('affordableLiving.benefit5')}</li>
              <li>{t('affordableLiving.benefit6')}</li>
            </BulletList>
          </TextContent>
        </Container>
      </GreySection>
    </>
  );
};

export default AffordableLivingZoneSection;
