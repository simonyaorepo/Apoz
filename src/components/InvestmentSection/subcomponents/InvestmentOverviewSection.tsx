import React from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import BenefitsSection from "./BenefitsSection";
import OpportunitiesSection from "./OpportunitiesSection";
import SWOTAnalysis from "./SWOTAnalysis";
import styled from "styled-components";
import { WhiteSection } from "../../ui/Sections";
import { Container } from "../../ui/Containers";

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
  const { t } = useTranslation(['investment', 'common']);
  
  return (
    <>
      <TextHero
        title={t('overview.title')}
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.investment'), href: "/investment" },
          { label: t('overview.breadcrumb') }
        ]}
      />
      
      <IntroSection>
        <Container>
          <IntroText>
            {t('overview.description')}
          </IntroText>

          <SectionTitle>{t('overview.strategy_title')}</SectionTitle>
          <StrategyTable>
            <thead>
              <tr>
                <th>{t('overview.strategy_phase_header')}</th>
                <th>{t('overview.strategy_scope_header')}</th>
                <th>{t('overview.strategy_capital_header')}</th>
                <th>{t('overview.strategy_funding_header')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={t('overview.strategy_phase_header')}><strong>{t('overview.strategy_phase1_phase')}</strong></td>
                <td data-label={t('overview.strategy_scope_header')}>{t('overview.strategy_phase1_scope')}</td>
                <td data-label={t('overview.strategy_capital_header')}>{t('overview.strategy_phase1_capital')}</td>
                <td data-label={t('overview.strategy_funding_header')}>{t('overview.strategy_phase1_funding')}</td>
              </tr>
              <tr>
                <td data-label={t('overview.strategy_phase_header')}><strong>{t('overview.strategy_phase2_phase')}</strong></td>
                <td data-label={t('overview.strategy_scope_header')}>{t('overview.strategy_phase2_scope')}</td>
                <td data-label={t('overview.strategy_capital_header')}>{t('overview.strategy_phase2_capital')}</td>
                <td data-label={t('overview.strategy_funding_header')}>{t('overview.strategy_phase2_funding')}</td>
              </tr>
              <tr>
                <td data-label={t('overview.strategy_phase_header')}><strong>{t('overview.strategy_phase3_phase')}</strong></td>
                <td data-label={t('overview.strategy_scope_header')}>{t('overview.strategy_phase3_scope')}</td>
                <td data-label={t('overview.strategy_capital_header')}>{t('overview.strategy_phase3_capital')}</td>
                <td data-label={t('overview.strategy_funding_header')}>{t('overview.strategy_phase3_funding')}</td>
              </tr>
            </tbody>
          </StrategyTable>

          <SectionTitle>{t('overview.capital_structure_title')}</SectionTitle>
          <CapitalStructureGrid>
            <CapitalCard>
              <h4>{t('overview.capital_equity_layer')}</h4>
              <p><strong>{t('overview.capital_role_header')}:</strong> {t('overview.capital_equity_role')}</p>
              <p><strong>{t('overview.capital_return_header')}:</strong> {t('overview.capital_equity_return')}</p>
            </CapitalCard>
            <CapitalCard>
              <h4>{t('overview.capital_preferred_layer')}</h4>
              <p><strong>{t('overview.capital_role_header')}:</strong> {t('overview.capital_preferred_role')}</p>
              <p><strong>{t('overview.capital_return_header')}:</strong> {t('overview.capital_preferred_return')}</p>
            </CapitalCard>
            <CapitalCard>
              <h4>{t('overview.capital_debt_layer')}</h4>
              <p><strong>{t('overview.capital_role_header')}:</strong> {t('overview.capital_debt_role')}</p>
              <p><strong>{t('overview.capital_return_header')}:</strong> {t('overview.capital_debt_return')}</p>
            </CapitalCard>
            <CapitalCard>
              <h4>{t('overview.capital_developer_layer')}</h4>
              <p><strong>{t('overview.capital_role_header')}:</strong> {t('overview.capital_developer_role')}</p>
              <p><strong>{t('overview.capital_return_header')}:</strong> {t('overview.capital_developer_return')}</p>
            </CapitalCard>
          </CapitalStructureGrid>

          <SectionTitle>{t('investment:overview.investor_benefits_title')}</SectionTitle>
          <div>
            <SubsectionTitle>{t('investment:overview.qoz_tax_title')}</SubsectionTitle>
            <InfoText>
              {t('investment:overview.qoz_tax_description')}
            </InfoText>

            <SubsectionTitle>{t('investment:overview.ftz_operating_title')}</SubsectionTitle>
            <InfoText>
              {t('investment:overview.ftz_operating_description')}
            </InfoText>

            <SubsectionTitle>{t('investment:overview.irr_potential_title')}</SubsectionTitle>
            <InfoText><strong>{t('investment:overview.irr_baseLabel')}</strong> {t('investment:overview.irr_base')}</InfoText>
            <InfoText><strong>{t('investment:overview.irr_qozLabel')}</strong> {t('investment:overview.irr_with_qoz')}</InfoText>
          </div>

          <SectionTitle>{t('investment:overview.exit_strategy_title')}</SectionTitle>
          <InfoText>{t('investment:overview.exit_reit')}</InfoText>
          <InfoText>{t('investment:overview.exit_sale')}</InfoText>
          <InfoText>{t('investment:overview.exit_ipo')}</InfoText>
        </Container>
      </IntroSection>

      <BenefitsSection />
      <OpportunitiesSection />
      <SWOTAnalysis />
    </>
  );
};

export default InvestmentOverviewSection;
