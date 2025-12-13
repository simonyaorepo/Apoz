import styled from "styled-components";
import NewsArticle from "./NewsArticle";

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  paragraphs: string[];
}

interface NewsGridProps {
  articles: NewsArticle[];
  filter: string;
  onSelect: (article: NewsArticle) => void;
}

const GridSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;
const GridInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xxl};
`;

const NewsGrid = ({ articles, filter, onSelect }: NewsGridProps) => (
  <GridSection>
    <GridInner>
      <Grid>
        {articles.filter(a => filter === "All" || a.category === filter).map(article => (
          <NewsArticle
            key={article.id}
            article={article}
            onClick={() => onSelect(article)}
          />
        ))}
      </Grid>
    </GridInner>
  </GridSection>
);

export default NewsGrid;
