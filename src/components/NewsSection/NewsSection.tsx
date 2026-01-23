import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import PageHero from "../PageHero";
import NewsGrid from "./subcomponents/NewsGrid";

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
  const { t } = useTranslation(['news', 'common']);
  
  // Build articles from translations (sorted newest first: 17 to 1)
  const articles = Array.from({ length: 17 }, (_, i) => {
    const articleId = 17 - i; // Reverse order
    return {
      id: articleId,
      title: t(`news:articles.${articleId}.title`),
      date: t(`news:articles.${articleId}.date`),
      location: t(`news:articles.${articleId}.location`),
      category: t(`news:articles.${articleId}.category`),
      image: t(`news:articles.${articleId}.image`),
      paragraphs: [] // Not needed for grid display
    };
  });

  return (
    <SectionWrapper>
      <PageHero
        title={t('common:nav.news')}
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: t('common:breadcrumbs.home'), href: "/" },
          { label: t('common:breadcrumbs.news') }
        ]}
      />
      <TitleSection>
        <h1>{t('news:hero.title')}</h1>
      </TitleSection>
      <NewsGrid articles={articles} />
    </SectionWrapper>
  );
};

export default NewsSection;
