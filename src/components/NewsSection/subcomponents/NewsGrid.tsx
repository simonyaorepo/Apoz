import styled from "styled-components";
import NewsArticle from "./NewsArticle";
import { Link } from "react-router-dom";
import type { NewsArticle as NewsArticleType } from "./newsSectionData";

interface NewsGridProps {
  articles: NewsArticleType[];
  filter: string;
}

const GridSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  @media (max-width: 600px) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`;
const GridInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  @media (max-width: 900px) {
    max-width: 100vw;
    padding: 0 8px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xxl};
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: 48px 0;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 24px 0;
  }
`;

const NewsGrid = ({ articles, filter }: NewsGridProps) => (
  <GridSection>
    <GridInner>
      <Grid>
        {articles.filter(a => filter === "All" || a.category === filter).length > 0 ? (
          articles
            .filter(a => filter === "All" || a.category === filter)
            .map(article => (
              <Link key={article.id} to={`/news/${article.id}`} style={{ textDecoration: 'none' }}>
                <NewsArticle article={article} />
              </Link>
            ))
        ) : (
          <EmptyState>
            No news articles found for this category.
          </EmptyState>
        )}
      </Grid>
    </GridInner>
  </GridSection>
);

export default NewsGrid;
