import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";

// ============================================
// NEWS PAGE CONTENT BLOCKS
// ============================================
const NEWS_HERO = {
  tag: "Latest Updates",
  heroBlock: "News & Media",
  descriptionBlock: "Stay informed about the latest developments, announcements, and milestones at Asia Pacific Opportunity Zone",
};

const NEWS_ARTICLES = [
  {
    titleBlock: "Momentum Builds for APOZ: Groundbreaking Set for Fall 2025 Amid Global Investor Interest",
    dateBlock: "June 4, 2025",
    locationBlock: "Asian Pacific Industrial Park",
    paragraphBlock1: "As global awareness of the Asia Pacific Opportunity Zone (APOZ) grows, Token Communities Ltd. (OTC: TKCM) and its subsidiary ASC Global Inc. are preparing for the next major milestone — the official groundbreaking ceremony, scheduled for September 2025 in Greater Houston.",
    paragraphBlock2: "Following successful presentations at the International Trade Center in Houston and the first overseas APOZ conference in Shanghai, interest from both domestic and international investors has surged.",
    paragraphBlock3: "Developers, fund managers, and institutional investors from the U.S., China, Singapore, and beyond are engaging with the APOZ team to explore participation in residential, commercial, and industrial phases of the master-planned project.",
    paragraphBlock4: "David Champ, CEO of Token Communities Ltd., noted: 'What started as a bold vision is rapidly becoming reality. The interest we've received — especially from Asia-Pacific partners — shows that APOZ is positioned to become a global hub for opportunity, investment, and innovation.'",
    paragraphBlock5: "The APOZ site plan includes affordable housing starting at $188,000, logistics and business zones, and green innovation spaces.",
    paragraphBlock6: "With support from local government agencies and international stakeholders, the project is moving swiftly through final planning stages.",
    paragraphBlock7: "Stay tuned for more announcements about investor tours, groundbreaking details, and upcoming events in Taiwan and Singapore.",
    paragraphBlock8: "For partnership and investment inquiries, please contact: info@apoz.us",
    image: "https://images.unsplash.com/photo-1613928270169-4e4462c75a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGV2ZWxvcG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NjU4ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    titleBlock: "APOZ Project Unveiled at ITC Conference: Affordable Housing and Economic Growth in Houston",
    dateBlock: "May 24, 2025",
    locationBlock: "Asian Pacific Industrial Park",
    paragraphBlock1: "On May 23, 2025, Token Communities Ltd. (OTC PINK: TKCM), through its subsidiary ASC Global Inc., presented the Asia Pacific Opportunity Zone (APOZ) Project at the International Trade Center (ITC) Board of Directors Inauguration Ceremony in Houston.",
    paragraphBlock2: "The APOZ Project is a master-planned community set to commence construction in Q4 2025.",
    paragraphBlock3: "It will feature an industrial park, business center, commercial section, and residential subdivisions.",
    paragraphBlock4: "Notably, the development aims to offer high-quality, modern single-family homes starting at $188,000 for three-bedroom units, with multi-family homes also in the planning stages.",
    paragraphBlock5: "The initiative addresses the significant demand for affordable housing in the Greater Houston area.",
    paragraphBlock6: "ASC Global Inc. is committed to collaborating with the City of Houston and the ITC to meet this growing need.",
    image: "https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    titleBlock: "Token Communities Ltd. Hosts First Overseas APOZ Conference in Shanghai",
    dateBlock: "May 20, 2025",
    locationBlock: "Asian Pacific Industrial Park",
    paragraphBlock1: "On May 20, 2025, Token Communities Ltd. (OTC: TKCM), through its subsidiary ASC Global Inc., hosted its inaugural overseas APOZ conference at the Westin Bund Center in Shanghai.",
    paragraphBlock2: "The event aimed to introduce the APOZ initiative to the Asia Pacific business community, highlighting investment opportunities and fostering regional engagement.",
    paragraphBlock3: "CEO David Champ announced plans for additional conferences in Taiwan, Singapore, and other Asian cities, citing significant interest from the region.",
    paragraphBlock4: "These events are part of the company's strategy to expand the APOZ initiative within the Asia Pacific markets.",
    paragraphBlock5: "Project director Leo Lei indicated that final site-plan modifications are underway with assistance from local government agencies.",
    paragraphBlock6: "A groundbreaking ceremony is anticipated for September 2025, marking a significant milestone in the project's development and implementation.",
    image: "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjQ2NTg4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

// Styled Components
const PageWrapper = styled.div``;

const HeroSection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #0A1628 0%, #1a2942 100%);
`;

const HeroContent = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const HeroTag = styled.div`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(212, 175, 55, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 999px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  margin-bottom: 2rem;
`;

const HeroTagText = styled.span`
  color: #D4AF37;
  letter-spacing: 0.05em;
`;

const HeroTitle = styled.h1`
  color: #fff;
  margin-bottom: 1.5rem;
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
`;

const HeroDivider = styled.div`
  width: 4rem;
  height: 0.25rem;
  background: #D4AF37;
  margin: 0 auto 2rem auto;
`;

const HeroDesc = styled.p`
  color: #b3b3b3;
  font-size: 1.25rem;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.7;
`;

const ArticlesSection = styled.section`
  padding: 6rem 0;
  background: #fff;
`;

const ArticlesContainer = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ArticleCard = styled.article`
  background: #fff;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: box-shadow 0.3s, border-color 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.10);
    border-color: #D4AF37;
  }
`;

const ArticleGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
  }
`;

const ArticleImageBox = styled.div`
  aspect-ratio: 4/3;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArticleContent = styled.div`
  padding: 2rem;
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const ArticleMetaHighlight = styled.span`
  color: #D4AF37;
`;

const ArticleTitle = styled.h2`
  color: #0A1628;
  margin-bottom: 1rem;
  transition: color 0.2s;
  &:hover {
    color: #D4AF37;
  }
`;

const ArticleDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ReadMoreBtn = styled.button`
  color: #D4AF37;
  background: none;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #AA8A2E;
  }
`;

// Article Detail Styles
const ArticleDetailHeader = styled.section`
  position: relative;
  padding: 8rem 0 0 0;
  background: linear-gradient(135deg, #0A1628 0%, #1a2942 100%);
`;

const ArticleDetailContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BackBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #D4AF37;
  background: none;
  border: none;
  margin-bottom: 2rem;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.2s;
  &:hover {
    color: #AA8A2E;
  }
`;

const ArticleDetailMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const ArticleDetailTitle = styled.h1`
  color: #fff;
  margin-bottom: 1.5rem;
`;

const ArticleDetailDivider = styled.div`
  width: 4rem;
  height: 0.25rem;
  background: #D4AF37;
`;

const ArticleDetailImageSection = styled.section`
  padding: 3rem 0;
  background: #fff;
`;

const ArticleDetailImageBox = styled.div`
  aspect-ratio: 16/9;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  margin-bottom: 3rem;
`;

const ArticleDetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArticleDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ArticleDetailParagraph = styled.p`
  color: #333;
  font-size: 1.125rem;
  line-height: 1.7;
`;

export function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  if (selectedArticle !== null) {
    const article = NEWS_ARTICLES[selectedArticle];
    const allParagraphs = [
      article.paragraphBlock1,
      article.paragraphBlock2,
      article.paragraphBlock3,
      article.paragraphBlock4,
      article.paragraphBlock5,
      article.paragraphBlock6,
      article.paragraphBlock7,
      article.paragraphBlock8,
    ].filter(Boolean);

    return (
      <PageWrapper>
        <ArticleDetailHeader>
          <ArticleDetailContainer>
            <BackBtn onClick={() => setSelectedArticle(null)}>
              <ArrowLeft size={20} />
              Back to News
            </BackBtn>
            <ArticleDetailMeta>
              <span><Calendar size={16} /> {article.dateBlock}</span>
              <span>•</span>
              <span><MapPin size={16} /> {article.locationBlock}</span>
            </ArticleDetailMeta>
            <ArticleDetailTitle>{article.titleBlock}</ArticleDetailTitle>
            <ArticleDetailDivider />
          </ArticleDetailContainer>
        </ArticleDetailHeader>
        <ArticleDetailImageSection>
          <ArticleDetailContainer>
            <ArticleDetailImageBox>
              <ArticleDetailImage src={article.image} alt={article.titleBlock} />
            </ArticleDetailImageBox>
            <ArticleDetailContent>
              {allParagraphs.map((paragraph, index) => (
                <ArticleDetailParagraph key={index}>{paragraph}</ArticleDetailParagraph>
              ))}
            </ArticleDetailContent>
          </ArticleDetailContainer>
        </ArticleDetailImageSection>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <HeroSection>
        <HeroContent>
          <HeroTag>
            <HeroTagText>{NEWS_HERO.tag}</HeroTagText>
          </HeroTag>
          <HeroTitle>{NEWS_HERO.heroBlock}</HeroTitle>
          <HeroDivider />
          <HeroDesc>{NEWS_HERO.descriptionBlock}</HeroDesc>
        </HeroContent>
      </HeroSection>
      <ArticlesSection>
        <ArticlesContainer>
          <ArticlesList>
            {NEWS_ARTICLES.map((article, index) => (
              <ArticleCard key={index} onClick={() => setSelectedArticle(index)}>
                <ArticleGrid>
                  <ArticleImageBox>
                    <ArticleImage src={article.image} alt={article.titleBlock} />
                  </ArticleImageBox>
                  <ArticleContent>
                    <ArticleMeta>
                      <span><Calendar size={16} style={{ color: "#D4AF37" }} /> <ArticleMetaHighlight>{article.dateBlock}</ArticleMetaHighlight></span>
                      <span>•</span>
                      <span><MapPin size={16} /> {article.locationBlock}</span>
                    </ArticleMeta>
                    <ArticleTitle>{article.titleBlock}</ArticleTitle>
                    <ArticleDesc>{article.paragraphBlock1}</ArticleDesc>
                    <ReadMoreBtn>
                      Read Full Article
                      <ArrowLeft size={16} style={{ transform: "rotate(180deg)" }} />
                    </ReadMoreBtn>
                  </ArticleContent>
                </ArticleGrid>
              </ArticleCard>
            ))}
          </ArticlesList>
        </ArticlesContainer>
      </ArticlesSection>
    </PageWrapper>
  );
}
