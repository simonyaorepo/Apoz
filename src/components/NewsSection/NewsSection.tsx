import React from "react";
import styled from "styled-components";
import PageHero from "../PageHero";
import NewsGrid from "./subcomponents/NewsGrid";

import { NEWS_ARTICLES } from "./subcomponents/newsSectionData";

const SectionWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

const TitleSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw ${({ theme }) => theme.spacing.xl};
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.darkBlue};
    max-width: ${({ theme }) => theme.maxWidth.container};
    margin: 0 auto;
  }
`;

const NewsSection: React.FC = () => {
  // Sort articles by date (newest first)
  const sortedArticles = [...NEWS_ARTICLES].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <SectionWrapper>
      <PageHero
        title="News"
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News" }
        ]}
      />
      <TitleSection>
        <h1>News Release</h1>
      </TitleSection>
      <NewsGrid articles={sortedArticles} />
    </SectionWrapper>
  );
};

export default NewsSection;
