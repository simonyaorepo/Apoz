import React from "react";
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
  margin-bottom: ${({ theme }) => theme.spacing.md};
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
  return (
    <Section>
      <Container>
        <CTATitle>Your Role in a Shared Vision</CTATitle>
        <CTAText>
          Whether you are a private equity firm, institutional investor, international partner, or a mission-aligned fund, 
          APOZ is a platform for forward-thinking capital to thrive. Our leadership team will work directly with you to 
          align project goals, risk management, and long-term return.
        </CTAText>
        <CTAButton onClick={() => window.location.href = 'mailto:info@apoz.com'}>
          Schedule a Meeting
        </CTAButton>
      </Container>
    </Section>
  );
};

export default CTASection;
