import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { WhiteSection } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { SectionTitle } from "../../ui/Typography";

const PhasesContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xxxl};
`;

const PhaseCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  overflow: hidden;
`;

const PhaseHeader = styled.div`
  background: ${({ theme }) => theme.colors.teal};
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.white};
`;

const PhaseTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`;

const PhaseNote = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0;
  opacity: 0.9;
  font-style: italic;
`;

const PhaseBody = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const CategorySection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryLabel = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
`;

const ItemsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    transform: translateX(4px);
  }
`;

const ItemName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  flex: 1;
`;

const ItemAmount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: 'Courier New', monospace;
`;

const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const PhaseSubtotal = styled(Subtotal)`
  margin-top: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.teal};
`;

const SuccessSubtotal = styled(Subtotal)`
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const SubtotalLabel = styled.span`
dd  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const SubtotalAmount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: 'Courier New', monospace;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.foreground};
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.spacing.xxxl};
`;

const TotalLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const TotalAmount = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: 'Courier New', monospace;
`;

const UseOfFunds: React.FC = () => {
  const { t } = useTranslation('investment');
  
  return (
    <WhiteSection>
      <Container>
        <SectionTitle>{t('useOfFunds.title')}</SectionTitle>
        
        <PhasesContainer>
          {/* Phase One - Stage One */}
          <PhaseCard>
            <PhaseHeader>
              <PhaseTitle>{t('useOfFunds.phase1_stage1_title')}</PhaseTitle>
              <PhaseNote>{t('useOfFunds.phase1_stage1_note')}</PhaseNote>
            </PhaseHeader>
            <PhaseBody>
              <CategorySection>
                <CategoryLabel>{t('useOfFunds.land_soft_costs_label')}</CategoryLabel>
                <ItemsGrid>
                  <Item>
                    <ItemName>{t('useOfFunds.land_acquisition')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase1_stage1_land_acquisition_amount')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('useOfFunds.design_fees')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase1_stage1_design_fees_amount')}</ItemAmount>
                  </Item>
                </ItemsGrid>
                <Subtotal>
                  <SubtotalLabel>{t('useOfFunds.subtotal')}</SubtotalLabel>
                  <SubtotalAmount>
                    {t('useOfFunds.phase1_stage1_land_soft_subtotal')}
                  </SubtotalAmount>
                </Subtotal>
              </CategorySection>
              
              <CategorySection>
                <CategoryLabel>{t('useOfFunds.hard_costs_label')}</CategoryLabel>
                <ItemsGrid>
                  <Item>
                    <ItemName>{t('useOfFunds.building_construction')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase1_stage1_building_construction_amount')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('useOfFunds.water_sewer')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase1_stage1_water_sewer_amount')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('useOfFunds.parking')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase1_stage1_parking_amount')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('useOfFunds.misc_expenses')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase1_stage1_misc_amount')}</ItemAmount>
                  </Item>
                </ItemsGrid>
                <Subtotal>
                  <SubtotalLabel>{t('useOfFunds.subtotal')}</SubtotalLabel>
                  <SubtotalAmount>
                    {t('useOfFunds.phase1_stage1_hard_costs_subtotal')}
                  </SubtotalAmount>
                </Subtotal>
              </CategorySection>
              
              <PhaseSubtotal>
                <SubtotalLabel>{t('useOfFunds.total')}</SubtotalLabel>
                <SubtotalAmount>{t('useOfFunds.phase1_stage1_total')}</SubtotalAmount>
              </PhaseSubtotal>
            </PhaseBody>
          </PhaseCard>
          
          {/* Phase One - Stage Two */}
          <PhaseCard>
            <PhaseHeader>
              <PhaseTitle>{t('useOfFunds.phase1_stage2_title')}</PhaseTitle>
              <PhaseNote>{t('useOfFunds.phase1_stage2_note')}</PhaseNote>
            </PhaseHeader>
            <PhaseBody>
              <CategorySection>
                <CategoryLabel>{t('useOfFunds.full_development_costs_label')}</CategoryLabel>
                <ItemsGrid>
                  <Item>
                    <ItemName>{t('useOfFunds.soft_costs')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase1_stage2_soft_costs_amount')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('useOfFunds.industrial_space')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase1_stage2_industrial_space_amount')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('useOfFunds.commercial_space')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase1_stage2_commercial_space_amount')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('useOfFunds.residential_units')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase1_stage2_residential_units_amount')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('useOfFunds.misc')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase1_stage2_misc_amount')}</ItemAmount>
                  </Item>
                </ItemsGrid>
              </CategorySection>
              
              <PhaseSubtotal>
                <SubtotalLabel>{t('useOfFunds.total')}</SubtotalLabel>
                <SubtotalAmount>
                  {t('useOfFunds.phase1_stage2_total')}
                </SubtotalAmount>
              </PhaseSubtotal>
            </PhaseBody>
          </PhaseCard>
          
          {/* Phase Two */}
          <PhaseCard>
            <PhaseHeader>
              <PhaseTitle>{t('useOfFunds.phase2_title')}</PhaseTitle>
              <PhaseNote>{t('useOfFunds.phase2_note')}</PhaseNote>
            </PhaseHeader>
            <PhaseBody>
              <CategorySection>
                <CategoryLabel>{t('useOfFunds.residential_sales_label')}</CategoryLabel>
                <ItemsGrid>
                  <Item>
                    <ItemName>{t('labels.totalUnits')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase2_units')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('labels.costPerUnit')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase2_cost_per_unit')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('labels.salesPricePerUnit')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase2_sales_price_per_unit')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('labels.totalProjectCost')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase2_total_cost')}</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>{t('labels.totalRevenue')}</ItemName>
                    <ItemAmount>{t('useOfFunds.phase2_total_revenue')}</ItemAmount>
                  </Item>
                </ItemsGrid>
                <SuccessSubtotal>
                  <SubtotalLabel>{t('labels.grossProfit')}</SubtotalLabel>
                  <SubtotalAmount>
                    {t('useOfFunds.phase2_gross_profit')}
                  </SubtotalAmount>
                </SuccessSubtotal>
              </CategorySection>
            </PhaseBody>
          </PhaseCard>
        </PhasesContainer>
        
        <Total>
          <TotalLabel>{t('useOfFunds.total_investment_title')}</TotalLabel>
          <TotalAmount>
            {t('useOfFunds.grand_total')}
          </TotalAmount>
        </Total>
      </Container>
    </WhiteSection>
  );
};

export default UseOfFunds;
