import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SummaryText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.7;
  }
`;

interface SummarySectionProps {
  text: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({ text }) => {
  return (
    <Section>
      <Container>
        <SummaryText>{text}</SummaryText>
      </Container>
    </Section>
  );
};

export default SummarySection;
