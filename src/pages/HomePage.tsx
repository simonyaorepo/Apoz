import React, { useState, useEffect } from "react";
import styled from "styled-components";
import type { DefaultTheme } from "styled-components";
import theme from "../theme";
import { ChevronDown } from "lucide-react";
import { SkytowerArrow } from "../components/SkytowerArrow";
import { PremiumCard } from "../components/PremiumCard";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HERO_CONTENT = {
  headline: "Shaping the Future of Global Trade & Community Living",
  rotatingNews: [
    "Groundbreaking Set for Fall 2025",
    "Global Investor Interest Surges",
    "Asia-Pacific Partnerships Expand",
  ],
  cta1: "Explore Projects",
  cta2: "Learn More",
};

const FEATURE_TILES = [
  {
    title: "Momentum Builds for APOZ",
    date: "June 4, 2025",
    image:
      "https://images.unsplash.com/photo-1613928270169-4e4462c75a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGV2ZWxvcG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NjU4ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "APOZ Project Unveiled at ITC",
    date: "May 24, 2025",
    image:
      "https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Shanghai Overseas Conference",
    date: "May 20, 2025",
    image:
      "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjQ2NTg4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const KPI_METRICS = [
  { value: "$188K", label: "Starting Home Price" },
  { value: "2025", label: "Groundbreaking" },
  { value: "1,320", label: "Acres Planned" },
  { value: "5,000+", label: "Projected Jobs" },
  { value: "100%", label: "FTZ Designation" },
];

const VALUE_PROPS = [
  {
    title: "International Trade Hub",
    text: "A designated Free Trade Zone promoting global commerce and logistics.",
  },
  {
    title: "Master-Planned Infrastructure",
    text: "Seamlessly blending housing, retail, and industry for long-term growth.",
  },
  {
    title: "Affordable Living",
    text: "High-quality homes starting at $188,000 to support working families and first-time buyers.",
  },
  {
    title: "Sustainability Focus",
    text: "Thoughtfully planned green spaces and long-term environmental resilience.",
  },
  {
    title: "Strategic Partnerships",
    text: "Developed in collaboration with the International Trade Center and local leadership.",
  },
  {
    title: "Investment-Ready",
    text: "Multiple development phases underway, with active interest from U.S. and Asia-Pacific investors.",
  },
];

const MISSION = {
  title: "Our Mission",
  paragraph1:
    "APOZ is dedicated to creating a dynamic, sustainable, and innovation-driven industrial and residential community in Southeast Texas.",
  paragraph2:
    "By integrating smart infrastructure, green energy, and global partnerships, APOZ aims to become a hub for advanced manufacturing, international trade, and inclusive housing.",
};

const VISION = {
  title: "Our Vision",
  paragraph:
    "Our vision is to empower growth — not only for businesses but also for the communities they serve — by transforming underdeveloped land into high-value economic zones that support long-term prosperity and global collaboration.",
};

const PROJECT_PREVIEWS = [
  {
    title: "Infrastructure & Site Preparation",
    subtitle: "Phase 1 | 2025–2026",
    image:
      "https://images.unsplash.com/photo-1613928270169-4e4462c75a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGV2ZWxvcG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NjU4ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Residential Communities",
    subtitle: "Affordable Housing Starting at $188K",
    image:
      "https://images.unsplash.com/photo-1758304480344-f8d0de5f4f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbW11bml0eSUyMGFlcmlhbHxlbnwxfHx8fDE3NjQ1ODk5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Industrial & Logistics Parks",
    subtitle: "Free Trade Zone Facilities",
    image:
      "https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const TIMELINE_ITEMS = [
  { period: "Q2 2025", label: "Planning", description: "Architectural design & county approval" },
  { period: "Q4 2025", label: "Groundbreaking", description: "Construction commencement" },
  { period: "2026+", label: "Development", description: "Residential & commercial phases" },
];


// THEME REFACTOR START
const Bg = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const Section = styled.section<{ $bg?: string }>`
  background: ${({ $bg, theme }) => $bg || 'none'};
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Hero = styled(Section)`
  position: relative;
  min-height: 800px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.darkBlueAlt};
  overflow: hidden;
  padding: 0;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: ${({ theme }) => theme.opacity.low};
`;

const HeroContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  width: 100%;
`;

const Headline = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.hero};
  line-height: 1.05;
  margin-bottom: 3rem;
  letter-spacing: -0.01em;
`;

const RotatingNews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const NewsItem = styled.div<{ $active: boolean }>`
  opacity: ${({ $active, theme }) => ($active ? 1 : theme.opacity.med)};
  transform: ${({ $active }) => ($active ? "translateX(0)" : "translateX(1rem)")};
  transition: ${({ theme }) => theme.transition.slow};
`;

const NewsLabel = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  margin-bottom: 0.75rem;
`;

const NewsHeadline = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  line-height: 1.2;
`;

const HeroCtas = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  gap: 1.5rem;
`;

const CtaButton = styled.button<{ $primary?: boolean }>`
  padding: 1.25rem 2.5rem;
  background: ${({ $primary, theme }) => ($primary ? theme.colors.goldAccent : "transparent")};
  color: ${({ $primary, theme }) => ($primary ? theme.colors.darkBlueAlt : theme.colors.white)};
  border: ${({ $primary, theme }) => ($primary ? "none" : `2px solid ${theme.colors.white}`)};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.fast};
  &:hover {
    background: ${({ $primary, theme }) => ($primary ? theme.colors.goldAccentHover : theme.colors.white)};
    color: ${({ $primary, theme }) => theme.colors.darkBlueAlt};
  }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: bounce 2s infinite;
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-0.5rem); }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const FeatureTile = styled.div`
  position: relative;
  aspect-ratio: ${({ theme }) => theme.aspect.wide};
  border-radius: ${({ theme }) => theme.radii.card};
  overflow: hidden;
  cursor: pointer;
  &:hover img {
    transform: scale(1.05);
  }
`;

const FeatureImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
`;

const FeatureOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
`;

const FeatureInfo = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 4rem;
`;

const FeatureDate = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  margin-bottom: 0.5rem;
`;

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  line-height: 1.2;
`;

const FeatureArrow = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
`;

const KpiBar = styled(Section)`
  background: ${({ theme }) => theme.colors.darkBlueAlt};
  padding: 4rem 0;
`;

const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-left: 1px solid ${({ theme }) => theme.colors.goldAccent}20;
  border-right: 1px solid ${({ theme }) => theme.colors.goldAccent}20;
`;

const KpiItem = styled.div`
  text-align: center;
  padding: 0 2rem;
  border-right: 1px solid ${({ theme }) => theme.colors.goldAccent}20;
  &:last-child {
    border-right: none;
  }
`;

const KpiValue = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: 2.625rem;
  margin-bottom: 0.5rem;
`;

const KpiLabel = styled.div`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
`;

const ValueGrid = styled(FeatureGrid)``;

const ValueCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.radii.card};
  border: 1px solid ${({ theme }) => theme.colors.grayBorder};
  transition: ${({ theme }) => theme.transition.fast};
  &:hover {
    border-color: ${({ theme }) => theme.colors.goldAccent};
    box-shadow: ${({ theme }) => theme.colors.boxShadowGold};
  }
`;

const ValueTitle = styled.h3`
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  margin-bottom: 1rem;
`;

const ValueText = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  line-height: 1.6;
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
`;

const MissionImg = styled.img`
  width: 100%;
  aspect-ratio: ${({ theme }) => theme.aspect.fourThree};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.card};
`;

const MissionText = styled.div`
  position: relative;
  padding-left: 3rem;
  border-left: 2px solid ${({ theme }) => theme.colors.goldAccent};
`;

const MissionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin-bottom: 1.5rem;
`;

const MissionPara = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const VisionGrid = styled(MissionGrid)``;

const VisionText = styled.div`
  position: relative;
  padding-right: 3rem;
  border-right: 2px solid ${({ theme }) => theme.colors.goldAccent};
`;

const VisionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin-bottom: 1.5rem;
`;

const VisionPara = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  line-height: 1.6;
`;

const ProjectGrid = styled(FeatureGrid)``;

const TimelineGrid = styled(FeatureGrid)``;

const TimelineItem = styled.div`
  text-align: center;
  position: relative;
`;

const TimelineCircle = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.goldAccent};
  border: 4px solid ${({ theme }) => theme.colors.darkBlueAlt};
  margin: 0 auto 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.25rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const TimelinePeriod = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  margin-bottom: 0.5rem;
`;

const TimelineLabel = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  margin-bottom: 0.5rem;
`;

const TimelineDesc = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: 0.9375rem;
`;

const FinalContact = styled(Section)`
  background: ${({ theme }) => theme.colors.darkBlueAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.goldAccent}20;
  padding: 6rem 0;
`;

const FinalTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: 1.5rem;
`;

const FinalPara = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FinalButton = styled(CtaButton)`
  font-size: ${({ theme }) => theme.fontSizes.h5};
  padding: 1.5rem 3rem;
  background: ${({ theme }) => theme.colors.goldAccent};
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccentHover};
    box-shadow: ${({ theme }) => theme.colors.boxShadowGoldGlow};
  }
`;
// THEME REFACTOR END

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [newsIndex, setNewsIndex] = useState(0);
  // const theme = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prev) => (prev + 1) % HERO_CONTENT.rotatingNews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Bg>
      {/* HERO SECTION */}
      <Hero>
        <HeroBg
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1758799073949-0547a39c12f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080')",
          }}
        />
        <HeroContent>
          <HeroGrid>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Headline>{HERO_CONTENT.headline}</Headline>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <RotatingNews>
                {HERO_CONTENT.rotatingNews.map((news, index) => (
                  <NewsItem key={index} $active={index === newsIndex}>
                    <NewsLabel>Latest Update</NewsLabel>
                    <NewsHeadline>{news}</NewsHeadline>
                  </NewsItem>
                ))}
              </RotatingNews>
            </div>
          </HeroGrid>
          <HeroCtas>
            <CtaButton $primary onClick={() => onNavigate("projects")}>{HERO_CONTENT.cta1}</CtaButton>
            <CtaButton onClick={() => onNavigate("about")}>{HERO_CONTENT.cta2}</CtaButton>
          </HeroCtas>
          <ScrollHint>
            <span style={{ color: "#fff", opacity: 0.6, fontSize: 12, textTransform: "uppercase", letterSpacing: 1 }}>Scroll</span>
            <ChevronDown size={20} color="#fff" style={{ opacity: 0.6 }} />
          </ScrollHint>
        </HeroContent>
      </Hero>

      {/* FEATURE TILE STRIP */}
      <Section>
        <Container>
          <FeatureGrid>
            {FEATURE_TILES.map((tile, index) => (
              <FeatureTile key={index} onClick={() => onNavigate("news")}> 
                <FeatureImg src={tile.image} alt={tile.title} />
                <FeatureOverlay />
                <FeatureInfo>
                  <FeatureDate>{tile.date}</FeatureDate>
                  <FeatureTitle>{tile.title}</FeatureTitle>
                </FeatureInfo>
                <FeatureArrow>
                  <SkytowerArrow />
                </FeatureArrow>
              </FeatureTile>
            ))}
          </FeatureGrid>
        </Container>
      </Section>

      {/* KPI IMPACT BAR */}
      <KpiBar>
        <Container>
          <KpiGrid>
            {KPI_METRICS.map((metric, index) => (
              <KpiItem key={index}>
                <KpiValue>{metric.value}</KpiValue>
                <KpiLabel>{metric.label}</KpiLabel>
              </KpiItem>
            ))}
          </KpiGrid>
        </Container>
      </KpiBar>

      {/* WHAT SETS APOZ APART */}
      <Section>
        <Container>
          <h2 style={{ color: "#0B1C2D", fontSize: 48, marginBottom: 16, textAlign: "center" }}>
            What Sets APOZ Apart
          </h2>
          <div style={{ width: 96, height: 4, background: "#C9A24D", margin: "0 auto 64px auto" }} />
          <ValueGrid>
            {VALUE_PROPS.map((prop, index) => (
              <ValueCard key={index}>
                <ValueTitle>{prop.title}</ValueTitle>
                <ValueText>{prop.text}</ValueText>
              </ValueCard>
            ))}
          </ValueGrid>
        </Container>
      </Section>

      {/* MISSION */}
      <Section $bg="#fff">
        <Container>
          <MissionGrid>
            <MissionImg
              src="https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Mission"
            />
            <MissionText>
              <MissionTitle>{MISSION.title}</MissionTitle>
              <MissionPara>{MISSION.paragraph1}</MissionPara>
              <MissionPara>{MISSION.paragraph2}</MissionPara>
            </MissionText>
          </MissionGrid>
        </Container>
      </Section>

      {/* VISION */}
      <Section>
        <Container>
          <VisionGrid>
            <VisionText>
              <VisionTitle>{VISION.title}</VisionTitle>
              <VisionPara>{VISION.paragraph}</VisionPara>
            </VisionText>
            <MissionImg
              src="https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Vision"
            />
          </VisionGrid>
        </Container>
      </Section>

      {/* PROJECT PREVIEW */}
      <Section $bg="#fff">
        <Container>
          <h2 style={{ color: "#0B1C2D", fontSize: 48, marginBottom: 16, textAlign: "center" }}>
            Development Phases
          </h2>
          <div style={{ width: 96, height: 4, background: "#C9A24D", margin: "0 auto 64px auto" }} />
          <ProjectGrid>
            {PROJECT_PREVIEWS.map((project, index) => (
              <PremiumCard
                key={index}
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                onClick={() => onNavigate("projects")}
              />
            ))}
          </ProjectGrid>
        </Container>
      </Section>

      {/* TIMELINE */}
      <Section $bg="#0B1C2D">
        <Container>
          <h2 style={{ color: "#fff", fontSize: 48, marginBottom: 16, textAlign: "center" }}>
            Project Timeline
          </h2>
          <div style={{ width: 96, height: 4, background: "#C9A24D", margin: "0 auto 64px auto" }} />
          <TimelineGrid>
            {TIMELINE_ITEMS.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineCircle>{index + 1}</TimelineCircle>
                <TimelinePeriod>{item.period}</TimelinePeriod>
                <TimelineLabel>{item.label}</TimelineLabel>
                <TimelineDesc>{item.description}</TimelineDesc>
              </TimelineItem>
            ))}
          </TimelineGrid>
        </Container>
      </Section>

      {/* FINAL CONTACT STRIP */}
      <FinalContact>
        <Container style={{ textAlign: "center" }}>
          <FinalTitle>Ready to Get Involved?</FinalTitle>
          <FinalPara>
            Contact us to learn about investment opportunities and partnership possibilities
          </FinalPara>
          <FinalButton onClick={() => onNavigate("contact")}>Contact Us</FinalButton>
        </Container>
      </FinalContact>
    </Bg>
  );
};
