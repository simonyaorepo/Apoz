import React from "react";
import styled from "styled-components";
import { AlertCircle, CheckCircle, TrendingUp, AlertTriangle } from "lucide-react";
import { GreySection } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { SectionTitle } from "../../ui/Typography";
import { SWOT_ANALYSIS } from "./investmentSectionData";

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  flex-wrap: wrap;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme, $active }) => 
    $active ? theme.colors.teal : theme.colors.white};
  color: ${({ theme, $active }) => 
    $active ? theme.colors.white : theme.colors.foreground};
  border: 2px solid ${({ theme, $active }) => 
    $active ? theme.colors.teal : theme.colors.grey};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: ${({ theme, $active }) => 
      $active ? theme.colors.teal : theme.colors.grey};
    border-color: ${({ theme }) => theme.colors.teal};
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Card = styled.div<{ $highlight?: boolean }>`
  background: ${({ theme, $highlight }) => 
    $highlight ? theme.colors.teal : theme.colors.white};
  border: 2px solid ${({ theme, $highlight }) => 
    $highlight ? theme.colors.gold : theme.colors.grey};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const CardHeader = styled.div<{ $highlight?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  svg {
    color: ${({ theme, $highlight }) => 
      $highlight ? theme.colors.gold : theme.colors.teal};
    flex-shrink: 0;
    margin-top: 4px;
  }
`;

const CardTitle = styled.h3<{ $highlight?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $highlight }) => 
    $highlight ? theme.colors.white : theme.colors.foreground};
  margin: 0;
`;

const CardDescription = styled.p<{ $highlight?: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  color: ${({ theme, $highlight }) => 
    $highlight ? 'rgba(255, 255, 255, 0.95)' : theme.colors.foreground};
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.foreground};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.8;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxxl};
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.6;
`;

type TabType = 'strengths' | 'weaknesses' | 'opportunities' | 'threats';

const SWOTAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TabType>('opportunities');

  const getIconForTab = (tab: TabType) => {
    switch (tab) {
      case 'strengths':
        return CheckCircle;
      case 'weaknesses':
        return AlertCircle;
      case 'opportunities':
        return TrendingUp;
      case 'threats':
        return AlertTriangle;
    }
  };

  const renderContent = () => {
    const Icon = getIconForTab(activeTab);
    
    switch (activeTab) {
      case 'strengths':
        return (
          <CardsGrid>
            {SWOT_ANALYSIS.strengths.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <item.icon size={24} />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            ))}
          </CardsGrid>
        );
      
      case 'weaknesses':
        return (
          <CardsGrid>
            {SWOT_ANALYSIS.weaknesses.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <item.icon size={24} />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            ))}
          </CardsGrid>
        );
      
      case 'opportunities':
        return (
          <CardsGrid>
            {SWOT_ANALYSIS.opportunities.map((item, index) => (
              <Card key={index} $highlight={item.highlight}>
                <CardHeader $highlight={item.highlight}>
                  <Icon size={24} />
                  <CardTitle $highlight={item.highlight}>{item.title}</CardTitle>
                </CardHeader>
                <CardDescription $highlight={item.highlight}>
                  {item.description}
                </CardDescription>
              </Card>
            ))}
          </CardsGrid>
        );
      
      case 'threats':
        return (
          <CardsGrid>
            {SWOT_ANALYSIS.threats.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <Icon size={24} />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            ))}
          </CardsGrid>
        );
      
      default:
        return <EmptyState>Select a category to view analysis</EmptyState>;
    }
  };

  return (
    <GreySection style={{ background: '#f8f9fa' }}>
      <Container>
        <SectionTitle style={{ textAlign: 'center' }}>{SWOT_ANALYSIS.title}</SectionTitle>
        <Subtitle>{SWOT_ANALYSIS.subtitle}</Subtitle>
        
        <TabsContainer>
          <Tab 
            $active={activeTab === 'opportunities'} 
            onClick={() => setActiveTab('opportunities')}
          >
            Opportunities
          </Tab>
          <Tab 
            $active={activeTab === 'strengths'} 
            onClick={() => setActiveTab('strengths')}
          >
            Strengths
          </Tab>
          <Tab 
            $active={activeTab === 'weaknesses'} 
            onClick={() => setActiveTab('weaknesses')}
          >
            Weaknesses
          </Tab>
          <Tab 
            $active={activeTab === 'threats'} 
            onClick={() => setActiveTab('threats')}
          >
            Threats
          </Tab>
        </TabsContainer>
        
        {renderContent()}
      </Container>
    </GreySection>
  );
};

export default SWOTAnalysis;
