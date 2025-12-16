
import React, { useState } from "react";
import styled from "styled-components";
import NewsHero from "./subcomponents/NewsHero";
import NewsFilterTabs from "./subcomponents/NewsFilterTabs";
import NewsGrid from "./subcomponents/NewsGrid";
import NewsModal from "./subcomponents/NewsModal";

import type { NewsArticle } from "./subcomponents/newsSectionData";
import { NEWS_ARTICLES } from "./subcomponents/newsSectionData";

const filters = ["All", "Press Release", "Event"];

const SectionWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [filter, setFilter] = useState("All");

  const handleSelect = (article: NewsArticle) => setSelectedArticle(article);
  const handleClose = () => setSelectedArticle(null);
  const handleNext = () => {
    if (!selectedArticle) return;
    const idx = NEWS_ARTICLES.findIndex((a: NewsArticle) => a.id === selectedArticle.id);
    setSelectedArticle(NEWS_ARTICLES[(idx + 1) % NEWS_ARTICLES.length]);
  };
  const handlePrevious = () => {
    if (!selectedArticle) return;
    const idx = NEWS_ARTICLES.findIndex((a: NewsArticle) => a.id === selectedArticle.id);
    setSelectedArticle(NEWS_ARTICLES[(idx - 1 + NEWS_ARTICLES.length) % NEWS_ARTICLES.length]);
  };

  return (
    <SectionWrapper>
      <NewsHero />
      <NewsFilterTabs filters={filters} filter={filter} setFilter={setFilter} />
      <NewsGrid articles={NEWS_ARTICLES} filter={filter} />
      {selectedArticle && (
        <NewsModal
          article={selectedArticle}
          onClose={handleClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </SectionWrapper>
  );
};

export default NewsSection;
