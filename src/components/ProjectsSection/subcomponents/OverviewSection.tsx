import React from "react";
import styled from "styled-components";
import TextHero from "../../TextHero";

const HeroWrapper = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const OverlayBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 5vw;
  transform: translateY(50%);
  background: ${({ theme }) => theme.gradients.teal};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  max-width: 320px;
  z-index: 10;
  
  h2 {
    color: ${({ theme }) => theme.colors.gold};
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
    line-height: 1.2;
    font-family: Georgia, serif;
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: 0;
    line-height: 1.2;
    font-family: Georgia, serif;
  }
  
  @media (max-width: 768px) {
    position: static;
    transform: none;
    max-width: 100%;
    margin: -${({ theme }) => theme.spacing.xl} 5vw 0;
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
  background: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
  text-align: center;
`;

const QuoteMark = styled.div`
  font-size: 140px;
  line-height: 0.8;
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.08;
  margin-bottom: 0;
  font-family: Georgia, serif;
  font-weight: 300;
  
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
  overlayTitle: string;
  overlaySubtitle: string;
  content: string[];
  quote: string;
  backgroundImage: string;
  breadcrumbLabel: string;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
  title,
  overlayTitle,
  overlaySubtitle,
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
        <OverlayBox>
          <h2>{overlayTitle}</h2>
          <h3>{overlaySubtitle}</h3>
        </OverlayBox>
      </HeroWrapper>
      
      <WhiteSection>
        <Container>
          <TextContent>
            {content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </TextContent>
        </Container>
      </WhiteSection>
      
      <GreySection>
        <Container>
          <QuoteMark />
          <QuoteText>{quote}</QuoteText>
        </Container>
      </GreySection>
    </>
  );
};

export default OverviewSection;
