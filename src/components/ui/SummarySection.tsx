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
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
`;

const SummaryText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.foreground};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.6;
  }
`;

interface SummarySectionProps {
  text: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({ text }) => {
  return (
    <Section>
      <Container>
        <SummaryText dangerouslySetInnerHTML={{ __html: text }} />
      </Container>
    </Section>
  );
};

export default SummarySection;
