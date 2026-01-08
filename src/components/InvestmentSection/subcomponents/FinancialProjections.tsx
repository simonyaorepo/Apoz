import React from "react";
import styled from "styled-components";
import { DollarSign, Building2, Home } from "lucide-react";
import { WhiteSection } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { SectionTitle } from "../../ui/Typography";
import { FINANCIAL_PROJECTIONS } from "./investmentSectionData";

const ProjectionsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;

const YearCard = styled.div<{ $isHighlight?: boolean }>`
  background: ${({ theme, $isHighlight }) => 
    $isHighlight ? theme.colors.teal : theme.colors.white};
  border: 2px solid ${({ theme, $isHighlight }) => 
    $isHighlight ? theme.colors.gold : theme.colors.grey};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const YearHeader = styled.div<{ $isHighlight?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 2px solid ${({ theme, $isHighlight }) => 
    $isHighlight ? theme.colors.gold : theme.colors.grey};
`;

const Year = styled.h3<{ $isHighlight?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $isHighlight }) => 
    $isHighlight ? theme.colors.white : theme.colors.foreground};
`;

const Revenue = styled.div<{ $isHighlight?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $isHighlight }) => 
    $isHighlight ? theme.colors.gold : theme.colors.teal};
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Metric = styled.div<{ $isHighlight?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  svg {
    color: ${({ theme, $isHighlight }) => 
      $isHighlight ? theme.colors.gold : theme.colors.teal};
    flex-shrink: 0;
  }
`;

const MetricLabel = styled.div<{ $isHighlight?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme, $isHighlight }) => 
    $isHighlight ? 'rgba(255, 255, 255, 0.8)' : theme.colors.foreground};
  opacity: 0.8;
`;

const MetricValue = styled.div<{ $isHighlight?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $isHighlight }) => 
    $isHighlight ? theme.colors.white : theme.colors.foreground};
`;

const Note = styled.p<{ $isHighlight?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme, $isHighlight }) => 
    $isHighlight ? 'rgba(255, 255, 255, 0.9)' : theme.colors.foreground};
  font-style: italic;
  opacity: ${({ $isHighlight }) => $isHighlight ? 1 : 0.7};
`;

const RatesSection = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const RatesTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const RatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const RateItem = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.foreground};
    margin: 0;
    
    strong {
      color: ${({ theme }) => theme.colors.teal};
      display: block;
      margin-bottom: ${({ theme }) => theme.spacing.xs};
    }
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.foreground};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.8;
`;

const formatCurrency = (value: number): string => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value.toLocaleString()}`;
};

const formatNumber = (value: number): string => {
  return value.toLocaleString();
};

const FinancialProjections: React.FC = () => {
  return (
    <WhiteSection>
      <Container>
        <SectionTitle>{FINANCIAL_PROJECTIONS.title}</SectionTitle>
        <Subtitle>{FINANCIAL_PROJECTIONS.subtitle}</Subtitle>
        
        <RatesSection>
          <RatesTitle>Rental Rate Structure</RatesTitle>
          <RatesGrid>
            <RateItem>
              <p>
                <strong>Industrial</strong>
                {FINANCIAL_PROJECTIONS.rentalRates.industrial}
              </p>
            </RateItem>
            <RateItem>
              <p>
                <strong>Commercial</strong>
                {FINANCIAL_PROJECTIONS.rentalRates.commercial}
              </p>
            </RateItem>
            <RateItem>
              <p>
                <strong>Residential</strong>
                {FINANCIAL_PROJECTIONS.rentalRates.residential}
              </p>
            </RateItem>
          </RatesGrid>
        </RatesSection>
        
        <ProjectionsGrid>
          {FINANCIAL_PROJECTIONS.projections.map((projection, index) => {
            const isHighlight = projection.year === "2030+";
            return (
              <YearCard key={index} $isHighlight={isHighlight}>
                <YearHeader $isHighlight={isHighlight}>
                  <Year $isHighlight={isHighlight}>{projection.year}</Year>
                  <Revenue $isHighlight={isHighlight}>
                    {formatCurrency(projection.totalRevenue)}
                  </Revenue>
                </YearHeader>
                
                <MetricsGrid>
                  <Metric $isHighlight={isHighlight}>
                    <Building2 size={20} />
                    <div>
                      <MetricLabel $isHighlight={isHighlight}>Industrial</MetricLabel>
                      <MetricValue $isHighlight={isHighlight}>
                        {formatNumber(projection.industrial.sqft)} sq ft
                      </MetricValue>
                    </div>
                  </Metric>
                  
                  <Metric $isHighlight={isHighlight}>
                    <Building2 size={20} />
                    <div>
                      <MetricLabel $isHighlight={isHighlight}>Commercial</MetricLabel>
                      <MetricValue $isHighlight={isHighlight}>
                        {formatNumber(projection.commercial.sqft)} sq ft
                      </MetricValue>
                    </div>
                  </Metric>
                  
                  <Metric $isHighlight={isHighlight}>
                    <Home size={20} />
                    <div>
                      <MetricLabel $isHighlight={isHighlight}>Residential</MetricLabel>
                      <MetricValue $isHighlight={isHighlight}>
                        {formatNumber(projection.residential.units)} units
                      </MetricValue>
                    </div>
                  </Metric>
                  
                  <Metric $isHighlight={isHighlight}>
                    <DollarSign size={20} />
                    <div>
                      <MetricLabel $isHighlight={isHighlight}>Other Income</MetricLabel>
                      <MetricValue $isHighlight={isHighlight}>
                        {formatCurrency(projection.otherIncome)}
                      </MetricValue>
                    </div>
                  </Metric>
                </MetricsGrid>
                
                <Note $isHighlight={isHighlight}>{projection.note}</Note>
              </YearCard>
            );
          })}
        </ProjectionsGrid>
      </Container>
    </WhiteSection>
  );
};

export default FinancialProjections;
