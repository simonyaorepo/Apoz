import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import type { NewsArticle as NewsArticleType } from "./newsSectionData";

interface NewsGridProps {
  articles: NewsArticleType[];
}

const GridSection = styled.section`
  padding: 0 5vw ${({ theme }) => theme.spacing.xxxl};
  background: ${({ theme }) => theme.colors.white};
`;

const GridInner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ArticleCard = styled.article`
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const ArticleImage = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ArticleTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  line-height: 1.4;
`;

const ArticleExcerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.6;
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ArticleDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.foreground};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpolyline points='12 6 12 12 16 14'/%3E%3C/svg%3E");
    background-size: contain;
  }
`;

const NewsGrid = ({ articles }: NewsGridProps) => {
  const navigate = useNavigate();
  
  return (
    <GridSection>
      <GridInner>
        <Grid>
          {articles.map(article => (
            <ArticleCard key={article.id} onClick={() => navigate(`/news/${article.id}`)}>
              <ArticleImage>
                <img src={article.image} alt={article.title} />
              </ArticleImage>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleExcerpt>{article.paragraphs[0]}</ArticleExcerpt>
              <ArticleDate>{article.date}</ArticleDate>
            </ArticleCard>
          ))}
        </Grid>
      </GridInner>
    </GridSection>
  );
};

export default NewsGrid;
