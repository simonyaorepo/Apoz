import React from "react";
import styled from "styled-components";
import TextHero from "../../TextHero";
import { Section } from "../../ui/Section";
import GoldDivider from "../../ui/GoldDivider";
import { RESIDENTIAL_MANAGEMENT_DATA } from "../servicesSectionData";
import {
  TealSection,
  TealBox,
} from "./SharedStyles";

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

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "•";
      color: ${({ theme }) => theme.colors.accent};
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    li {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
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

const TealList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.8;
    color: white;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "✓";
      color: ${({ theme }) => theme.colors.goldAccent};
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    li {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
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

const CardGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const BenefitItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.darkBlue};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
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
          <BulletList>
            {RESIDENTIAL_MANAGEMENT_DATA.content.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </BulletList>

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
          <TealList>
            {RESIDENTIAL_MANAGEMENT_DATA.content.integration.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </TealList>
        </TealBox>
      </TealSection>

      <GoldDivider />

      <Section>
        <ContentWrapper>
          <SectionTitle>Technology & Smart Community Features</SectionTitle>
          <BulletList>
            {RESIDENTIAL_MANAGEMENT_DATA.content.technology.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </BulletList>
        </ContentWrapper>
      </Section>

      <GreySection>
        <GreyContent>
          <SectionTitle>Financial Benefits for Investors</SectionTitle>
          <CardGrid>
            {RESIDENTIAL_MANAGEMENT_DATA.content.benefits.map((benefit, index) => (
              <BenefitItem key={index}>{benefit}</BenefitItem>
            ))}
          </CardGrid>
        </GreyContent>
      </GreySection>
    </>
  );
};

export default ResidentialManagementSection;
