import React from "react";
import styled from "styled-components";
import { Section, Container, SectionTitle } from "../InvestmentSection.styles";
import { benefits } from "./investmentSectionData";

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const BenefitCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.gradients.teal};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const BenefitTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const BenefitDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.foreground};
`;

const BenefitsSection: React.FC = () => {
  return (
    <Section $background="grey">
      <Container>
        <SectionTitle>Why Invest in APOZ?</SectionTitle>
        <BenefitsGrid>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <BenefitCard key={index}>
                <IconWrapper><Icon /></IconWrapper>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            );
          })}
        </BenefitsGrid>
      </Container>
    </Section>
  );
};

export default BenefitsSection;
