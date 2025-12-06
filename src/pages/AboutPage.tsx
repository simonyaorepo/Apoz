import styled, { useTheme } from "styled-components";
import { Target, Eye, Award, Users, Leaf, TrendingUp } from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const ABOUT_HERO = {
  title: "About Asia Pacific Opportunity Zone",
  paragraph1:
    "The Asia Pacific Opportunity Zone (APOZ) is a strategic development integrating industrial, commercial, and residential infrastructure in Southeast Texas.",
  paragraph2:
    "Spearheaded by ASC Global Inc., APOZ addresses the region's growing need for affordable housing, manufacturing space, and global trade connectivity.",
};

const MISSION = {
  title: "Our Mission",
  paragraph1:
    "APOZ is dedicated to creating a dynamic, sustainable, and innovation-driven industrial and residential community in Southeast Texas.",
  paragraph2:
    "By integrating smart infrastructure, green energy, and global partnerships, APOZ aims to become a hub for advanced manufacturing, international trade, and inclusive housing.",
  paragraph3:
    "Our commitment extends beyond development — we're building ecosystems where businesses thrive, families flourish, and communities grow stronger through strategic planning and sustainable practices.",
};

const VISION = {
  title: "Our Vision",
  paragraph1:
    "Our vision is to empower growth — not only for businesses but also for the communities they serve — by transforming underdeveloped land into high-value economic zones that support long-term prosperity and global collaboration.",
  paragraph2:
    "We envision APOZ as a beacon of opportunity, where international trade meets community development, and where sustainable practices create lasting value for generations to come.",
};

const CORE_PILLARS = [
  {
    icon: Award,
    title: "Affordable Housing",
    description:
      "High-quality homes starting at $188,000 to support working families",
  },
  {
    icon: Target,
    title: "Industrial Parks",
    description:
      "State-of-the-art facilities for manufacturing, warehousing, and distribution",
  },
  {
    icon: Users,
    title: "Commercial Development",
    description:
      "Mixed-use zones with retail, dining, and essential services",
  },
  {
    icon: TrendingUp,
    title: "Free Trade Zone Integration",
    description:
      "Ideal for global logistics, export/import, and business incentives",
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    description:
      "Thoughtfully planned green spaces and long-term environmental resilience",
  },
  {
    icon: Eye,
    title: "Global Partnerships",
    description:
      "Collaboration with international trade organizations and local government",
  },
];

const LEADERSHIP = {
  title: "Leadership & Expertise",
  paragraph1:
    "APOZ is developed by ASC Global Inc., a subsidiary of Token Communities Ltd. (OTC: TKCM), bringing together decades of experience in international development, trade facilitation, and community planning.",
  paragraph2:
    "Our leadership team combines expertise in real estate development, international trade, sustainable infrastructure, and community engagement to deliver a project that sets new standards for integrated development in Southeast Texas.",
};

const HeroSection = styled.section`
  position: relative;
  min-height: 500px;
  height: 60vh;
  background: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  align-items: center;
`;
const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1758799073949-0547a39c12f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080');
  background-size: cover;
  background-position: center;
  opacity: ${({ theme }) => theme.opacity.med};
`;
const HeroContent = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;
const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.hero};
  line-height: 1.05;
  margin-bottom: ${({ theme }) => theme.spacing.mb2};
`;
const HeroDivider = styled.div`
  width: ${({ theme }) => theme.spacing.dividerW};
  height: ${({ theme }) => theme.spacing.dividerH};
  background: ${({ theme }) => theme.colors.gold};
`;
const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
`;
const SectionContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;
const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;
const SectionDivider = styled.div`
  width: ${({ theme }) => theme.spacing.xxl};
  height: ${({ theme }) => theme.spacing.dividerH};
  background: ${({ theme }) => theme.colors.gold};
  margin: 0 auto ${({ theme }) => theme.spacing.xxxl} auto;
`;
const SectionText = styled.p<{ color?: string }>`
  color: ${({ color, theme }) => color || theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;
`;
const PillarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
`;
const PillarCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.radii.card};
  border: 1px solid ${({ theme }) => theme.colors.grayBorder};
  transition: box-shadow 0.3s, border-color 0.3s;
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: ${({ theme }) => theme.colors.boxShadowGold};
  }
`;
const PillarIcon = styled.div`
  width: ${({ theme }) => theme.spacing.xxxl};
  height: ${({ theme }) => theme.spacing.xxxl};
  background: ${({ theme }) => theme.gradients.hero};
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  transition: transform 0.3s;
  ${PillarCard}:hover & {
    transform: scale(1.1);
  }
`;
const PillarTitle = styled.h3`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
const PillarDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.h6};
`;
const LeadershipSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: ${({ theme }) => theme.colors.darkBlue};
`;
const LeadershipTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;
const LeadershipDivider = styled.div`
  width: ${({ theme }) => theme.spacing.xxl};
  height: ${({ theme }) => theme.spacing.dividerH};
  background: ${({ theme }) => theme.colors.gold};
  margin: 0 auto ${({ theme }) => theme.spacing.xxxl} auto;
`;
const LeadershipCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.darkBlueAlt};
  padding: ${({ theme }) => theme.spacing.xxxl};
  border-radius: ${({ theme }) => theme.radii.card};
  border: 1px solid ${({ theme }) => theme.colors.gold}20;
`;
const LeadershipText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
const LeadershipTextMuted = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.h6};
`;
const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.white};
`;
const CTAContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;
const CTATitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
const CTAText = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;
const CTAButtonRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
`;
const CTAButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xxxl}`};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.button};
  &.primary {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.darkBlue};
    border: none;
    &:hover {
      background: ${({ theme }) => theme.colors.goldAccentHover};
    }
  }
  &.secondary {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkBlue};
    border: 2px solid ${({ theme }) => theme.colors.darkBlue};
    &:hover {
      background: ${({ theme }) => theme.colors.darkBlue};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export function AboutPage({ onNavigate }: AboutPageProps) {
  const theme = useTheme();
  return (
    <div>
      {/* HERO */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>{ABOUT_HERO.title}</HeroTitle>
          <HeroDivider />
        </HeroContent>
      </HeroSection>

      {/* INTRO */}
      <Section style={{ background: theme.colors.white }}>
        <SectionContainer>
          <SectionText color={theme.colors.darkBlue}>{ABOUT_HERO.paragraph1}</SectionText>
          <SectionText color={theme.colors.grayAccent}>{ABOUT_HERO.paragraph2}</SectionText>
        </SectionContainer>
      </Section>

      {/* MISSION */}
      <Section style={{ background: theme.colors.backgroundAlt }}>
        <SectionContainer>
          <Grid>
            <img
              src="https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Mission"
              style={{ width: "100%", aspectRatio: theme.aspect.fourThree, objectFit: "cover", borderRadius: theme.radii.card }}
            />
            <div style={{ position: "relative", paddingLeft: theme.spacing.xxxl, borderLeft: `2px solid ${theme.colors.goldAccent}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: theme.spacing.xl, marginBottom: theme.spacing.xxl }}>
                <div style={{ width: theme.spacing.xxxl, height: theme.spacing.xxxl, background: theme.colors.goldAccent, borderRadius: theme.radii.full, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Target size={32} color={theme.colors.darkBlueAlt} />
                </div>
                <SectionTitle style={{ color: theme.colors.darkBlue, fontSize: theme.fontSizes.h2, marginBottom: 0, textAlign: "left" }}>{MISSION.title}</SectionTitle>
              </div>
              <SectionText color={theme.colors.darkBlue} style={{ textAlign: "left", marginBottom: theme.spacing.xl }}>{MISSION.paragraph1}</SectionText>
              <SectionText color={theme.colors.darkBlue} style={{ textAlign: "left", marginBottom: theme.spacing.xl }}>{MISSION.paragraph2}</SectionText>
              <SectionText color={theme.colors.grayAccent} style={{ textAlign: "left" }}>{MISSION.paragraph3}</SectionText>
            </div>
          </Grid>
        </SectionContainer>
      </Section>

      {/* VISION */}
      <Section style={{ background: theme.colors.white }}>
        <SectionContainer>
          <Grid>
            <div style={{ position: "relative", paddingRight: theme.spacing.xxxl, borderRight: `2px solid ${theme.colors.goldAccent}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: theme.spacing.xl, marginBottom: theme.spacing.xxl }}>
                <div style={{ width: theme.spacing.xxxl, height: theme.spacing.xxxl, background: theme.colors.goldAccent, borderRadius: theme.radii.full, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Eye size={32} color={theme.colors.darkBlueAlt} />
                </div>
                <SectionTitle style={{ color: theme.colors.darkBlue, fontSize: theme.fontSizes.h2, marginBottom: 0, textAlign: "left" }}>{VISION.title}</SectionTitle>
              </div>
              <SectionText color={theme.colors.darkBlue} style={{ textAlign: "left", marginBottom: theme.spacing.xl }}>{VISION.paragraph1}</SectionText>
              <SectionText color={theme.colors.grayAccent} style={{ textAlign: "left" }}>{VISION.paragraph2}</SectionText>
            </div>
            <img
              src="https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Vision"
              style={{ width: "100%", aspectRatio: theme.aspect.fourThree, objectFit: "cover", borderRadius: theme.radii.card }}
            />
          </Grid>
        </SectionContainer>
      </Section>

      {/* CORE PILLARS */}
      <Section style={{ background: theme.colors.backgroundAlt }}>
        <SectionContainer>
          <SectionTitle>Core Pillars</SectionTitle>
          <SectionDivider />
          <PillarGrid>
            {CORE_PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <PillarCard key={index}>
                  <PillarIcon>
                    <Icon size={32} color={theme.colors.goldAccent} />
                  </PillarIcon>
                  <PillarTitle>{pillar.title}</PillarTitle>
                  <PillarDesc>{pillar.description}</PillarDesc>
                </PillarCard>
              );
            })}
          </PillarGrid>
        </SectionContainer>
      </Section>

      {/* LEADERSHIP */}
      <LeadershipSection>
        <SectionContainer>
          <LeadershipTitle>{LEADERSHIP.title}</LeadershipTitle>
          <LeadershipDivider />
          <LeadershipCard>
            <LeadershipText>{LEADERSHIP.paragraph1}</LeadershipText>
            <LeadershipTextMuted>{LEADERSHIP.paragraph2}</LeadershipTextMuted>
          </LeadershipCard>
        </SectionContainer>
      </LeadershipSection>

      {/* CTA */}
      <CTASection>
        <CTAContainer>
          <CTATitle>Ready to Learn More?</CTATitle>
          <CTAText>
            Explore our development projects or get in touch with our team
          </CTAText>
          <CTAButtonRow>
            <CTAButton className="primary" onClick={() => onNavigate("projects")}>View Projects</CTAButton>
            <CTAButton className="secondary" onClick={() => onNavigate("contact")}>Contact Us</CTAButton>
          </CTAButtonRow>
        </CTAContainer>
      </CTASection>
    </div>
  );
}
