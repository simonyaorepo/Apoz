import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { TealText } from "../../ui/TealComponents";
import { Container } from "../../ui/Containers";
import { ContentGrid } from "../../ui/Grids";
import { TextContent, SectionTitle, SubsectionTitle, IntroTextContent } from "../../ui/Typography";
import { IllustrationBox } from "../../ui/Media";
import { StyledTable } from "../../ui/Table";

interface IndustryZoneSectionProps {
  onNavigate: (page: string) => void;
}

const IndustryZoneSection: React.FC<IndustryZoneSectionProps> = () => {
  const { t } = useTranslation(['masterPlan', 'common']);
  
  return (
    <>
      <TextHero
        title={t('industryZone.title', 'Industry Zone')}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.masterPlan'), href: "/master-plan" },
          { label: t('common:breadcrumbs.industryZone') }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <IntroTextContent>
            <p>{t('industryZone.intro_paragraph1')}</p>
            <p>{t('industryZone.intro_paragraph2')}</p>
          </IntroTextContent>
        </Container>
        <ContentGrid>
            <TextContent>
              <SubsectionTitle>{t('industryZone.core_features_title')}</SubsectionTitle>
              <p>
                {t('industryZone.core_features_description')}
              </p>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="30" y1="310" x2="620" y2="310" stroke="currentColor" strokeWidth="2"/>
                <rect x="60" y="180" width="120" height="130" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="75" y="200" width="22" height="28" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="105" y="200" width="22" height="28" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="135" y="200" width="22" height="28" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="75" y="245" width="22" height="28" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="105" y="245" width="22" height="28" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="135" y="245" width="22" height="28" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="85" y="145" width="70" height="45" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                <text x="120" y="173" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#0a3a3f">FTZ</text>
                <rect x="220" y="200" width="100" height="110" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="235" y="220" width="20" height="25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="265" y="220" width="20" height="25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="295" y="220" width="20" height="25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="360" y="220" width="80" height="90" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="400" cy="265" r="25" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M 385 265 L 415 265 M 400 250 L 400 280" stroke="currentColor" strokeWidth="2"/>
                <rect x="470" y="240" width="100" height="70" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M 490 275 L 520 260 L 550 275 L 520 290 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealText>
            {t('industryZone.teal_description')}
          </TealText>
        </TealBox>
      </TealSection>

      <GreySection>
        <Container>
          <TextContent>
            <SectionTitle>{t('industryZone.services_title')}</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>{t('industryZone.table_category_header')}</th>
                  <th>{t('industryZone.table_scope_header')}</th>
                  <th>{t('industryZone.table_impact_header')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label={t('industryZone.table_category_header')}><strong>{t('industryZone.table_tenant_operations_category')}</strong></td>
                  <td data-label={t('industryZone.table_scope_header')}>{t('industryZone.table_tenant_operations_scope')}</td>
                  <td data-label={t('industryZone.table_impact_header')}>{t('industryZone.table_tenant_operations_impact')}</td>
                </tr>
                <tr>
                  <td data-label={t('industryZone.table_category_header')}><strong>{t('industryZone.table_ftz_administration_category')}</strong></td>
                  <td data-label={t('industryZone.table_scope_header')}>{t('industryZone.table_ftz_administration_scope')}</td>
                  <td data-label={t('industryZone.table_impact_header')}>{t('industryZone.table_ftz_administration_impact')}</td>
                </tr>
                <tr>
                  <td data-label={t('industryZone.table_category_header')}><strong>{t('industryZone.table_infrastructure_management_category')}</strong></td>
                  <td data-label={t('industryZone.table_scope_header')}>{t('industryZone.table_infrastructure_management_scope')}</td>
                  <td data-label={t('industryZone.table_impact_header')}>{t('industryZone.table_infrastructure_management_impact')}</td>
                </tr>
                <tr>
                  <td data-label={t('industryZone.table_category_header')}><strong>{t('industryZone.table_logistics_coordination_category')}</strong></td>
                  <td data-label={t('industryZone.table_scope_header')}>{t('industryZone.table_logistics_coordination_scope')}</td>
                  <td data-label={t('industryZone.table_impact_header')}>{t('industryZone.table_logistics_coordination_impact')}</td>
                </tr>
                <tr>
                  <td data-label={t('industryZone.table_category_header')}><strong>{t('industryZone.table_safety_security_category')}</strong></td>
                  <td data-label={t('industryZone.table_scope_header')}>{t('industryZone.table_safety_security_scope')}</td>
                  <td data-label={t('industryZone.table_impact_header')}>{t('industryZone.table_safety_security_impact')}</td>
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

