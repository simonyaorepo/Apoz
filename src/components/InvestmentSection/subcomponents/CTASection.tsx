import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { Container } from "../../ui/Containers";

const Section = styled.section`
  background: ${({ theme }) => theme.gradients.tealOverlay},
    url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920') center/cover;
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
`;

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
`;

const CTAButton = styled.button`
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xxl};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccent};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
  }
`;

const CTASection: React.FC = () => {
  const { t } = useTranslation('investment');
  
  return (
    <Section>
      <Container>
        <CTATitle>{t('cta.title')}</CTATitle>
        <CTAText>
          {t('cta.description')}
        </CTAText>
        <CTAButton onClick={() => window.location.href = 'mailto:info@apoz.com'}>
          {t('cta.button')}
        </CTAButton>
      </Container>
    </Section>
  );
};

export default CTASection;
