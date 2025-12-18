import React from "react";
import styled from "styled-components";
import { Section, Container, SectionTitle } from "../InvestmentSection.styles";
import { opportunities } from "./investmentSectionData";

const OpportunitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const OpportunityCard = styled.div<{ $image: string }>`
  position: relative;
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${({ $image }) => $image}) center/cover;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    
    &::after {
      opacity: 0.9;
    }
  }
  
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10, 58, 63, 0.8) 0%, transparent 60%);
    opacity: 0.7;
    transition: opacity 0.3s ease;
    z-index: 0;
  }
`;

const OpportunityContent = styled.div`
  position: relative;
  z-index: 1;
`;

const OpportunityTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const OpportunityDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

const OpportunitiesSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Current Opportunities</SectionTitle>
        <OpportunitiesGrid>
          {opportunities.map((opportunity, index) => (
            <OpportunityCard key={index} $image={opportunity.image}>
              <OpportunityContent>
                <OpportunityTitle>{opportunity.title}</OpportunityTitle>
                <OpportunityDescription>{opportunity.description}</OpportunityDescription>
              </OpportunityContent>
            </OpportunityCard>
          ))}
        </OpportunitiesGrid>
      </Container>
    </Section>
  );
};

export default OpportunitiesSection;
