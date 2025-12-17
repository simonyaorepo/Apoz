import React from "react";
import styled from "styled-components";

const SummarySection = styled.section`
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

const AboutSummary: React.FC = () => {
  return (
    <SummarySection>
      <Container>
        <SummaryText>
          The Asia Pacific Opportunity Zone (APOZ) is a strategic development integrating industrial, commercial, and residential infrastructure in Southeast Texas. APOZ is designed to serve as a comprehensive hub connecting Asian and Pacific markets with North American industry, leveraging Houston's position as a global trade gateway. Through strategic partnerships with international trade corporations and local government entities, APOZ creates a sustainable ecosystem for economic growth, housing development, and cross-continental commerce.
        </SummaryText>
      </Container>
    </SummarySection>
  );
};

export default AboutSummary;
