import { Building2, Globe2, Home, Leaf, Users, TrendingUp, Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import styled from "styled-components";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HERO_CONTENT = {
  tagline: "A New Era of Development",
  textBlock1: "Shaping the Future of Global Trade & Community Living",
  textBlock2: "A master-planned economic zone integrating industrial, commercial, and affordable residential development in Southeast Texas.",
  button1: "Explore Projects",
  button2: "Learn More",
};

const INTRO_CONTENT = {
  textBlock3: "The Asia Pacific Opportunity Zone (APOZ) is more than just a development — it's a blueprint for sustainable economic growth and inclusive community building in Greater Houston.",
  textBlock4: "Strategically planned by ASC Global Inc., APOZ integrates residential, industrial, and commercial zones into a single, forward-looking ecosystem.",
};

const VALUE_GRID = {
  title: "What Sets APOZ Apart",
  cards: [
    { block1: "International Trade Hub", block2: "A designated Free Trade Zone promoting global commerce and logistics." },
    { block1: "Master-Planned Infrastructure", block2: "Seamlessly blending housing, retail, and industry for long-term growth." },
    { block1: "Affordable Living", block2: "High-quality homes starting at $188,000 to support working families and first-time buyers." },
    { block1: "Sustainability Focus", block2: "Thoughtfully planned green spaces and long-term environmental resilience." },
    { block1: "Strategic Partnerships", block2: "Developed in collaboration with the International Trade Center and local leadership." },
    { block1: "Investment-Ready", block2: "Multiple development phases underway, with active interest from U.S. and Asia-Pacific investors." },
  ],
};

const MISSION_CONTENT = {
  tag: "Our Mission",
  titleBlock: "Our Mission",
  paragraphBlock1: "APOZ is dedicated to creating a dynamic, sustainable, and innovation-driven industrial and residential community in Southeast Texas.",
  paragraphBlock2: "By integrating smart infrastructure, green energy, and global partnerships, APOZ aims to become a hub for advanced manufacturing, international trade, and inclusive housing.",
};

const VISION_CONTENT = {
  tag: "Our Vision",
  titleBlock: "Our Vision",
  paragraphBlock3: "Our vision is to empower growth — not only for businesses but also for the communities they serve — by transforming underdeveloped land into high-value economic zones that support long-term prosperity and global collaboration.",
};

const PROJECT_HIGHLIGHTS = {
  titleBlock: "Development Phases",
  cards: [
    {
      block1: "Phase 1 — Infrastructure & Site Preparation (2025–2026)",
      block2: "Initial groundwork, utilities planning, and zoning preparation for residential and industrial sectors.",
      image: "https://images.unsplash.com/photo-1613928270169-4e4462c75a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGV2ZWxvcG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NjU4ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      block1: "Residential Communities",
      block2: "Planned single-family homes starting at $188K, supporting families and workforce housing needs.",
      image: "https://images.unsplash.com/photo-1758304480344-f8d0de5f4f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbW11bml0eSUyMGFlcmlhbHxlbnwxfHx8fDE3NjQ1ODk5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      block1: "Industrial & Logistics Parks",
      block2: "Advanced facilities for manufacturers, warehousing, distribution, and global trade operations.",
      image: "https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ],
};

const TIMELINE_CONTENT = {
  titleBlock: "Project Timeline",
  blocks: [
    "Q2 2025: Completion of Phase 1.1 architectural design",
    "Q2 2025: Submission of plans to Chambers County for approval",
    "Q4 2025: Commencement of construction",
    "2026 and beyond: Development of residential and commercial areas",
  ],
};

const NEWS_CONTENT = {
  titleBlock: "Latest Updates",
  articles: [
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
  ],
};

const valueIcons = [Globe2, Building2, Home, Leaf, Users, TrendingUp];


// Styled-components for layout and sections
// import { breakpoints } from "../theme"; // Removed unused import
const Section = styled.section<{ bg?: string }>`
  background: ${({ bg }) => bg || "inherit"};
  padding: 6rem 0;
`;
const Container = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1rem;
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 600;
`;
const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
`;
const Divider = styled.div`
  width: 4rem;
  height: 0.25rem;
  background: ${({ theme }) => theme.colors.accent};
  margin: 0 auto 2rem auto;
  border-radius: 2px;
`;
const Grid = styled.div<{ cols?: number }>`
  display: grid;
  gap: 2rem;
  grid-template-columns: ${({ cols }) => cols ? `repeat(${cols}, 1fr)` : "1fr"};
`;
const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 2rem;
  transition: box-shadow 0.2s, border-color 0.2s;
  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 4px 32px rgba(0,0,0,0.08);
  }
`;
const CardIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background: ${({ theme }) => theme.gradients.hero};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;
const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
const CardText = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;
`;

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* SECTION 1 — HERO */}
      <Section bg="linear-gradient(90deg, #0A1628 95%, #0A1628 85%, #0A1628 75%)">
        <Container>
          <Title style={{ color: "#D4AF37", textAlign: "center" }}>{HERO_CONTENT.tagline}</Title>
          <Divider />
          <Subtitle style={{ color: "#fff", textAlign: "center", fontSize: "2rem" }}>{HERO_CONTENT.textBlock1}</Subtitle>
          <Subtitle style={{ color: "#ececf0", textAlign: "center" }}>{HERO_CONTENT.textBlock2}</Subtitle>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
            <Button onClick={() => onNavigate("projects")}>{HERO_CONTENT.button1} <ArrowRight style={{ marginLeft: "0.5rem" }} size={20} /></Button>
            <Button onClick={() => onNavigate("about")}>{HERO_CONTENT.button2}</Button>
          </div>
        </Container>
      </Section>

      {/* SECTION 2 — INTRO */}
      <Section bg="#fff">
        <Container>
          <Divider />
          <Subtitle style={{ color: "#333", textAlign: "center" }}>{INTRO_CONTENT.textBlock3}</Subtitle>
          <Subtitle style={{ color: "#333", textAlign: "center" }}>{INTRO_CONTENT.textBlock4}</Subtitle>
        </Container>
      </Section>

      {/* SECTION 3 — VALUE GRID */}
      <Section bg="#f7f7fa">
        <Container>
          <Title style={{ color: "#0A1628", textAlign: "center" }}>{VALUE_GRID.title}</Title>
          <Divider />
          <Grid cols={3}>
            {VALUE_GRID.cards.map((card, index) => {
              const Icon = valueIcons[index];
              return (
                <Card key={index}>
                  <CardIcon><Icon size={32} color="#D4AF37" /></CardIcon>
                  <CardTitle>{card.block1}</CardTitle>
                  <CardText>{card.block2}</CardText>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* SECTION 4 — MISSION */}
      <Section bg="#fff">
        <Container>
          <Grid cols={2}>
            <div>
              <ImageWithFallback src="https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Our Mission" style={{ width: "100%", borderRadius: "1rem" }} />
            </div>
            <div>
              <Title style={{ color: "#0A1628" }}>{MISSION_CONTENT.titleBlock}</Title>
              <Divider />
              <Subtitle style={{ color: "#333" }}>{MISSION_CONTENT.paragraphBlock1}</Subtitle>
              <Subtitle style={{ color: "#333" }}>{MISSION_CONTENT.paragraphBlock2}</Subtitle>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* SECTION 5 — VISION */}
      <Section bg="#f7f7fa">
        <Container>
          <Grid cols={2}>
            <div>
              <Title style={{ color: "#0A1628" }}>{VISION_CONTENT.titleBlock}</Title>
              <Divider />
              <Subtitle style={{ color: "#333" }}>{VISION_CONTENT.paragraphBlock3}</Subtitle>
            </div>
            <div>
              <ImageWithFallback src="https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Our Vision" style={{ width: "100%", borderRadius: "1rem" }} />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* SECTION 6 — PROJECT HIGHLIGHTS */}
      <Section bg="#fff">
        <Container>
          <Title style={{ color: "#0A1628", textAlign: "center" }}>{PROJECT_HIGHLIGHTS.titleBlock}</Title>
          <Divider />
          <Grid cols={3}>
            {PROJECT_HIGHLIGHTS.cards.map((card, index) => (
              <Card key={index}>
                <ImageWithFallback src={card.image} alt={card.block1} style={{ width: "100%", borderRadius: "1rem", marginBottom: "1rem" }} />
                <CardTitle>{card.block1}</CardTitle>
                <CardText>{card.block2}</CardText>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* SECTION 7 — TIMELINE */}
      <Section bg="#0A1628">
        <Container>
          <Title style={{ color: "#fff", textAlign: "center" }}>{TIMELINE_CONTENT.titleBlock}</Title>
          <Divider />
          <Grid cols={4}>
            {TIMELINE_CONTENT.blocks.map((block, index) => (
              <Card key={index} style={{ background: "#1a2942", color: "#ececf0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                  <Calendar size={20} color="#D4AF37" />
                </div>
                <CardText>{block}</CardText>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* SECTION 8 — NEWS */}
      <Section bg="#f7f7fa">
        <Container>
          <Title style={{ color: "#0A1628", textAlign: "center" }}>{NEWS_CONTENT.titleBlock}</Title>
          <Divider />
          <Grid cols={1}>
            {NEWS_CONTENT.articles.map((article, index) => (
              <Card key={index} style={{ display: "flex", flexDirection: "row", gap: "2rem", alignItems: "flex-start" }}>
                <ImageWithFallback src={article.image} alt={article.titleBlock} style={{ width: "320px", borderRadius: "1rem" }} />
                <div>
                  <CardTitle>{article.titleBlock}</CardTitle>
                  <CardText>{article.paragraphBlock1}</CardText>
                  <CardText>{article.paragraphBlock2}</CardText>
                  <CardText>{article.paragraphBlock3}</CardText>
                  <Button onClick={() => onNavigate("news")} style={{ marginTop: "1rem" }}>
                    Read Full Article <ArrowRight style={{ marginLeft: "0.5rem" }} size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </div>
  );
}
