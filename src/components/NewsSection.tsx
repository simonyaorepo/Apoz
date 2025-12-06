import { Calendar, ArrowRight } from "lucide-react";
import styled from "styled-components";
import { useTheme } from "styled-components";

const newsItems = [
  {
    date: "June 4, 2025",
    category: "Development Update",
    title: "Momentum Builds for APOZ: Groundbreaking Set for Fall 2025 Amid Global Investor Interest",
    excerpt: "Global awareness rising; groundbreaking planned for September 2025; strong investor interest from U.S., Asia-Pacific.",
    image: "https://images.unsplash.com/photo-1614366324821-cfa7713a5163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwZGV2ZWxvcG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NjU4MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    date: "May 24, 2025",
    category: "Partnership",
    title: "APOZ Project Unveiled at ITC Conference: Affordable Housing and Economic Growth in Houston",
    excerpt: "Presentation of Affordable Housing Development Plan at the International Trade Center; single-family homes starting at $188,000; industrial, commercial, residential & business park planned; addresses affordable housing demand in Greater Houston.",
    image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2NDY0MTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    date: "May 20, 2025",
    category: "International Expansion",
    title: "Token Communities Ltd. Hosts First Overseas APOZ Conference in Shanghai",
    excerpt: "Introduced APOZ to Asia-Pacific business community; announced plans for additional conferences in Taiwan, Singapore, and others; site-plan modifications underway; groundbreaking anticipated September 2025.",
    image: "https://images.unsplash.com/photo-1692118459258-0b90b2b691fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NjU2MTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const Section = styled.section`
  background: ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Tag = styled.div`
  color: ${({ theme }) => theme.colors.accentForeground};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 600;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  max-width: 40rem;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: box-shadow 0.2s, border-color 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 32px rgba(0,0,0,0.08);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const CardImageBox = styled.div`
  aspect-ratio: 16/9;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.muted};
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  & > svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const CardCategory = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.accentForeground};
  margin-bottom: 0.75rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: color 0.2s;
  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const CardExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ReadMoreBtn = styled.button`
  color: ${({ theme }) => theme.colors.gold};
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;
  & > svg {
    color: ${({ theme }) => theme.colors.gold};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;


export function NewsSection() {
  return (
    <Section>
      <Container>
        <Header>
          <Tag>Latest Updates</Tag>
          <Title>News & Media</Title>
          <Subtitle>
            Stay informed about the latest developments, partnerships, and milestones at Asia Pacific Opportunity Zone.
          </Subtitle>
        </Header>
        <Grid>
          {newsItems.map((item, index) => (
            <Card key={index}>
              <CardImageBox>
                <CardImage src={item.image} alt={item.title} />
              </CardImageBox>
              <CardContent>
                <CardMeta>
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </CardMeta>
                <CardCategory>{item.category}</CardCategory>
                <CardTitle>{item.title}</CardTitle>
                <CardExcerpt>{item.excerpt}</CardExcerpt>
                <ReadMoreBtn>
                  Read Full Article
                  <ArrowRight size={16} />
                </ReadMoreBtn>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
