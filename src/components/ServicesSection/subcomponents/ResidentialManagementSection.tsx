import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import TextHero from "../../TextHero";
import GoldDivider from "../../ui/GoldDivider";
import { WhiteSection, TealSection, TealBox } from "../../ui/Sections";
import { StyledTable } from "../../ui/Table";

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 1.5rem;
  }
`;

const IntroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin: 3rem 0 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin: 2rem 0 1rem;
  }
`;

const TealTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: white;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const TealText = styled.p`
  color: rgba(255, 255, 255, 0.95);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.7;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const GreySection = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 4rem 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 1.5rem;
  }
`;

const GreyContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
`;

interface ResidentialManagementSectionProps {
  onNavigate: (page: string) => void;
}

const ResidentialManagementSection: React.FC<ResidentialManagementSectionProps> = ({ onNavigate: _onNavigate }) => {
  const { t } = useTranslation(['services', 'common']);
  
  const coreServices = [
    {
      category: t('services:residentialManagement.coreService1_category'),
      scope: t('services:residentialManagement.coreService1_scope'),
      impact: t('services:residentialManagement.coreService1_impact')
    },
    {
      category: t('services:residentialManagement.coreService2_category'),
      scope: t('services:residentialManagement.coreService2_scope'),
      impact: t('services:residentialManagement.coreService2_impact')
    },
    {
      category: t('services:residentialManagement.coreService3_category'),
      scope: t('services:residentialManagement.coreService3_scope'),
      impact: t('services:residentialManagement.coreService3_impact')
    },
    {
      category: t('services:residentialManagement.coreService4_category'),
      scope: t('services:residentialManagement.coreService4_scope'),
      impact: t('services:residentialManagement.coreService4_impact')
    },
    {
      category: t('services:residentialManagement.coreService5_category'),
      scope: t('services:residentialManagement.coreService5_scope'),
      impact: t('services:residentialManagement.coreService5_impact')
    }
  ];
  
  return (
    <>
      <TextHero
        title={t('services:residentialManagement.title')}
        backgroundImage="https://images.unsplash.com/photo-1605146769289-440113cc3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.services'), href: "/services" },
          { label: t('common:nav.residentialManagement') }
        ]}
      />
      
      <WhiteSection>
        <ContentWrapper>
          <IntroText>{t('services:residentialManagement.intro')}</IntroText>

          <SectionTitle>{t('services:residentialManagement.primary_objectives_title')}</SectionTitle>
          <IntroText>
            {t('services:residentialManagement.primary_objectives_text')}
          </IntroText>

          <GoldDivider />

          <SectionTitle>{t('services:residentialManagement.core_services_title')}</SectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>{t('services:residentialManagement.service_category_header')}</th>
                <th>{t('services:residentialManagement.scope_header')}</th>
                <th>{t('services:residentialManagement.impact_header')}</th>
              </tr>
            </thead>
            <tbody>
              {coreServices.map((service, index) => (
                <tr key={index}>
                  <td data-label="Service Category"><strong>{service.category}</strong></td>
                  <td data-label="Scope">{service.scope}</td>
                  <td data-label="Impact">{service.impact}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </ContentWrapper>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealTitle>{t('services:residentialManagement.integration_title')}</TealTitle>
          <TealText>
            {t('services:residentialManagement.integration_text')}
          </TealText>
        </TealBox>
      </TealSection>

      <GreySection>
        <GreyContent>
          <SectionTitle>{t('services:residentialManagement.technology_title')}</SectionTitle>
          <IntroText>
            {t('services:residentialManagement.technology_text')}
          </IntroText>
        </GreyContent>
      </GreySection>
    </>
  );
};

export default ResidentialManagementSection;
