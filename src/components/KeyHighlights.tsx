import { Building2, Globe2, Home, Users } from "lucide-react";
import styled from "styled-components";

const highlights = [
  {
    icon: Globe2,
    title: "International Trade Hub",
    description: "A designated Free Trade Zone promoting global commerce and logistics.",
  },
  {
    icon: Building2,
    title: "Master-Planned Infrastructure",
    description: "Seamlessly blending housing, retail, and industry for long-term growth.",
  },
  {
    icon: Home,
    title: "Affordable Living",
    description: "High-quality homes starting at just $188,000 to support working families and first-time buyers.",
  },
  {
    icon: Users,
    title: "Strategic Partnerships",
    description: "Developed in collaboration with the International Trade Center and local leadership.",
  },
];

const Section = styled.section`
  background: ${({ theme }) => theme.colors.accent};
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Tag = styled.div`
  color: ${({ theme }) => theme.colors.accentForeground};
  margin-bottom: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
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
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radii.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: box-shadow 0.2s, border-color 0.2s;
  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 4px 32px rgba(0,0,0,0.08);
  }
`;

const CardIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;
`;

export function KeyHighlights() {
  return (
    <Section>
      <Container>
        <Header>
          <Tag>What Sets APOZ Apart</Tag>
          <Title>Key Value Propositions</Title>
          <Subtitle>
            Discover the strategic advantages that make Asia Pacific Opportunity Zone a premier destination for living, working, and investing.
          </Subtitle>
        </Header>
        <Grid>
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index}>
                <CardIcon>
                  <Icon size={28} color="#1976d2" />
                </CardIcon>
                <CardTitle>{highlight.title}</CardTitle>
                <CardText>{highlight.description}</CardText>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
