import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import GoldDivider from "../../ui/GoldDivider";
import { ContentWrapper, GreyContent } from "../../ui/Containers";
import { IntroText, SectionTitle } from "../../ui/Typography";
import { StyledTable } from "../../ui/Table";
import { WhiteSection, GreySection } from "../../ui/Sections";
import { RequirementsList, RequirementTitle, RequirementText } from "../../ui/Requirements";

interface QOZZoneSectionProps {
  onNavigate: (page: string) => void;
}

const QOZZoneSection: React.FC<QOZZoneSectionProps> = () => {
  const { t } = useTranslation(['masterPlan', 'common']);
  
  return (
    <>
      <TextHero
        title={t('qoz.title', 'Qualified Opportunity Zone (QOZ)')}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.masterPlan'), href: "/master-plan" },
          { label: t('common:breadcrumbs.qozZone') }
        ]}
      />

      <WhiteSection>
        <ContentWrapper>
          <IntroText>
            {t('qoz.intro_paragraph')}
          </IntroText>
        </ContentWrapper>
      </WhiteSection>

      <GoldDivider />

      <GreySection>
        <GreyContent>
          <SectionTitle>{t('qoz.criteria_title')}</SectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>{t('qoz.criteria_criterion_header')}</th>
                <th>{t('qoz.criteria_description_header')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={t('qoz.criteria_criterion_header')}><strong>{t('qoz.criteria_poverty_rate_criterion')}</strong></td>
                <td data-label={t('qoz.criteria_description_header')}>{t('qoz.criteria_poverty_rate_description')}</td>
              </tr>
              <tr>
                <td data-label={t('qoz.criteria_criterion_header')}><strong>{t('qoz.criteria_adjacent_tracts_criterion')}</strong></td>
                <td data-label={t('qoz.criteria_description_header')}>{t('qoz.criteria_adjacent_tracts_description')}</td>
              </tr>
              <tr>
                <td data-label={t('qoz.criteria_criterion_header')}><strong>{t('qoz.criteria_federal_cert_criterion')}</strong></td>
                <td data-label={t('qoz.criteria_description_header')}>{t('qoz.criteria_federal_cert_description')}</td>
              </tr>
              <tr>
                <td data-label={t('qoz.criteria_criterion_header')}><strong>{t('qoz.criteria_designation_period_criterion')}</strong></td>
                <td data-label={t('qoz.criteria_description_header')}>{t('qoz.criteria_designation_period_description')}</td>
              </tr>
            </tbody>
          </StyledTable>
        </GreyContent>
      </GreySection>

      <GoldDivider />

      <WhiteSection>
        <ContentWrapper>
          <SectionTitle>{t('qoz.compliance_title')}</SectionTitle>
          <RequirementsList>
            <div>
              <RequirementTitle>{t('qoz.compliance_property_location_title')}</RequirementTitle>
              <RequirementText>{t('qoz.compliance_property_location_text')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('qoz.compliance_substantial_improvement_title')}</RequirementTitle>
              <RequirementText>{t('qoz.compliance_substantial_improvement_text')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('qoz.compliance_original_use_title')}</RequirementTitle>
              <RequirementText>{t('qoz.compliance_original_use_text')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('qoz.compliance_trade_business_title')}</RequirementTitle>
              <RequirementText>{t('qoz.compliance_trade_business_text')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('qoz.compliance_documentation_title')}</RequirementTitle>
              <RequirementText>{t('qoz.compliance_documentation_text')}</RequirementText>
            </div>
          </RequirementsList>
        </ContentWrapper>
      </WhiteSection>
    </>
  );
};

export default QOZZoneSection;
