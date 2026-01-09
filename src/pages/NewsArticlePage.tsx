
import { useParams, useNavigate } from "react-router-dom";
import { NEWS_ARTICLES } from "../components/NewsSection/subcomponents/newsSectionData";
import styled from "styled-components";
import { Button } from "../components/ui/button";


const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  min-height: 600px;
  height: 70vh;
  max-height: 800px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background: ${({ theme }) => theme.colors.statusDefaultBg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 550px;
    height: 65vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 500px;
    height: 60vh;
  }
`;

const HeroImage = styled.img<{ $showTop?: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ $showTop }) => $showTop ? 'center -10%' : 'center center'};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    object-position: ${({ $showTop }) => $showTop ? 'center -10%' : 'center center'};
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.lg} ${theme.spacing.xxl} ${theme.spacing.lg}`};
  background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md} ${theme.spacing.lg} ${theme.spacing.md}`};
  }
`;
const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
  max-width: ${({ theme }) => theme.maxWidth.content};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.25rem;
    padding: 0 8px;
    max-width: 98vw;
  }
`;
const HeroMeta = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  opacity: 0.92;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;
const PageBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.background};
`;
const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: ${({ theme }) => `${theme.spacing.xxxl} auto 0 auto`};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100vw;
    padding: 0 8px;
  }
`;
const ArticleParagraph = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

export default function NewsArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = NEWS_ARTICLES.find(a => a.id === Number(id));
  const navigate = useNavigate();
  
  // Check if this needs top positioning (faces at top)
  const showTop = article?.image.includes('07-21-25') || article?.image.includes('09-13-25');

  if (!article) {
    return (
      <PageBackground>
        <ContentWrapper>
          <HeroTitle>Article not found</HeroTitle>
          <button onClick={() => navigate('/news')}>Back to News</button>
        </ContentWrapper>
      </PageBackground>
    );
  }

  return (
    <PageBackground>
      <HeroSection>
        <HeroImage src={article.image} alt={article.title} $showTop={showTop} />
        <HeroOverlay>
          <HeroTitle>{article.title}</HeroTitle>
          <HeroMeta>
            {article.date} | {article.location} | {article.category}
          </HeroMeta>
        </HeroOverlay>
      </HeroSection>
      <ContentWrapper>
        {article.paragraphs.map((p, i) => (
          <ArticleParagraph key={i}>{p}</ArticleParagraph>
        ))}
        <Button onClick={() => navigate('/news')} style={{marginTop: 32}}>Back to News</Button>
      </ContentWrapper>
    </PageBackground>
  );
}
