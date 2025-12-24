import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { NEWS_ARTICLES } from "../../NewsSection/subcomponents/newsSectionData";
import GoldButton from "../../ui/GoldButton";

const NewsSection = styled.section`
  background: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.h2};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.goldAccent};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BottomDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.goldAccent};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ArticleCard = styled.article`
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const ArticleImage = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
  
  ${ArticleCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ArticleContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.7;
`;

const ArticleDate = styled.span``;

const ArticleCategory = styled.span`
  color: ${({ theme }) => theme.colors.teal};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ArticleTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.4;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ArticleExcerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.8;
  line-height: 1.6;
`;

const NewsPreview: React.FC = () => {
  const navigate = useNavigate();
  
  // Get the latest 3 news articles
  const latestNews = NEWS_ARTICLES.slice(0, 3);

  return (
    <NewsSection>
      <Container>
        <SectionHeader>
          <Title>News</Title>
          <Divider />
        </SectionHeader>
        
        <NewsGrid>
          {latestNews.map((article) => (
            <ArticleCard
              key={article.id}
              onClick={() => navigate(`/news/${article.id}`)}
            >
              <ArticleImage>
                <img src={article.image} alt={article.title} />
              </ArticleImage>
              <ArticleContent>
                <ArticleMeta>
                  <ArticleDate>{article.date}</ArticleDate>
                  <ArticleCategory>{article.category}</ArticleCategory>
                </ArticleMeta>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleExcerpt>
                  {article.paragraphs[0].substring(0, 120)}...
                </ArticleExcerpt>
              </ArticleContent>
            </ArticleCard>
          ))}
        </NewsGrid>
        
        <BottomDivider />
        <ButtonWrapper>
          <GoldButton onClick={() => navigate('/news')}>
            Read More
          </GoldButton>
        </ButtonWrapper>
      </Container>
    </NewsSection>
  );
};

export default NewsPreview;
