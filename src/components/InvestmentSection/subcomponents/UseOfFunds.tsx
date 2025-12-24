import React from "react";
import styled from "styled-components";
import { Section, Container, SectionTitle } from "../InvestmentSection.styles";
import { USE_OF_FUNDS } from "./investmentSectionData";

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

const SubtotalLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
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

const formatCurrency = (value: number): string => {
  return `$${value.toLocaleString()}`;
};

const UseOfFunds: React.FC = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>{USE_OF_FUNDS.title}</SectionTitle>
        
        <PhasesContainer>
          {/* Phase One - Stage One */}
          <PhaseCard>
            <PhaseHeader>
              <PhaseTitle>{USE_OF_FUNDS.phaseOne.title}</PhaseTitle>
              <PhaseNote>{USE_OF_FUNDS.phaseOne.note}</PhaseNote>
            </PhaseHeader>
            <PhaseBody>
              <CategorySection>
                <CategoryLabel>{USE_OF_FUNDS.phaseOne.landAndSoft.label}</CategoryLabel>
                <ItemsGrid>
                  {USE_OF_FUNDS.phaseOne.landAndSoft.items.map((item, index) => (
                    <Item key={index}>
                      <ItemName>{item.name}</ItemName>
                      <ItemAmount>{formatCurrency(item.amount)}</ItemAmount>
                    </Item>
                  ))}
                </ItemsGrid>
                <Subtotal>
                  <SubtotalLabel>Subtotal</SubtotalLabel>
                  <SubtotalAmount>
                    {formatCurrency(USE_OF_FUNDS.phaseOne.landAndSoft.subtotal)}
                  </SubtotalAmount>
                </Subtotal>
              </CategorySection>
              
              <CategorySection>
                <CategoryLabel>{USE_OF_FUNDS.phaseOne.hardCosts.label}</CategoryLabel>
                <ItemsGrid>
                  {USE_OF_FUNDS.phaseOne.hardCosts.items.map((item, index) => (
                    <Item key={index}>
                      <ItemName>{item.name}</ItemName>
                      <ItemAmount>{formatCurrency(item.amount)}</ItemAmount>
                    </Item>
                  ))}
                </ItemsGrid>
                <Subtotal>
                  <SubtotalLabel>Subtotal</SubtotalLabel>
                  <SubtotalAmount>
                    {formatCurrency(USE_OF_FUNDS.phaseOne.hardCosts.subtotal)}
                  </SubtotalAmount>
                </Subtotal>
              </CategorySection>
              
              <Subtotal style={{ marginTop: '2rem', background: '#0a3a3f' }}>
                <SubtotalLabel>Phase Total</SubtotalLabel>
                <SubtotalAmount>{formatCurrency(USE_OF_FUNDS.phaseOne.total)}</SubtotalAmount>
              </Subtotal>
            </PhaseBody>
          </PhaseCard>
          
          {/* Phase One - Stage Two */}
          <PhaseCard>
            <PhaseHeader>
              <PhaseTitle>{USE_OF_FUNDS.phaseOneStageTwo.title}</PhaseTitle>
              <PhaseNote>{USE_OF_FUNDS.phaseOneStageTwo.note}</PhaseNote>
            </PhaseHeader>
            <PhaseBody>
              <CategorySection>
                <CategoryLabel>{USE_OF_FUNDS.phaseOneStageTwo.costs.label}</CategoryLabel>
                <ItemsGrid>
                  {USE_OF_FUNDS.phaseOneStageTwo.costs.items.map((item, index) => (
                    <Item key={index}>
                      <ItemName>{item.name}</ItemName>
                      <ItemAmount>{formatCurrency(item.amount)}</ItemAmount>
                    </Item>
                  ))}
                </ItemsGrid>
              </CategorySection>
              
              <Subtotal style={{ marginTop: '2rem', background: '#0a3a3f' }}>
                <SubtotalLabel>Phase Total</SubtotalLabel>
                <SubtotalAmount>
                  {formatCurrency(USE_OF_FUNDS.phaseOneStageTwo.total)}
                </SubtotalAmount>
              </Subtotal>
            </PhaseBody>
          </PhaseCard>
          
          {/* Phase Two */}
          <PhaseCard>
            <PhaseHeader>
              <PhaseTitle>{USE_OF_FUNDS.phaseTwo.title}</PhaseTitle>
              <PhaseNote>{USE_OF_FUNDS.phaseTwo.note}</PhaseNote>
            </PhaseHeader>
            <PhaseBody>
              <CategorySection>
                <CategoryLabel>{USE_OF_FUNDS.phaseTwo.residential.label}</CategoryLabel>
                <ItemsGrid>
                  <Item>
                    <ItemName>Total Units</ItemName>
                    <ItemAmount>{USE_OF_FUNDS.phaseTwo.residential.units} units</ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>Cost Per Unit</ItemName>
                    <ItemAmount>
                      {formatCurrency(USE_OF_FUNDS.phaseTwo.residential.costPerUnit)}
                    </ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>Sales Price Per Unit</ItemName>
                    <ItemAmount>
                      {formatCurrency(USE_OF_FUNDS.phaseTwo.residential.salesPricePerUnit)}
                    </ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>Total Project Cost</ItemName>
                    <ItemAmount>
                      {formatCurrency(USE_OF_FUNDS.phaseTwo.residential.totalCost)}
                    </ItemAmount>
                  </Item>
                  <Item>
                    <ItemName>Total Revenue</ItemName>
                    <ItemAmount>
                      {formatCurrency(USE_OF_FUNDS.phaseTwo.residential.totalRevenue)}
                    </ItemAmount>
                  </Item>
                </ItemsGrid>
                <Subtotal style={{ background: '#2a7c2e' }}>
                  <SubtotalLabel>Gross Profit</SubtotalLabel>
                  <SubtotalAmount>
                    {formatCurrency(USE_OF_FUNDS.phaseTwo.residential.grossProfit)}
                  </SubtotalAmount>
                </Subtotal>
              </CategorySection>
            </PhaseBody>
          </PhaseCard>
        </PhasesContainer>
        
        <Total>
          <TotalLabel>Total Project Investment</TotalLabel>
          <TotalAmount>
            {formatCurrency(USE_OF_FUNDS.totalInvestment.grandTotal)}
          </TotalAmount>
        </Total>
      </Container>
    </Section>
  );
};

export default UseOfFunds;
