import React from "react";
import TextHero from "../../TextHero";
import BenefitsSection from "./BenefitsSection";
import OpportunitiesSection from "./OpportunitiesSection";
import SWOTAnalysis from "./SWOTAnalysis";
import styled from "styled-components";
import { WhiteSection } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { INVESTMENT_OVERVIEW } from "./investmentSectionData";

const IntroSection = styled(WhiteSection)`
  background: ${({ theme }) => theme.colors.white};
`;

const IntroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacing.xxxl} 0 ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
`;

const SubsectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-top: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h5};
  }
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.7;
  margin: ${({ theme }) => theme.spacing.sm} 0;
  
  strong {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const StrategyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  
  th, td {
    padding: ${({ theme }) => theme.spacing.lg};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
  
  th {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
  
  tr:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    th, td {
      padding: ${({ theme }) => theme.spacing.md};
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    
    thead {
      display: none;
    }
    
    tbody, tr, td {
      display: block;
      width: 100%;
    }
    
    tr {
      margin-bottom: ${({ theme }) => theme.spacing.lg};
      border: 1px solid ${({ theme }) => theme.colors.border};
    }
    
    td {
      position: relative;
      padding-left: 50%;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
      
      &:before {
        content: attr(data-label);
        position: absolute;
        left: ${({ theme }) => theme.spacing.md};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

const CapitalStructureGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CapitalCard = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.teal};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  transition: ${({ theme }) => theme.transition.fast};
  
  &:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.h5};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    margin: ${({ theme }) => theme.spacing.sm} 0;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.foreground};
    line-height: 1.6;
    
    strong {
      color: ${({ theme }) => theme.colors.darkBlue};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
    
    h4 {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
    
    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;

interface InvestmentOverviewSectionProps {
  onNavigate: (page: string) => void;
}

const InvestmentOverviewSection: React.FC<InvestmentOverviewSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title="Investment Overview"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Investment", href: "/investment" },
          { label: "Overview" }
        ]}
      />
      
      <IntroSection>
        <Container>
          <IntroText>
            {INVESTMENT_OVERVIEW.description} APOZ is strategically located in a federally designated Qualified Opportunity Zone and Foreign-Trade Zone, offering investors powerful tax incentives including capital gains deferral and duty savings. The project is structured to accommodate both equity and debt investors across multiple phases, with strong exit strategies through REIT conversion or institutional buyouts.
          </IntroText>

          <SectionTitle>Investment Strategy</SectionTitle>
          <StrategyTable>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Scope</th>
                <th>Capital Required</th>
                <th>Funding Sources</th>
              </tr>
            </thead>
            <tbody>
              {INVESTMENT_OVERVIEW.investmentStrategy.map((phase, index) => (
                <tr key={index}>
                  <td data-label="Phase"><strong>{phase.phase}</strong></td>
                  <td data-label="Scope">{phase.scope}</td>
                  <td data-label="Capital Required">{phase.capitalRequired}</td>
                  <td data-label="Funding Sources">{phase.fundingSources}</td>
                </tr>
              ))}
            </tbody>
          </StrategyTable>

          <SectionTitle>Capital Structure</SectionTitle>
          <CapitalStructureGrid>
            {INVESTMENT_OVERVIEW.capitalStructure.map((item, index) => (
              <CapitalCard key={index}>
                <h4>{item.layer}</h4>
                <p><strong>Role:</strong> {item.role}</p>
                <p><strong>Return Type:</strong> {item.returnType}</p>
              </CapitalCard>
            ))}
          </CapitalStructureGrid>

          <SectionTitle>Investor Benefits</SectionTitle>
          <div>
            <SubsectionTitle>QOZ Tax Benefits</SubsectionTitle>
            <InfoText>
              Investors can defer capital gains taxes until December 31, 2026 by investing through a Qualified Opportunity Fund (QOF). After holding the investment for 10 years, all appreciation becomes permanently tax-free, creating significant long-term wealth-building potential.
            </InfoText>

            <SubsectionTitle>FTZ Operating Advantages</SubsectionTitle>
            <InfoText>
              The Foreign-Trade Zone designation allows tenants to defer or eliminate customs duties on imported goods, significantly reducing operating costs. Companies engaged in manufacturing or re-export can achieve substantial savings, improving overall project returns and tenant retention.
            </InfoText>

            <SubsectionTitle>IRR Potential</SubsectionTitle>
            <InfoText><strong>Base Case:</strong> {INVESTMENT_OVERVIEW.investorBenefits.irrPotential.baseCase}</InfoText>
            <InfoText><strong>With QOZ Benefits:</strong> {INVESTMENT_OVERVIEW.investorBenefits.irrPotential.withQOZ}</InfoText>
          </div>

          <SectionTitle>Exit Strategy</SectionTitle>
          {INVESTMENT_OVERVIEW.exitStrategy.map((strategy, index) => (
            <InfoText key={index}>{strategy}</InfoText>
          ))}
        </Container>
      </IntroSection>

      <BenefitsSection />
      <OpportunitiesSection />
      <SWOTAnalysis />
    </>
  );
};

export default InvestmentOverviewSection;
