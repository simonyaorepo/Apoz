import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import styled from "styled-components";
import GoldDivider from "../../ui/GoldDivider";
import { Container } from "../../ui/Containers";
import { IntroText, SectionTitle } from "../../ui/Typography";
import { StyledTable } from "../../ui/Table";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { RequirementsList, RequirementTitle, RequirementText } from "../../ui/Requirements";

interface ResidentialZoneInvestmentSectionProps {
  onNavigate: (page: string) => void;
}



const TealTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h5};
  }
`;

const BenefitsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background: rgba(255, 255, 255, 0.1);

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  th {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    font-weight: 600;
  }

  td {
    color: white;
  }
`;

const WhiteText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  color: white;
  margin-bottom: 1rem;
`;

const ExampleBox = styled.div`
  background: white;
  padding: 2rem;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  margin: 2rem 0;
`;

const ExampleTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
`;

const ResidentialZoneInvestmentSection: React.FC<ResidentialZoneInvestmentSectionProps> = () => {
  const { t } = useTranslation(['investment', 'common']);
  
  return (
    <>
      <TextHero
        title={t('residentialZone.title', 'Residential Zone Investment Opportunities')}
        backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.investment'), href: "/investment" },
          { label: t('common:breadcrumbs.residentialZone') }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <IntroText>
            {t('residentialZone.intro')}
          </IntroText>

          <SectionTitle>{t('residentialZone.qoz_benefits_title')}</SectionTitle>
          <IntroText>
            {t('residentialZone.qoz_intro')}
          </IntroText>

          <StyledTable>
            <thead>
              <tr>
                <th>{t('residentialZone.qoz_benefit_header')}</th>
                <th>{t('residentialZone.qoz_details_header')}</th>
                <th>{t('residentialZone.qoz_timeline_header')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={t('residentialZone.qoz_benefit_header')}><strong>{t('residentialZone.qoz_deferral_benefit')}</strong></td>
                <td data-label={t('residentialZone.qoz_details_header')}>{t('residentialZone.qoz_deferral_details')}</td>
                <td data-label={t('residentialZone.qoz_timeline_header')}>{t('residentialZone.qoz_deferral_timeline')}</td>
              </tr>
              <tr>
                <td data-label={t('residentialZone.qoz_benefit_header')}><strong>{t('residentialZone.qoz_growth_benefit')}</strong></td>
                <td data-label={t('residentialZone.qoz_details_header')}>{t('residentialZone.qoz_growth_details')}</td>
                <td data-label={t('residentialZone.qoz_timeline_header')}>{t('residentialZone.qoz_growth_timeline')}</td>
              </tr>
              <tr>
                <td data-label={t('residentialZone.qoz_benefit_header')}><strong>{t('residentialZone.qoz_stepup_benefit')}</strong></td>
                <td data-label={t('residentialZone.qoz_details_header')}>{t('residentialZone.qoz_stepup_details')}</td>
                <td data-label={t('residentialZone.qoz_timeline_header')}>{t('residentialZone.qoz_stepup_timeline')}</td>
              </tr>
            </tbody>
          </StyledTable>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealTitle>{t('residentialZone.example_title')}</TealTitle>
          <WhiteText>
            {t('residentialZone.example_intro')}
          </WhiteText>
          <BenefitsTable>
            <thead>
              <tr>
                <th>{t('residentialZone.example_scenario_header')}</th>
                <th>{t('residentialZone.example_tax_header')}</th>
                <th>{t('residentialZone.example_result_header')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{t('residentialZone.example_without_qof')}</strong></td>
                <td>{t('residentialZone.example_without_tax')}</td>
                <td>{t('residentialZone.example_without_result')}</td>
              </tr>
              <tr>
                <td><strong>{t('residentialZone.example_with_qof')}</strong></td>
                <td>{t('residentialZone.example_with_tax')}</td>
                <td>{t('residentialZone.example_with_result')}</td>
              </tr>
              <tr>
                <td><strong>{t('residentialZone.example_after_10y')}</strong></td>
                <td>{t('residentialZone.example_after_tax')}</td>
                <td>{t('residentialZone.example_after_result')}</td>
              </tr>
            </tbody>
          </BenefitsTable>
          <WhiteText>
            {t('residentialZone.example_net_result')}
          </WhiteText>
        </TealBox>
      </TealSection>

      <GreySection>
        <Container>
          <SectionTitle>{t('residentialZone.qof_how_title')}</SectionTitle>
          <IntroText>
            {t('residentialZone.qof_intro')}
          </IntroText>

          <StyledTable>
            <thead>
              <tr>
                <th>{t('residentialZone.qof_step_header')}</th>
                <th>{t('residentialZone.qof_process_header')}</th>
                <th>{t('residentialZone.qof_involved_header')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={t('residentialZone.qof_step_header')}><strong>{t('residentialZone.qof_step1_step')}</strong></td>
                <td data-label={t('residentialZone.qof_process_header')}>{t('residentialZone.qof_step1_process')}</td>
                <td data-label={t('residentialZone.qof_involved_header')}>{t('residentialZone.qof_step1_involved')}</td>
              </tr>
              <tr>
                <td data-label={t('residentialZone.qof_step_header')}><strong>{t('residentialZone.qof_step2_step')}</strong></td>
                <td data-label={t('residentialZone.qof_process_header')}>{t('residentialZone.qof_step2_process')}</td>
                <td data-label={t('residentialZone.qof_involved_header')}>{t('residentialZone.qof_step2_involved')}</td>
              </tr>
              <tr>
                <td data-label={t('residentialZone.qof_step_header')}><strong>{t('residentialZone.qof_step3_step')}</strong></td>
                <td data-label={t('residentialZone.qof_process_header')}>{t('residentialZone.qof_step3_process')}</td>
                <td data-label={t('residentialZone.qof_involved_header')}>{t('residentialZone.qof_step3_involved')}</td>
              </tr>
              <tr>
                <td data-label={t('residentialZone.qof_step_header')}><strong>{t('residentialZone.qof_step4_step')}</strong></td>
                <td data-label={t('residentialZone.qof_process_header')}>{t('residentialZone.qof_step4_process')}</td>
                <td data-label={t('residentialZone.qof_involved_header')}>{t('residentialZone.qof_step4_involved')}</td>
              </tr>
              <tr>
                <td data-label={t('residentialZone.qof_step_header')}><strong>{t('residentialZone.qof_step5_step')}</strong></td>
                <td data-label={t('residentialZone.qof_process_header')}>{t('residentialZone.qof_step5_process')}</td>
                <td data-label={t('residentialZone.qof_involved_header')}>{t('residentialZone.qof_step5_involved')}</td>
              </tr>
            </tbody>
          </StyledTable>

          <HighlightBox>
            <SectionTitle>{t('residentialZone.qof_requirements_title')}</SectionTitle>
            <RequirementsList>
              <div>
                <RequirementTitle>{t('residentialZone.qof_req1_title')}</RequirementTitle>
                <RequirementText>{t('residentialZone.qof_req1_text')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('residentialZone.qof_req2_title')}</RequirementTitle>
                <RequirementText>{t('residentialZone.qof_req2_text')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('residentialZone.qof_req3_title')}</RequirementTitle>
                <RequirementText>{t('residentialZone.qof_req3_text')}</RequirementText>
              </div>
            </RequirementsList>
          </HighlightBox>
        </Container>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <Container>
          <SectionTitle>{t('residentialZone.lihtc_title')}</SectionTitle>
          <IntroText>
            {t('residentialZone.lihtc_intro')}
          </IntroText>

          <RequirementsList>
            <div>
              <RequirementTitle>{t('residentialZone.lihtc_req1_title')}</RequirementTitle>
              <RequirementText>{t('residentialZone.lihtc_req1_text')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('residentialZone.lihtc_req2_title')}</RequirementTitle>
              <RequirementText>{t('residentialZone.lihtc_req2_text')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('residentialZone.lihtc_req3_title')}</RequirementTitle>
              <RequirementText>{t('residentialZone.lihtc_req3_text')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('residentialZone.lihtc_req4_title')}</RequirementTitle>
              <RequirementText>{t('residentialZone.lihtc_req4_text')}</RequirementText>
            </div>
          </RequirementsList>
        </Container>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <Container>
          <SectionTitle>{t('residentialZone.structure_title')}</SectionTitle>
          
          <ExampleBox>
            <ExampleTitle>{t('residentialZone.structure_returns_title')}</ExampleTitle>
            <IntroText>
              {t('residentialZone.structure_returns_text')}
            </IntroText>
          </ExampleBox>

          <SectionTitle>{t('residentialZone.investor_profile_title')}</SectionTitle>
          <IntroText>
            {t('residentialZone.investor_profile_text')}
          </IntroText>

          <SectionTitle>{t('residentialZone.exit_strategies_title')}</SectionTitle>
          <RequirementsList>
            <div>
              <RequirementText>{t('residentialZone.exit_strategy1')}</RequirementText>
            </div>
            <div>
              <RequirementText>{t('residentialZone.exit_strategy2')}</RequirementText>
            </div>
            <div>
              <RequirementText>{t('residentialZone.exit_strategy3')}</RequirementText>
            </div>
            <div>
              <RequirementText>{t('residentialZone.exit_strategy4')}</RequirementText>
            </div>
          </RequirementsList>
        </Container>
      </GreySection>

      <GoldDivider />
    </>
  );
};

export default ResidentialZoneInvestmentSection;



