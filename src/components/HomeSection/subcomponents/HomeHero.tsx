import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import Hero from "../../Hero";

interface HomeHeroProps {
  headline: string;
  rotatingNews: string[];
  cta1: string;
  cta2: string;
  onNavigate: (page: string) => void;
}


const NewsWrapper = styled.div`
  margin-top: 32px;
`;

const LatestUpdate = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  margin-bottom: 16px;
`;

const CTAButtonRow = styled.div`
  display: flex;
  gap: 16px;
`;

const CTAButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.darkBlue};
  transition: ${({ theme }) => theme.transition.button};
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccentHover};
  }
`;

const HomeHero: React.FC<HomeHeroProps> = ({ headline, rotatingNews, cta1, cta2, onNavigate }) => {
  const [newsIndex, setNewsIndex] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % rotatingNews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingNews.length]);

  return (
    <Hero
      backgroundImage="https://images.unsplash.com/photo-1758799073949-0547a39c12f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
      title={headline}
      breadcrumbs={[]}
    >
      <NewsWrapper>
        <LatestUpdate>
          Latest Update: {rotatingNews[newsIndex]}
        </LatestUpdate>
        <CTAButtonRow>
          <CTAButton onClick={() => onNavigate('projects')}>{cta1}</CTAButton>
          <CTAButton onClick={() => onNavigate('about')}>{cta2}</CTAButton>
        </CTAButtonRow>
      </NewsWrapper>
    </Hero>
  );
};

export default HomeHero;
