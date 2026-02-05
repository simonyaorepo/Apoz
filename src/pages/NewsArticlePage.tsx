
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { Button } from "../components/ui/Button";
import { NEWS_METADATA } from "../components/NewsSection/subcomponents/newsMetadata";

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
  background: ${({ theme }) => theme.colors.darkBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 550px;
    height: 65vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 500px;
    height: 60vh;
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
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
  z-index: 2;

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
  const { t } = useTranslation('news');
  const navigate = useNavigate();
  
  // Validate article ID exists (1-17)
  const articleId = Number(id);
  if (!articleId || articleId < 1 || articleId > 17) {
    return (
      <PageBackground>
        <ContentWrapper>
          <h1>{t('article_not_found')}</h1>
          <Button onClick={() => navigate('/news')}>{t('back_to_news')}</Button>
        </ContentWrapper>
      </PageBackground>
    );
  }
  
  // Build article from metadata + translations
  const metadata = NEWS_METADATA[articleId];
  const article = {
    id: metadata.id,
    title: t(`articles.${articleId}.title`),
    date: t(`articles.${articleId}.date`),
    location: t(`articles.${articleId}.location`),
    category: t(`articles.${articleId}.category`),
    image: metadata.image,
    paragraphs: [] as string[]
  };
  
  // Gather all paragraphs (p1-p7, not all articles have all paragraphs)
  let paragraphIndex = 1;
  while (true) {
    const key = `articles.${articleId}.p${paragraphIndex}`;
    const paragraph = t(key);
    if (paragraph === key) break; // Translation missing means no more paragraphs
    article.paragraphs.push(paragraph);
    paragraphIndex++;
  }

  return (
    <PageBackground>
      <HeroSection>
        <HeroImage src={article.image} alt={article.title} fetchPriority="high" loading="eager" />
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
        <Button onClick={() => navigate('/news')} style={{marginTop: 32}}>{t('back_to_news')}</Button>
      </ContentWrapper>
    </PageBackground>
  );
}
