import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import GoldButton from "../../ui/GoldButton";
import { NEWS_METADATA } from "../../NewsSection/subcomponents/newsMetadata";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 700px;
  height: 80vh;
  max-height: 900px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.darkBlue};
  
  @media (max-width: 768px) {
    min-height: 600px;
    height: 70vh;
  }
`;

const HeroImage = styled.img<{ $showTop?: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ $showTop }) => $showTop ? 'center -10%' : 'center center'};
  z-index: 1;
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
  background: ${({ theme }) => theme.colors.tealGlass};
  backdrop-filter: blur(6px);
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing.xxl} 64px;
  max-width: 700px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
    max-width: 90%;
    gap: ${({ theme }) => theme.spacing.sm};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    max-width: 95%;
  }
`;

const Headline = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.25;
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['1.75']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Summary = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.6;
  margin: 0;
  font-weight: 400;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
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
  const { t } = useTranslation(['news', 'common']);
  const [index, setIndex] = useState(0);
  
  const totalArticles = 17;
  const articleId = totalArticles - index; // Latest first (17, 16, 15, ...)
  
  const goLeft = () => setIndex(i => (i === 0 ? totalArticles - 1 : i - 1));
  const goRight = () => setIndex(i => (i === totalArticles - 1 ? 0 : i + 1));
  
  const metadata = NEWS_METADATA[articleId];
  const article = {
    id: metadata.id,
    title: t(`news:articles.${articleId}.title`),
    image: metadata.image,
    summary: t(`news:articles.${articleId}.p1`)
  };
  
  // Check if this needs top positioning (faces at top)
  const showTop = article.image.includes('07-21-25') || article.image.includes('09-13-25');
  
  return (
    <HeroSection>
      <HeroImage
        src={article.image}
        alt={article.title}
        $showTop={showTop}
      />
      <Overlay />
      <ContentBox>
        <Headline>{article.title}</Headline>
        <Summary>{article.summary}</Summary>
        <GoldButton onClick={() => navigate(`/news/${article.id}`)}>
          {t('common:common.learnMore')}
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
