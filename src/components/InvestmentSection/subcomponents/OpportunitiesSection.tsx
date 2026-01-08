import React from "react";
import styled from "styled-components";
import { WhiteSection } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { SectionTitle } from "../../ui/Typography";
import { Card } from "../../ui/Card";
import { opportunities } from "./investmentSectionData";

const OpportunitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const OpportunityContent = styled.div`
  position: relative;
  z-index: 1;
`;

const OpportunityTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const OpportunityDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

const OpportunitiesSection: React.FC = () => {
  return (
    <WhiteSection style={{ paddingBottom: '6rem' }}>
      <Container>
        <SectionTitle>Current Opportunities</SectionTitle>
        <OpportunitiesGrid>
          {opportunities.map((opportunity, index) => (
            <Card key={index} variant="image-overlay" $image={opportunity.image}>
              <OpportunityContent>
                <OpportunityTitle>{opportunity.title}</OpportunityTitle>
                <OpportunityDescription>{opportunity.description}</OpportunityDescription>
              </OpportunityContent>
            </Card>
          ))}
        </OpportunitiesGrid>
      </Container>
    </WhiteSection>
  );
};

export default OpportunitiesSection;
