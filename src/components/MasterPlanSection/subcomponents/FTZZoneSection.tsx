import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import GoldDivider from "../../ui/GoldDivider";
import { ContentWrapper, GreyContent } from "../../ui/Containers";
import { IntroText, SectionTitle } from "../../ui/Typography";
import { StyledTable } from "../../ui/Table";
import { WhiteSection, GreySection } from "../../ui/Sections";
import { RequirementsList, RequirementTitle, RequirementText } from "../../ui/Requirements";
import { GreyContentGrid } from "../../ui/Grids";
import { ImageBox } from "../../ui/Media";

interface FTZZoneSectionProps {
  onNavigate: (page: string) => void;
}

const FTZZoneSection: React.FC<FTZZoneSectionProps> = () => {
  const { t } = useTranslation(['masterPlan', 'common']);
  
  return (
    <>
      <TextHero
        title={t('ftz.title', 'Foreign Trade Zone (FTZ-171)')}
        backgroundImage="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.masterPlan'), href: "/master-plan" },
          { label: t('common:breadcrumbs.ftzZone') }
        ]}
      />

      <WhiteSection>
        <ContentWrapper>
          <IntroText>
            {t('ftz.intro_paragraph')}
          </IntroText>
        </ContentWrapper>
      </WhiteSection>

      <GoldDivider />

      <GreySection>
        <GreyContent>
          <SectionTitle>{t('ftz.activation_title')}</SectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>{t('ftz.activation_step_header')}</th>
                <th>{t('ftz.activation_process_header')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={t('ftz.activation_step_header')}><strong>{t('ftz.activation_step1_step')}</strong></td>
                <td data-label={t('ftz.activation_process_header')}>{t('ftz.activation_step1_process')}</td>
              </tr>
              <tr>
                <td data-label={t('ftz.activation_step_header')}><strong>{t('ftz.activation_step2_step')}</strong></td>
                <td data-label={t('ftz.activation_process_header')}>{t('ftz.activation_step2_process')}</td>
              </tr>
              <tr>
                <td data-label={t('ftz.activation_step_header')}><strong>{t('ftz.activation_step3_step')}</strong></td>
                <td data-label={t('ftz.activation_process_header')}>{t('ftz.activation_step3_process')}</td>
              </tr>
              <tr>
                <td data-label={t('ftz.activation_step_header')}><strong>{t('ftz.activation_step4_step')}</strong></td>
                <td data-label={t('ftz.activation_process_header')}>{t('ftz.activation_step4_process')}</td>
              </tr>
              <tr>
                <td data-label={t('ftz.activation_step_header')}><strong>{t('ftz.activation_step5_step')}</strong></td>
                <td data-label={t('ftz.activation_process_header')}>{t('ftz.activation_step5_process')}</td>
              </tr>
              <tr>
                <td data-label={t('ftz.activation_step_header')}><strong>{t('ftz.activation_step6_step')}</strong></td>
                <td data-label={t('ftz.activation_process_header')}>{t('ftz.activation_step6_process')}</td>
              </tr>
            </tbody>
          </StyledTable>
        </GreyContent>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <GreyContentGrid>
          <div>
            <SectionTitle>{t('ftz.compliance_title')}</SectionTitle>
            <RequirementsList>
              <div>
                <RequirementTitle>{t('ftz.compliance_security_title')}</RequirementTitle>
                <RequirementText>{t('ftz.compliance_security_text')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('ftz.compliance_inventory_title')}</RequirementTitle>
                <RequirementText>{t('ftz.compliance_inventory_text')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('ftz.compliance_record_title')}</RequirementTitle>
                <RequirementText>{t('ftz.compliance_record_text')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('ftz.compliance_cbp_access_title')}</RequirementTitle>
                <RequirementText>{t('ftz.compliance_cbp_access_text')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('ftz.compliance_prohibited_title')}</RequirementTitle>
                <RequirementText>{t('ftz.compliance_prohibited_text')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('ftz.compliance_annual_cert_title')}</RequirementTitle>
                <RequirementText>{t('ftz.compliance_annual_cert_text')}</RequirementText>
              </div>
            </RequirementsList>
          </div>
          <ImageBox style={{ maxWidth: '100%', marginLeft: 'auto' }}>
            <img 
              src="/assets/images/masterPlan/FTZ/1.png" 
              alt="FTZ Compliance"
              style={{ objectFit: 'contain' }}
            />
          </ImageBox>
        </GreyContentGrid>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <GreyContent>
          <SectionTitle>{t('ftz.activities_title')}</SectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>{t('ftz.activities_activity_header')}</th>
                <th>{t('ftz.activities_description_header')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={t('ftz.activities_activity_header')}><strong>{t('ftz.activities_storage_activity')}</strong></td>
                <td data-label={t('ftz.activities_description_header')}>{t('ftz.activities_storage_description')}</td>
              </tr>
              <tr>
                <td data-label={t('ftz.activities_activity_header')}><strong>{t('ftz.activities_manufacturing_activity')}</strong></td>
                <td data-label={t('ftz.activities_description_header')}>{t('ftz.activities_manufacturing_description')}</td>
              </tr>
              <tr>
                <td data-label={t('ftz.activities_activity_header')}><strong>{t('ftz.activities_exhibition_activity')}</strong></td>
                <td data-label={t('ftz.activities_description_header')}>{t('ftz.activities_exhibition_description')}</td>
              </tr>
              <tr>
                <td data-label={t('ftz.activities_activity_header')}><strong>{t('ftz.activities_sampling_activity')}</strong></td>
                <td data-label={t('ftz.activities_description_header')}>{t('ftz.activities_sampling_description')}</td>
              </tr>
              <tr>
                <td data-label={t('ftz.activities_activity_header')}><strong>{t('ftz.activities_destruction_activity')}</strong></td>
                <td data-label={t('ftz.activities_description_header')}>{t('ftz.activities_destruction_description')}</td>
              </tr>
              <tr>
                <td data-label={t('ftz.activities_activity_header')}><strong>{t('ftz.activities_reexport_activity')}</strong></td>
                <td data-label={t('ftz.activities_description_header')}>{t('ftz.activities_reexport_description')}</td>
              </tr>
            </tbody>
          </StyledTable>
        </GreyContent>
      </GreySection>
    </>
  );
};

export default FTZZoneSection;
