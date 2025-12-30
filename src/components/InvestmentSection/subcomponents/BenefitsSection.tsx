import React from "react";
import styled from "styled-components";
import { Section, Container, SectionTitle } from "../../ui/Section";
import { Card, CardTitle, CardDescription } from "../../ui/Card";
import { IconCircle } from "../../ui/IconCircle";
import { benefits } from "./investmentSectionData";

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const CenteredCard = styled.div`
  text-align: center;
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
              <Card key={index} variant="hover">
                <CenteredCard>
                  <IconCircle size="md">
                    <Icon size={28} />
                  </IconCircle>
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CenteredCard>
              </Card>
            );
          })}
        </BenefitsGrid>
      </Container>
    </Section>
  );
};

export default BenefitsSection;
