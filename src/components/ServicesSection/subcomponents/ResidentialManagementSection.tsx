import React from "react";
import styled from "styled-components";
import TextHero from "../../TextHero";
import GoldDivider from "../../ui/GoldDivider";
import { RESIDENTIAL_MANAGEMENT_DATA } from "../servicesSectionData";
import { WhiteSection, TealSection, TealBox } from "../../ui/Sections";

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
  return (
    <>
      <TextHero
        title={RESIDENTIAL_MANAGEMENT_DATA.title}
        backgroundImage={RESIDENTIAL_MANAGEMENT_DATA.backgroundImage}
        breadcrumbs={RESIDENTIAL_MANAGEMENT_DATA.breadcrumbs}
      />
      
      <WhiteSection>
        <ContentWrapper>
          {RESIDENTIAL_MANAGEMENT_DATA.content.intro.map((paragraph, index) => (
            <IntroText key={index}>{paragraph}</IntroText>
          ))}

          <SectionTitle>Primary Objectives</SectionTitle>
          <IntroText>
            The residential management team is committed to providing high-quality, affordable housing options for workforce families while creating a safe and welcoming community environment. Beyond property management, the team maintains excellent conditions through proactive maintenance and capital improvements. Resident support extends to financial literacy programs and job placement assistance, and through close partnerships with local schools and community organizations, residents gain access to education and enrichment opportunities.
          </IntroText>

          <GoldDivider />

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
      </WhiteSection>

      <TealSection>
        <TealBox>
          <TealTitle>Integration with APOZ Industrial Park</TealTitle>
          <TealText>
            Residential management is a critical part of APOZ's ecosystem, attracting skilled labor for Phase 1 industrial tenants while improving employee retention through housing stability. This integrated approach enhances the long-term appeal of APOZ for manufacturers and logistics operators seeking a reliable workforce.
          </TealText>
        </TealBox>
      </TealSection>

      <GreySection>
        <GreyContent>
          <SectionTitle>Technology & Smart Community Features</SectionTitle>
          <IntroText>
            APOZ residential zones leverage smart home technology to enhance energy efficiency and resident convenience, featuring programmable thermostats and LED lighting systems throughout. Residents benefit from an intuitive online portal that streamlines rent payment, maintenance requests, and community communication. Security is prioritized through advanced access control systems, providing peace of mind for all families. Additionally, community Wi-Fi in shared spaces keeps residents connected while supporting remote work opportunities.
          </IntroText>
        </GreyContent>
      </GreySection>
    </>
  );
};

export default ResidentialManagementSection;
