import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import GoldDivider from "../../ui/GoldDivider";
import { ContentWrapper, GreyContent } from "../../ui/Containers";
import { IntroText, SectionTitle } from "../../ui/Typography";
import { StyledTable } from "../../ui/Table";
import { WhiteSection, GreySection } from "../../ui/Sections";
import { RequirementsList, RequirementTitle, RequirementText } from "../../ui/Requirements";

interface QOFZoneSectionProps {
  onNavigate: (page: string) => void;
}

const QOFZoneSection: React.FC<QOFZoneSectionProps> = () => {
  const { t } = useTranslation(['masterPlan', 'common']);
  
  return (
    <>
      <TextHero
        title={t('qof.title', 'Qualified Opportunity Fund (QOF)')}
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.masterPlan'), href: "/master-plan" },
          { label: t('common:breadcrumbs.qofZone') }
        ]}
      />

      <WhiteSection>
        <ContentWrapper>
          <IntroText>
            {t('qof.intro_paragraph')}
          </IntroText>
        </ContentWrapper>
      </WhiteSection>

      <GoldDivider />

      <GreySection>
        <GreyContent>
          <SectionTitle>{t('qof.qualification_title')}</SectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>{t('qof.qualification_requirement_header')}</th>
                <th>{t('qof.qualification_description_header')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={t('qof.qualification_requirement_header')}><strong>{t('qof.qualification_90_percent_test_requirement')}</strong></td>
                <td data-label={t('qof.qualification_description_header')}>{t('qof.qualification_90_percent_test_description')}</td>
              </tr>
              <tr>
                <td data-label={t('qof.qualification_requirement_header')}><strong>{t('qof.qualification_self_cert_requirement')}</strong></td>
                <td data-label={t('qof.qualification_description_header')}>{t('qof.qualification_self_cert_description')}</td>
              </tr>
              <tr>
                <td data-label={t('qof.qualification_requirement_header')}><strong>{t('qof.qualification_annual_reporting_requirement')}</strong></td>
                <td data-label={t('qof.qualification_description_header')}>{t('qof.qualification_annual_reporting_description')}</td>
              </tr>
              <tr>
                <td data-label={t('qof.qualification_requirement_header')}><strong>{t('qof.qualification_180_day_requirement')}</strong></td>
                <td data-label={t('qof.qualification_description_header')}>{t('qof.qualification_180_day_description')}</td>
              </tr>
              <tr>
                <td data-label={t('qof.qualification_requirement_header')}><strong>{t('qof.qualification_substantial_improvement_requirement')}</strong></td>
                <td data-label={t('qof.qualification_description_header')}>{t('qof.qualification_substantial_improvement_description')}</td>
              </tr>
            </tbody>
          </StyledTable>
        </GreyContent>
      </GreySection>

      <GoldDivider />

      <WhiteSection>
        <ContentWrapper>
          <SectionTitle>{t('qof.formation_title')}</SectionTitle>
          <RequirementsList>
            <div>
              <RequirementTitle>{t('qof.formation_step1_title')}</RequirementTitle>
              <RequirementText>{t('qof.formation_step1_text')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('qof.formation_step2_title')}</RequirementTitle>
              <RequirementText>{t('qof.formation_step2_text')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('qof.formation_step3_title')}</RequirementTitle>
              <RequirementText>{t('qof.formation_step3_text')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('qof.formation_step4_title')}</RequirementTitle>
              <RequirementText>{t('qof.formation_step4_text')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('qof.formation_step5_title')}</RequirementTitle>
              <RequirementText>{t('qof.formation_step5_text')}</RequirementText>
            </div>
          </RequirementsList>
        </ContentWrapper>
      </WhiteSection>
    </>
  );
};

export default QOFZoneSection;
