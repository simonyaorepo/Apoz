import React from "react";
import styled from "styled-components";
import TextHero from "../../TextHero";

const HeroWrapper = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const WhiteSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
  padding-top: calc(80px + ${({ theme }) => theme.spacing.xl});
  
  @media (max-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing.xxxl};
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TextContent = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.foreground};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const GreySection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
  text-align: center;
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

interface OverviewSectionProps {
  title: string;
  content?: string[];
  quote?: string;
  backgroundImage: string;
  breadcrumbLabel: string;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
  title,
  content,
  quote,
  backgroundImage,
  breadcrumbLabel,
}) => {
  return (
    <>
      <HeroWrapper>
        <TextHero
          title={title}
          backgroundImage={backgroundImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: breadcrumbLabel }
          ]}
        />
      </HeroWrapper>
      
      {content && content.length > 0 && (
        <WhiteSection>
          <Container>
            <TextContent>
              {content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </TextContent>
          </Container>
        </WhiteSection>
      )}
      
      {quote && (
        <GreySection>
          <Container>
            <QuoteMark />
            <QuoteText>{quote}</QuoteText>
          </Container>
        </GreySection>
      )}
    </>
  );
};

export default OverviewSection;
