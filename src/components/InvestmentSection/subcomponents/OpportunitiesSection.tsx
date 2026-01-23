import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { WhiteSection } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { SectionTitle } from "../../ui/Typography";
import { Card } from "../../ui/Card";

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
  const { t } = useTranslation('investment');
  
  const opportunities = [
    {
      title: t('investment:opportunities.opportunity1_title'),
      description: t('investment:opportunities.opportunity1_description'),
      image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    },
    {
      title: t('investment:opportunities.opportunity2_title'),
      description: t('investment:opportunities.opportunity2_description'),
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    },
    {
      title: t('investment:opportunities.opportunity3_title'),
      description: t('investment:opportunities.opportunity3_description'),
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    },
    {
      title: t('investment:opportunities.opportunity4_title'),
      description: t('investment:opportunities.opportunity4_description'),
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    }
  ];
  
  return (
    <WhiteSection style={{ paddingBottom: '6rem' }}>
      <Container>
        <SectionTitle>{t('investment:opportunities.title')}</SectionTitle>
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
