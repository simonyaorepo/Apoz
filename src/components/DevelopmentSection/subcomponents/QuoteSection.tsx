import React from "react";
import styled from "styled-components";

const GreySection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const QuoteMark = styled.div`
  font-size: 120px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.grey};
  opacity: 1;
  margin-bottom: -20px;
  font-family: Georgia, serif;
  font-weight: 400;
  
  &::before {
    content: '\\201C';
  }
`;

const QuoteText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.foreground};
  max-width: 800px;
  margin: 0 auto;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

interface QuoteSectionProps {
  quote: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote }) => {
  return (
    <GreySection>
      <Container>
        <QuoteMark />
        <QuoteText>{quote}</QuoteText>
      </Container>
    </GreySection>
  );
};

export default QuoteSection;
