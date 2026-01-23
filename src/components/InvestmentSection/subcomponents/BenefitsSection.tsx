import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { DollarSign, Globe, TrendingUp, Shield, Zap, Building2 } from "lucide-react";
import { GreySection } from "../../ui/Sections";
import { Container } from "../../ui/Containers";
import { SectionTitle } from "../../ui/Typography";
import { Card, CardTitle, CardDescription } from "../../ui/Card";
import { IconCircle } from "../../ui/IconCircle";

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
  const { t } = useTranslation('investment');
  
  const benefits = [
    { icon: DollarSign, title: t('benefits.benefit1_title'), description: t('benefits.benefit1_description') },
    { icon: Globe, title: t('benefits.benefit2_title'), description: t('benefits.benefit2_description') },
    { icon: TrendingUp, title: t('benefits.benefit3_title'), description: t('benefits.benefit3_description') },
    { icon: Shield, title: t('benefits.benefit4_title'), description: t('benefits.benefit4_description') },
    { icon: Zap, title: t('benefits.benefit5_title'), description: t('benefits.benefit5_description') },
    { icon: Building2, title: t('benefits.benefit6_title'), description: t('benefits.benefit6_description') }
  ];
  
  return (
    <GreySection>
      <Container>
        <SectionTitle>{t('whyInvest.title')}</SectionTitle>
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
    </GreySection>
  );
};

export default BenefitsSection;
