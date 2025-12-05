import React from "react";
import styled from "styled-components";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { lightTheme, breakpoints } from "../theme";

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
  bg?: string;
  dark?: boolean;
}
const Section = styled.section<SectionProps>`
  position: relative;
  padding: 6rem 0;
  background: ${({ bg, theme }) => bg || theme.colors.background};
  color: ${({ dark, theme }) => (dark ? theme.colors.foreground : "inherit")};
  @media (max-width: ${breakpoints.md}) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: ${breakpoints.sm}) {
    padding: 0 1.5rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    padding: 0 2rem;
  }
`;

const HeroTag = styled.div`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.accent};
  backdrop-filter: blur(4px);
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  margin-bottom: 2rem;
`;

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

interface DividerProps {
  color?: string;
}
const Divider = styled.div<DividerProps>`
  width: 4rem;
  height: 0.25rem;
  background: ${({ color, theme }) => color || theme.colors.accent};
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
  @media (min-width: ${breakpoints.lg}) {
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

// =====================
// AboutPage Component
// =====================
export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section bg="linear-gradient(135deg, #0A1628 0%, #1a2942 100%)" dark>
        <Container style={{ textAlign: "center" }}>
          <HeroTag>
            <span style={{ color: lightTheme.colors.accent }}>{ABOUT_HERO.tag}</span>
          </HeroTag>
          <HeroTitle style={{ color: "#fff" }}>{ABOUT_HERO.heroBlock}</HeroTitle>
          <Divider color="#D4AF37" />
          <HeroParagraph>{ABOUT_HERO.paragraphBlock1}</HeroParagraph>
          <HeroParagraph>{ABOUT_HERO.paragraphBlock2}</HeroParagraph>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section bg={lightTheme.colors.background}>
        <Container>
          <Grid cols={2}>
            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/3", borderRadius: lightTheme.borderRadius, overflow: "hidden" }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mission"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ position: "absolute", bottom: "-2rem", left: "-2rem", width: "16rem", height: "16rem", background: "#D4AF37", opacity: 0.1, borderRadius: lightTheme.borderRadius, zIndex: -1 }}></div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "3rem", height: "3rem", background: "linear-gradient(135deg, #0A1628 0%, #1a2942 100%)", borderRadius: lightTheme.borderRadius, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Target style={{ width: "1.5rem", height: "1.5rem", color: "#D4AF37" }} />
                </div>
                <div style={{ display: "inline-block", padding: "0.5rem 1rem", background: "#D4AF37", opacity: 0.1, borderRadius: "999px" }}>
                  <span style={{ color: "#D4AF37", letterSpacing: "0.05em" }}>{MISSION_SECTION.tag}</span>
                </div>
              </div>
              <h2 style={{ color: lightTheme.colors.primary, marginBottom: "1.5rem" }}>{MISSION_SECTION.titleBlock}</h2>
              <p style={{ color: lightTheme.colors.mutedForeground, fontSize: lightTheme.fontSizes.lg, lineHeight: 1.7, marginBottom: "1.5rem" }}>{MISSION_SECTION.missionBlock1}</p>
              <p style={{ color: lightTheme.colors.mutedForeground, fontSize: lightTheme.fontSizes.lg, lineHeight: 1.7, marginBottom: "1.5rem" }}>{MISSION_SECTION.missionBlock2}</p>
              <p style={{ color: lightTheme.colors.muted, lineHeight: 1.7 }}>{MISSION_SECTION.missionBlock3}</p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Vision Section */}
      <Section bg={lightTheme.colors.muted}>
        <Container>
          <Grid cols={2}>
            <div style={{ order: 2, position: "relative" }}>
              <div style={{ aspectRatio: "4/3", borderRadius: lightTheme.borderRadius, overflow: "hidden" }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vision"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ position: "absolute", bottom: "-2rem", right: "-2rem", width: "16rem", height: "16rem", background: "#0A1628", opacity: 0.05, borderRadius: lightTheme.borderRadius, zIndex: -1 }}></div>
            </div>
            <div style={{ order: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "3rem", height: "3rem", background: "linear-gradient(135deg, #0A1628 0%, #1a2942 100%)", borderRadius: lightTheme.borderRadius, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Eye style={{ width: "1.5rem", height: "1.5rem", color: "#D4AF37" }} />
                </div>
                <div style={{ display: "inline-block", padding: "0.5rem 1rem", background: "#D4AF37", opacity: 0.1, borderRadius: "999px" }}>
                  <span style={{ color: "#D4AF37", letterSpacing: "0.05em" }}>{VISION_SECTION.tag}</span>
                </div>
              </div>
              <h2 style={{ color: lightTheme.colors.primary, marginBottom: "1.5rem" }}>{VISION_SECTION.titleBlock}</h2>
              <p style={{ color: lightTheme.colors.mutedForeground, fontSize: lightTheme.fontSizes.lg, lineHeight: 1.7, marginBottom: "1.5rem" }}>{VISION_SECTION.visionBlock1}</p>
              <p style={{ color: lightTheme.colors.muted, lineHeight: 1.7 }}>{VISION_SECTION.visionBlock2}</p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Core Features */}
      <Section bg={lightTheme.colors.background}>
        <Container>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "3rem", height: "3rem", background: "linear-gradient(135deg, #0A1628 0%, #1a2942 100%)", borderRadius: lightTheme.borderRadius, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Award style={{ width: "1.5rem", height: "1.5rem", color: "#D4AF37" }} />
              </div>
            </div>
            <h2 style={{ color: lightTheme.colors.primary, marginBottom: "1rem" }}>{CORE_FEATURES.titleBlock}</h2>
            <Divider color="#D4AF37" />
            <p style={{ color: lightTheme.colors.muted, maxWidth: "32rem", margin: "0 auto" }}>{CORE_FEATURES.descriptionBlock}</p>
          </div>
          <Grid cols={2} style={{ maxWidth: "64rem", margin: "0 auto" }}>
            {CORE_FEATURES.features.map((feature, index) => (
              <FeatureCard key={index}>
                <CheckCircle2 style={{ width: "1.5rem", height: "1.5rem", color: "#D4AF37", flexShrink: 0, marginTop: "0.25rem" }} />
                <div>
                  <FeatureTitle>{feature.titleBlock}</FeatureTitle>
                  <FeatureDesc>{feature.descriptionBlock}</FeatureDesc>
                </div>
              </FeatureCard>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Leadership Section */}
      <Section bg="#0A1628" dark>
        <Container style={{ maxWidth: "48rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ color: "#fff", marginBottom: "1rem" }}>{LEADERSHIP_SECTION.titleBlock}</h2>
            <Divider color="#D4AF37" />
          </div>
          <LeadershipCard>
            <p style={{ color: lightTheme.colors.mutedForeground, fontSize: lightTheme.fontSizes.lg, lineHeight: 1.7, marginBottom: "1.5rem" }}>{LEADERSHIP_SECTION.paragraphBlock1}</p>
            <p style={{ color: lightTheme.colors.mutedForeground, lineHeight: 1.7 }}>{LEADERSHIP_SECTION.paragraphBlock2}</p>
          </LeadershipCard>
        </Container>
      </Section>
    </div>
  );
}
