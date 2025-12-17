import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GoldButton from "../../ui/GoldButton";
import { NEWS_ARTICLES } from "../../NewsSection/subcomponents/newsSectionData";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 600px;
  height: 70vh;
  max-height: 800px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.darkBlue};
  
  @media (max-width: 768px) {
    min-height: 500px;
    height: 60vh;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  transition: transform 0.5s ease;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.55) 100%);
  z-index: 2;
`;

const ContentBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(10, 30, 30, 0.75);
  backdrop-filter: blur(4px);
  border-radius: 0;
  padding: 40px 56px;
  max-width: 680px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  
  @media (max-width: 768px) {
    padding: 24px 28px;
    max-width: 100%;
    gap: 10px;
  }
`;

const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  margin: 0;
  line-height: 1.4;
`;

const Headline = styled.h1`
  font-size: 1.625rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.25;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Summary = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.875rem;
  line-height: 1.55;
  margin: 0;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;

// Square, theme-driven arrow button
const ArrowButton = styled.button`
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1 / 1;
  box-sizing: border-box;
  flex-shrink: 0;
  border-radius: 2px;
  border: 2px solid white;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: white;
  padding: 5px;
  
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  
  &:hover,
  &:focus {
    outline: none;
    background: white;
    border-color: white;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  
  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

// Row for arrow buttons, positioned bottom right
const ArrowButtonRow = styled.div`
  position: absolute;
  right: 32px;
  bottom: 32px;
  z-index: 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    gap: 10px;
  }
`;

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const HomeHero: React.FC = () => {
  const navigate = useNavigate();
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
        <GoldButton onClick={() => navigate(`/news/${article.id}`)}>
          Learn More
        </GoldButton>
      </ContentBox>
      <ArrowButtonRow>
        <ArrowButton aria-label="Previous article" onClick={goLeft}><ArrowLeft /></ArrowButton>
        <ArrowButton aria-label="Next article" onClick={goRight}><ArrowRight /></ArrowButton>
      </ArrowButtonRow>
    </HeroSection>
  );
};

export default HomeHero;
