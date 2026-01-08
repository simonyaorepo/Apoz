import React from "react";
import styled from "styled-components";
import TextHero from "../../TextHero";
import { Section } from "../../ui/Section";
import GoldDivider from "../../ui/GoldDivider";
import { RESIDENTIAL_MANAGEMENT_DATA } from "../servicesSectionData";
import { TealSection, TealBox } from "../../ui/Sections";

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 1.5rem;
  }
`;

const IntroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 3rem 0 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin: 2rem 0 1rem;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.fontSizes.md};

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  th {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }

  tr:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    
    th, td {
      padding: 0.75rem;
    }
  }
`;



const TealTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: white;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
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
  max-width: 1200px;
  margin: 0 auto;
`;

interface ResidentialManagementSectionProps {
  onNavigate: (page: string) => void;
}

const ResidentialManagementSection: React.FC<ResidentialManagementSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title={RESIDENTIAL_MANAGEMENT_DATA.title}
        backgroundImage={RESIDENTIAL_MANAGEMENT_DATA.backgroundImage}
        breadcrumbs={RESIDENTIAL_MANAGEMENT_DATA.breadcrumbs}
      />
      
      <Section>
        <ContentWrapper>
          {RESIDENTIAL_MANAGEMENT_DATA.content.intro.map((paragraph, index) => (
            <IntroText key={index}>{paragraph}</IntroText>
          ))}

          <SectionTitle>Primary Objectives</SectionTitle>
          <IntroText>
            The residential management team is committed to providing high-quality, affordable housing options for workforce families and creating a safe, welcoming community environment.
          </IntroText>
          <IntroText>
            They maintain excellent property conditions through proactive maintenance and capital improvements.
          </IntroText>
          <IntroText>
            The team offers resident support services including financial literacy programs and job placement assistance.
          </IntroText>
          <IntroText>
            They work closely with local schools and community organizations to ensure residents have access to education and enrichment opportunities.
          </IntroText>

          <SectionTitle>Core Residential Management Services</SectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>Service Category</th>
                <th>Scope</th>
                <th>Impact</th>
              </tr>
            </thead>
            <tbody>
              {RESIDENTIAL_MANAGEMENT_DATA.content.coreServices.map((service, index) => (
                <tr key={index}>
                  <td><strong>{service.category}</strong></td>
                  <td>{service.scope}</td>
                  <td>{service.impact}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </ContentWrapper>
      </Section>

      <TealSection>
        <TealBox>
          <TealTitle>Integration with APOZ Industrial Park</TealTitle>
          <IntroText style={{ color: 'white', marginBottom: '1rem' }}>
            Residential management is a critical part of APOZ's ecosystem:
          </IntroText>
          {RESIDENTIAL_MANAGEMENT_DATA.content.integration.map((point, index) => (
            <p key={index} style={{ color: 'white', fontSize: '0.9375rem', lineHeight: '1.7', opacity: 0.95, marginBottom: index === RESIDENTIAL_MANAGEMENT_DATA.content.integration.length - 1 ? '0' : '1rem' }}>
              {point}
            </p>
          ))}
        </TealBox>
      </TealSection>

      <GreySection>
        <GreyContent>
          <SectionTitle>Technology & Smart Community Features</SectionTitle>
          <IntroText>
            APOZ residential zones incorporate smart home technology for energy efficiency and resident convenience, including programmable thermostats and LED lighting systems.
          </IntroText>
          <IntroText>
            An online resident portal enables easy rent payment, maintenance requests, and community communication.
          </IntroText>
          <IntroText>
            Advanced security systems with access control provide peace of mind for all residents.
          </IntroText>
          <IntroText>
            Community Wi-Fi in common areas keeps families connected and supports remote work opportunities.
          </IntroText>
        </GreyContent>
      </GreySection>

      <GoldDivider />
    </>
  );
};

export default ResidentialManagementSection;
