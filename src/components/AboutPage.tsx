import React from "react";
import styled from "styled-components";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
// No direct theme import; all theme usage is via styled-components

// ============================================
// ABOUT PAGE CONTENT BLOCKS
// ============================================
const ABOUT_HERO = {
  tag: "About APOZ",
  heroBlock: "About Asia Pacific Opportunity Zone",
  paragraphBlock1:
    "The Asia Pacific Opportunity Zone (APOZ) is a strategic development integrating industrial, commercial, and residential infrastructure in Southeast Texas.",
  paragraphBlock2:
    "Spearheaded by ASC Global Inc., APOZ addresses the region's growing need for affordable housing, manufacturing space, and global trade connectivity.",
};

const MISSION_SECTION = {
  tag: "Our Mission",
  titleBlock: "Creating Dynamic Communities",
  missionBlock1:
    "APOZ is dedicated to creating a dynamic, sustainable, and innovation-driven industrial and residential community in Southeast Texas.",
  missionBlock2:
    "By integrating smart infrastructure, green energy, and global partnerships, APOZ aims to become a hub for advanced manufacturing, international trade, and inclusive housing.",
  missionBlock3:
    "Our commitment extends beyond development — we're building ecosystems where businesses thrive, families flourish, and communities grow stronger through strategic planning and sustainable practices.",
};

const VISION_SECTION = {
  tag: "Our Vision",
  titleBlock: "Empowering Global Growth",
  visionBlock1:
    "Our vision is to empower growth — not only for businesses but also for the communities they serve — by transforming underdeveloped land into high-value economic zones that support long-term prosperity and global collaboration.",
  visionBlock2:
    "We envision APOZ as a beacon of opportunity, where international trade meets community development, and where sustainable practices create lasting value for generations to come.",
};

const CORE_FEATURES = {
  titleBlock: "Core Features",
  descriptionBlock:
    "APOZ offers a comprehensive development framework designed to meet the diverse needs of businesses and communities",
  features: [
    {
      titleBlock: "Affordable Housing",
      descriptionBlock:
        "High-quality homes starting at $188,000 to support working families",
    },
    {
      titleBlock: "Industrial Parks",
      descriptionBlock:
        "State-of-the-art facilities for manufacturing, warehousing, and distribution",
    },
    {
      titleBlock: "Commercial Development",
      descriptionBlock:
        "Mixed-use zones with retail, dining, and essential services",
    },
    {
      titleBlock: "Free Trade Zone Integration",
      descriptionBlock:
        "Ideal for global logistics, export/import, and business incentives",
    },
    {
      titleBlock: "Sustainability Focus",
      descriptionBlock:
        "Thoughtfully planned green spaces and long-term environmental resilience",
    },
  ],
};

const LEADERSHIP_SECTION = {
  titleBlock: "Leadership & Expertise",
  paragraphBlock1:
    "APOZ is developed by ASC Global Inc., a subsidiary of Token Communities Ltd. (OTC: TKCM), bringing together decades of experience in international development, trade facilitation, and community planning.",
  paragraphBlock2:
    "Our leadership team combines expertise in real estate development, international trade, sustainable infrastructure, and community engagement to deliver a project that sets new standards for integrated development in Southeast Texas.",
};

// =====================
// Styled Components
// =====================
interface SectionProps {
  variant?: 'hero' | 'default' | 'muted' | 'dark';
}
const Section = styled.section<SectionProps>`
  position: relative;
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: ${({ variant, theme }) =>
    variant === 'hero' ? theme.gradients.hero :
    variant === 'muted' ? theme.colors.muted :
    variant === 'dark' ? theme.colors.darkBlue :
    theme.colors.background};
  color: ${({ variant, theme }) =>
    variant === 'hero' ? theme.colors.white :
    variant === 'dark' ? theme.colors.white :
    'inherit'};
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

const Centered = styled.div`
  text-align: center;
`;

const HeroTag = styled.div`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.pill};
  background: ${({ theme }) => theme.colors.accent};
  backdrop-filter: blur(4px);
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  margin-bottom: 2rem;
  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const Divider = styled.div`
  width: 4rem;
  height: 0.25rem;
  background: ${({ theme }) => theme.colors.gold};
  margin: 0 auto 2rem auto;
  border-radius: 2px;
`;

const HeroParagraph = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  max-width: 48rem;
  margin: 0 auto 1.5rem auto;
  line-height: 1.7;
`;

interface GridProps {
  cols?: number;
}
const Grid = styled.div<GridProps>`
  display: grid;
  gap: 3rem;
  align-items: center;
  grid-template-columns: 1fr;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: ${({ cols }) =>
      cols === 2 ? "1fr 1fr" : "1fr"};
  }
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: box-shadow 0.2s, border-color 0.2s;
  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  }
`;

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const FeatureDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const LeadershipCard = styled.div`
  background: ${({ theme }) => theme.colors.sidebar};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.sidebarBorder};
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const IconContainer = styled.div`
  width: ${({ theme }) => theme.spacing.xxl};
  height: ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.gradients.hero};
  border-radius: ${({ theme }) => theme.radii.card};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: ${({ theme }) => theme.spacing.xl};
    height: ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const TagPill = styled.div`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.pill};
  background: ${({ theme }) => theme.colors.gold};
  opacity: ${({ theme }) => theme.opacity.low};
  border-radius: ${({ theme }) => theme.radii.full};
  span {
    color: ${({ theme }) => theme.colors.gold};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  }
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionParagraph = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionParagraphMuted = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
`;

const ImageWrapper = styled.div`
  aspect-ratio: ${({ theme }) => theme.aspect.fourThree};
  border-radius: ${({ theme }) => theme.radii.card};
  overflow: hidden;
`;

const ImageAccent = styled.div<{ position?: "left" | "right"; variant?: 'gold' | 'darkBlue' }>`
  position: absolute;
  bottom: -${({ theme }) => theme.spacing.xxl};
  ${({ position, theme }) => position === "left" ? `left: -${theme.spacing.xxl};` : `right: -${theme.spacing.xxl};`}
  width: ${({ theme }) => theme.spacing.xxxl};
  height: ${({ theme }) => theme.spacing.xxxl};
  background: ${({ variant, theme }) =>
    variant === 'darkBlue' ? theme.colors.darkBlue : theme.colors.gold};
  opacity: ${({ variant, theme }) =>
    variant === 'darkBlue' ? theme.opacity.med : theme.opacity.low};
  border-radius: ${({ theme }) => theme.radii.card};
  z-index: -1;
`;

// =====================
// AboutPage Component
// =====================

// Helper styled-components for layout previously handled by inline styles
const RelativeDiv = styled.div`
  position: relative;
`;
const OrderedDiv = styled.div<{ order?: number }>`
  order: ${({ order }) => order};
`;
const CenteredMargin = styled(Centered)`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;
const SectionHeaderCentered = styled(SectionHeader)`
  justify-content: center;
`;
const SectionTitleWithMargin = styled(SectionTitle)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
const SectionParagraphMutedMax = styled(SectionParagraphMuted)`
  max-width: ${({ theme }) => theme.spacing.xxxl};
  margin: 0 auto;
`;
const GridMax = styled(Grid)`
  max-width: ${({ theme }) => theme.spacing.xxxl};
  margin: 0 auto;
`;
const ContainerMax = styled(Container)`
  max-width: ${({ theme }) => theme.spacing.xxxl};
`;
const CenteredXXL = styled(Centered)`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;
const SectionTitleWhite = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section variant="hero">
        <Container>
          <Centered>
            <HeroTag>
              <span>{ABOUT_HERO.tag}</span>
            </HeroTag>
            <HeroTitle>{ABOUT_HERO.heroBlock}</HeroTitle>
            <Divider />
            <HeroParagraph>{ABOUT_HERO.paragraphBlock1}</HeroParagraph>
            <HeroParagraph>{ABOUT_HERO.paragraphBlock2}</HeroParagraph>
          </Centered>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section variant="default">
        <Container>
          <Grid cols={2}>
            <RelativeDiv>
              <ImageWrapper>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mission"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </ImageWrapper>
              <ImageAccent position="left" variant="gold" />
            </RelativeDiv>
            <div>
              <SectionHeader>
                <IconContainer>
                  <Target />
                </IconContainer>
                <TagPill>
                  <span>{MISSION_SECTION.tag}</span>
                </TagPill>
              </SectionHeader>
              <SectionTitle>{MISSION_SECTION.titleBlock}</SectionTitle>
              <SectionParagraph>{MISSION_SECTION.missionBlock1}</SectionParagraph>
              <SectionParagraph>{MISSION_SECTION.missionBlock2}</SectionParagraph>
              <SectionParagraphMuted>{MISSION_SECTION.missionBlock3}</SectionParagraphMuted>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Vision Section */}
      <Section variant="muted">
        <Container>
          <Grid cols={2}>
            <OrderedDiv order={2} style={{ position: "relative" }}>
              <ImageWrapper>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vision"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </ImageWrapper>
              <ImageAccent position="right" variant="darkBlue" />
            </OrderedDiv>
            <OrderedDiv order={1}>
              <SectionHeader>
                <IconContainer>
                  <Eye />
                </IconContainer>
                <TagPill>
                  <span>{VISION_SECTION.tag}</span>
                </TagPill>
              </SectionHeader>
              <SectionTitle>{VISION_SECTION.titleBlock}</SectionTitle>
              <SectionParagraph>{VISION_SECTION.visionBlock1}</SectionParagraph>
              <SectionParagraphMuted>{VISION_SECTION.visionBlock2}</SectionParagraphMuted>
            </OrderedDiv>
          </Grid>
        </Container>
      </Section>

      {/* Core Features */}
      <Section variant="default">
        <Container>
          <CenteredMargin>
            <SectionHeaderCentered>
              <IconContainer>
                <Award />
              </IconContainer>
            </SectionHeaderCentered>
            <SectionTitleWithMargin>{CORE_FEATURES.titleBlock}</SectionTitleWithMargin>
            <Divider />
            <SectionParagraphMutedMax>{CORE_FEATURES.descriptionBlock}</SectionParagraphMutedMax>
          </CenteredMargin>
          <GridMax cols={2}>
            {CORE_FEATURES.features.map((feature, index) => (
              <FeatureCard key={index}>
                <IconContainer>
                  <CheckCircle2 />
                </IconContainer>
                <div>
                  <FeatureTitle>{feature.titleBlock}</FeatureTitle>
                  <FeatureDesc>{feature.descriptionBlock}</FeatureDesc>
                </div>
              </FeatureCard>
            ))}
          </GridMax>
        </Container>
      </Section>

      {/* Leadership Section */}
      <Section variant="dark">
        <ContainerMax>
          <CenteredXXL>
            <SectionTitleWhite>{LEADERSHIP_SECTION.titleBlock}</SectionTitleWhite>
            <Divider />
          </CenteredXXL>
          <LeadershipCard>
            <SectionParagraph>{LEADERSHIP_SECTION.paragraphBlock1}</SectionParagraph>
            <SectionParagraphMuted>{LEADERSHIP_SECTION.paragraphBlock2}</SectionParagraphMuted>
          </LeadershipCard>
        </ContainerMax>
      </Section>
    </div>
  );
}
