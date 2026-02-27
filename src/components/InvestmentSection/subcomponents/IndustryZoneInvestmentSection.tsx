import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import styled from "styled-components";
import { WhiteSection, GreySection, TealSection, TealBox } from "../../ui/Sections";
import { TealTitle, TealText } from "../../ui/TealComponents";
import GoldDivider from "../../ui/GoldDivider";
import { Container } from "../../ui/Containers";
import { IntroText, SectionTitle } from "../../ui/Typography";
import { StyledTable } from "../../ui/Table";
import { RequirementsList, RequirementTitle, RequirementText } from "../../ui/Requirements";

interface IndustryZoneInvestmentSectionProps {
  onNavigate: (page: string) => void;
}

const ExampleBox = styled.div`
  background: white;
  padding: 2rem;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  margin: 2rem 0;
`;

const ExampleTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const ExampleText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 0.75rem;
`;

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
`;

const IndustryZoneInvestmentSection: React.FC<IndustryZoneInvestmentSectionProps> = () => {
  const { t } = useTranslation(['investment', 'common']);
  
  return (
    <>
      <TextHero
        title={t('industryZone.title', 'Industry Zone Investment Opportunities')}
        backgroundImage="https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.investment'), href: "/investment" },
          { label: t('common:breadcrumbs.industryZone') }
        ]}
      />
      
      <WhiteSection>
        <Container>
          <IntroText>
            {t('industryZoneFTZ.intro')}
          </IntroText>

          <SectionTitle>{t('industryZoneFTZ.ftzTitle')}</SectionTitle>
          <IntroText>
            {t('industryZoneFTZ.ftzDefinition')}
          </IntroText>

          <StyledTable>
            <thead>
              <tr>
                <th>{t('industryZoneFTZ.tableStep')}</th>
                <th>{t('industryZoneFTZ.tableProcess')}</th>
                <th>{t('industryZoneFTZ.tableWhoInvolved')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={t('industryZoneFTZ.tableStep')}><strong>{t('industryZoneFTZ.step1')}</strong></td>
                <td data-label={t('industryZoneFTZ.tableProcess')}>{t('industryZoneFTZ.step1Process')}</td>
                <td data-label={t('industryZoneFTZ.tableWhoInvolved')}>{t('industryZoneFTZ.step1Who')}</td>
              </tr>
              <tr>
                <td data-label={t('industryZoneFTZ.tableStep')}><strong>{t('industryZoneFTZ.step2')}</strong></td>
                <td data-label={t('industryZoneFTZ.tableProcess')}>{t('industryZoneFTZ.step2Process')}</td>
                <td data-label={t('industryZoneFTZ.tableWhoInvolved')}>{t('industryZoneFTZ.step2Who')}</td>
              </tr>
              <tr>
                <td data-label={t('industryZoneFTZ.tableStep')}><strong>{t('industryZoneFTZ.step3')}</strong></td>
                <td data-label={t('industryZoneFTZ.tableProcess')}>{t('industryZoneFTZ.step3Process')}</td>
                <td data-label={t('industryZoneFTZ.tableWhoInvolved')}>{t('industryZoneFTZ.step3Who')}</td>
              </tr>
              <tr>
                <td data-label={t('industryZoneFTZ.tableStep')}><strong>{t('industryZoneFTZ.step4')}</strong></td>
                <td data-label={t('industryZoneFTZ.tableProcess')}>{t('industryZoneFTZ.step4Process')}</td>
                <td data-label={t('industryZoneFTZ.tableWhoInvolved')}>{t('industryZoneFTZ.step4Who')}</td>
              </tr>
              <tr>
                <td data-label={t('industryZoneFTZ.tableStep')}><strong>{t('industryZoneFTZ.step5')}</strong></td>
                <td data-label={t('industryZoneFTZ.tableProcess')}>{t('industryZoneFTZ.step5Process')}</td>
                <td data-label={t('industryZoneFTZ.tableWhoInvolved')}>{t('industryZoneFTZ.step5Who')}</td>
              </tr>
              <tr>
                <td data-label={t('industryZoneFTZ.tableStep')}><strong>{t('industryZoneFTZ.step6')}</strong></td>
                <td data-label={t('industryZoneFTZ.tableProcess')}>{t('industryZoneFTZ.step6Process')}</td>
                <td data-label={t('industryZoneFTZ.tableWhoInvolved')}>{t('industryZoneFTZ.step6Who')}</td>
              </tr>
            </tbody>
          </StyledTable>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealTitle>{t('industryZoneFTZ.benefitsTitle')}</TealTitle>
          <TealText dangerouslySetInnerHTML={{ __html: t('industryZoneFTZ.benefit1') }} />
          <TealText dangerouslySetInnerHTML={{ __html: t('industryZoneFTZ.benefit2') }} />
          <TealText dangerouslySetInnerHTML={{ __html: t('industryZoneFTZ.benefit3') }} />
          <TealText dangerouslySetInnerHTML={{ __html: t('industryZoneFTZ.benefit4') }} />
          <TealText dangerouslySetInnerHTML={{ __html: t('industryZoneFTZ.benefit5') }} />
        </TealBox>
      </TealSection>

      <GreySection>
        <Container>
          <SectionTitle>{t('industryZoneFTZ.targetIndustriesTitle')}</SectionTitle>
          
          <HighlightBox>
            <ExampleTitle>{t('industryZoneFTZ.renewableEnergyTitle')}</ExampleTitle>
            <RequirementsList>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.solarTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.solarDesc')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.evBatteryTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.evBatteryDesc')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.hydrogenTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.hydrogenDesc')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.energyStorageTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.energyStorageDesc')}</RequirementText>
              </div>
            </RequirementsList>
          </HighlightBox>

          <HighlightBox>
            <ExampleTitle>{t('industryZoneFTZ.advancedManufacturingTitle')}</ExampleTitle>
            <RequirementsList>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.electronicsTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.electronicsDesc')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.smartManufacturingTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.smartManufacturingDesc')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.consumerGoodsTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.consumerGoodsDesc')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.medicalDevicesTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.medicalDevicesDesc')}</RequirementText>
              </div>
            </RequirementsList>
          </HighlightBox>

          <HighlightBox>
            <ExampleTitle>{t('industryZoneFTZ.logisticsTitle')}</ExampleTitle>
            <RequirementsList>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.fulfillmentTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.fulfillmentDesc')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.lastMileTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.lastMileDesc')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.coldStorageTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.coldStorageDesc')}</RequirementText>
              </div>
              <div>
                <RequirementTitle>{t('industryZoneFTZ.transloadingTitle')}</RequirementTitle>
                <RequirementText>{t('industryZoneFTZ.transloadingDesc')}</RequirementText>
              </div>
            </RequirementsList>
          </HighlightBox>
        </Container>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <Container>
          <SectionTitle>{t('industryZoneFTZ.roiTitle')}</SectionTitle>
          
          <ExampleBox>
            <ExampleTitle>{t('industryZoneFTZ.roiExampleTitle')}</ExampleTitle>
            <ExampleText dangerouslySetInnerHTML={{ __html: t('industryZoneFTZ.roiExample1') }} />
            <ExampleText dangerouslySetInnerHTML={{ __html: t('industryZoneFTZ.roiExample2') }} />
            <ExampleText dangerouslySetInnerHTML={{ __html: t('industryZoneFTZ.roiExample3') }} />
            <ExampleText dangerouslySetInnerHTML={{ __html: t('industryZoneFTZ.roiExample4') }} />
            <ExampleText dangerouslySetInnerHTML={{ __html: t('industryZoneFTZ.roiExample5') }} />
          </ExampleBox>

          <SectionTitle>{t('industryZoneFTZ.partnershipsTitle')}</SectionTitle>
          <RequirementsList>
            <div>
              <RequirementText>{t('industryZoneFTZ.partnership1')}</RequirementText>
            </div>
            <div>
              <RequirementText>{t('industryZoneFTZ.partnership2')}</RequirementText>
            </div>
            <div>
              <RequirementText>{t('industryZoneFTZ.partnership3')}</RequirementText>
            </div>
            <div>
              <RequirementText>{t('industryZoneFTZ.partnership4')}</RequirementText>
            </div>
            <div>
              <RequirementText>{t('industryZoneFTZ.partnership5')}</RequirementText>
            </div>
          </RequirementsList>
        </Container>
      </GreySection>

      <GoldDivider />

      <GreySection>
        <Container>
          <SectionTitle>{t('industryZoneFTZ.combinedBenefitsTitle')}</SectionTitle>
          
          <StyledTable>
            <thead>
              <tr>
                <th>{t('industryZoneFTZ.tableIncentive')}</th>
                <th>{t('industryZoneFTZ.tableTaxBenefit')}</th>
                <th>{t('industryZoneFTZ.tableImpact')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={t('industryZoneFTZ.tableIncentive')}><strong>{t('industryZoneFTZ.qozInvestor')}</strong></td>
                <td data-label={t('industryZoneFTZ.tableTaxBenefit')}>{t('industryZoneFTZ.qozBenefit')}</td>
                <td data-label={t('industryZoneFTZ.tableImpact')}>{t('industryZoneFTZ.qozImpact')}</td>
              </tr>
              <tr>
                <td data-label={t('industryZoneFTZ.tableIncentive')}><strong>{t('industryZoneFTZ.ftzTenant')}</strong></td>
                <td data-label={t('industryZoneFTZ.tableTaxBenefit')}>{t('industryZoneFTZ.ftzBenefit')}</td>
                <td data-label={t('industryZoneFTZ.tableImpact')}>{t('industryZoneFTZ.ftzImpact')}</td>
              </tr>
              <tr>
                <td data-label={t('industryZoneFTZ.tableIncentive')}><strong>{t('industryZoneFTZ.combinedEffect')}</strong></td>
                <td data-label={t('industryZoneFTZ.tableTaxBenefit')}>{t('industryZoneFTZ.combinedBenefit')}</td>
                <td data-label={t('industryZoneFTZ.tableImpact')}>{t('industryZoneFTZ.combinedImpact')}</td>
              </tr>
            </tbody>
          </StyledTable>

          <SectionTitle>{t('industryZoneFTZ.exitStrategiesTitle')}</SectionTitle>
          <RequirementsList>
            <div>
              <RequirementText>{t('industryZoneFTZ.exit1')}</RequirementText>
            </div>
            <div>
              <RequirementText>{t('industryZoneFTZ.exit2')}</RequirementText>
            </div>
            <div>
              <RequirementText>{t('industryZoneFTZ.exit3')}</RequirementText>
            </div>
            <div>
              <RequirementText>{t('industryZoneFTZ.exit4')}</RequirementText>
            </div>
          </RequirementsList>

          <SectionTitle>{t('industryZoneFTZ.bestPracticesTitle')}</SectionTitle>
          <RequirementsList>
            <div>
              <RequirementTitle>{t('industryZoneFTZ.practice1Title')}</RequirementTitle>
              <RequirementText>{t('industryZoneFTZ.practice1Desc')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('industryZoneFTZ.practice2Title')}</RequirementTitle>
              <RequirementText>{t('industryZoneFTZ.practice2Desc')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('industryZoneFTZ.practice3Title')}</RequirementTitle>
              <RequirementText>{t('industryZoneFTZ.practice3Desc')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('industryZoneFTZ.practice4Title')}</RequirementTitle>
              <RequirementText>{t('industryZoneFTZ.practice4Desc')}</RequirementText>
            </div>
            <div>
              <RequirementTitle>{t('industryZoneFTZ.practice5Title')}</RequirementTitle>
              <RequirementText>{t('industryZoneFTZ.practice5Desc')}</RequirementText>
            </div>
          </RequirementsList>
        </Container>
      </GreySection>

      <GoldDivider />
    </>
  );
};

export default IndustryZoneInvestmentSection;

