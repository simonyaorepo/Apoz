// NewsArticle subcomponent for modular NewsSection

import React from "react";
import styled from "styled-components";

export interface NewsArticleProps {
  article: {
    id: number;
    title: string;
    date: string;
    location: string;
    category: string;
    image: string;
    paragraphs: string[];
  };
  onClick?: () => void;
}

const ArticleWrapper = styled.div<{ clickable: boolean }>`
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`;

const ArticleImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ArticleTitle = styled.h3`
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ArticleMeta = styled.p`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ArticleParagraphs = styled.ul`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
  padding-left: 1.5rem;
`;

const ArticleParagraph = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const NewsArticle: React.FC<NewsArticleProps> = ({ article, onClick }) => (
  <ArticleWrapper clickable={!!onClick} onClick={onClick}>
    <ArticleImage src={article.image} alt={article.title} />
    <ArticleTitle>{article.title}</ArticleTitle>
    <ArticleMeta>{article.date} | {article.location} | {article.category}</ArticleMeta>
    {article.paragraphs && article.paragraphs.length > 0 && (
      <ArticleParagraphs>
        {article.paragraphs.map((p, idx) => (
          <ArticleParagraph key={idx}>{p}</ArticleParagraph>
        ))}
      </ArticleParagraphs>
    )}
  </ArticleWrapper>
);

export default NewsArticle;
