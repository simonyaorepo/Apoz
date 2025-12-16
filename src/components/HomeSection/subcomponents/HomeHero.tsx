
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../ui/button";
import { NEWS_ARTICLES } from "../../NewsSection/subcomponents/newsSectionData";

const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  min-height: 600px;
  height: 70vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  background: #000;
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,rgba(0,0,0,0.10) 0%,rgba(0,0,0,0.55) 100%);
  z-index: 2;
`;

const ContentBox = styled.div`
  position: absolute;
  left: 36px;
  bottom: 36px;
  z-index: 3;
  background: rgba(10, 30, 30, 0.92);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 18px 22px 16px 22px;
  max-width: 370px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 32px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 900px) {
    left: 8px;
    right: 8px;
    bottom: 8px;
    padding: 10px 8px 10px 10px;
    max-width: 96vw;
  }
`;

const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  margin-bottom: 8px;
  letter-spacing: 0.02em;
`;

const Headline = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.25;
  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const Summary = styled.p`
  color: ${({ theme }) => theme.colors.backgroundAlt};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: 20px;
  line-height: 1.6;
  max-width: 90%;
  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: 8px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  padding: 8px 28px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.goldAccent};
  color: ${({ theme }) => theme.colors.darkBlue};
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccentHover};
    color: ${({ theme }) => theme.colors.background};
  }
`;

// Square, theme-driven arrow button
const ArrowButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.card || '8px'};
  border: 2px solid ${({ theme }) => theme.colors.goldAccent};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;
  transition: background 0.12s, transform 0.12s, color 0.12s;
  color: ${({ theme }) => theme.colors.goldAccent};
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccent};
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.05);
  }
`;

const StyledArrowIcon = styled.svg`
  width: 44px;
  height: 44px;
  display: block;
  stroke: currentColor;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: color 0.12s, transform 0.12s;
  ${ArrowButton}:hover & {
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.08);
  }
`;

// Row for arrow buttons, positioned bottom right
const ArrowButtonRow = styled.div`
  position: absolute;
  right: 36px;
  bottom: 36px;
  z-index: 4;
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    right: 12px;
    bottom: 12px;
  }
`;

const ArrowIcon = styled.svg`
  display: block;
  width: 2.2em;
  height: 2.2em;
  stroke: currentColor;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

const ArrowLeft = () => (
  <StyledArrowIcon viewBox="0 0 44 44" aria-hidden="true" fill="none">
    <polyline points="34 38 10 22 34 6" strokeWidth={2.5} />
  </StyledArrowIcon>
);
const ArrowRight = () => (
  <StyledArrowIcon viewBox="0 0 44 44" aria-hidden="true" fill="none">
    <polyline points="10 6 34 22 10 38" strokeWidth={2.5} />
  </StyledArrowIcon>
);


const HomeHero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const article = NEWS_ARTICLES[index];
  const goLeft = () => setIndex(i => (i === 0 ? NEWS_ARTICLES.length - 1 : i - 1));
  const goRight = () => setIndex(i => (i === NEWS_ARTICLES.length - 1 ? 0 : i + 1));
  // Use first paragraph as summary, or fallback
  const summary = article.paragraphs?.[0] || '';
  // Use subtitle from data, fallback to empty string
  const subtitle = (article as any).subtitle || '';
  return (
    <HeroSection>
      <HeroImage
        src={article.image}
        alt={article.title}
      />
      <Overlay />
      <ContentBox>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Headline>{article.title}</Headline>
        <Summary>{summary}</Summary>
        <StyledButton onClick={() => window.location.href = `/news/${article.id}`}>
          Learn More
        </StyledButton>
      </ContentBox>
      <ArrowButtonRow>
        <ArrowButton aria-label="Previous article" onClick={goLeft}><ArrowLeft /></ArrowButton>
        <ArrowButton aria-label="Next article" onClick={goRight}><ArrowRight /></ArrowButton>
      </ArrowButtonRow>
    </HeroSection>
  );
};

export default HomeHero;
