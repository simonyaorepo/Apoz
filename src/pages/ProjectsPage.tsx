import styled from "styled-components";
import { SkytowerArrow } from "../components/SkytowerArrow";

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

const PROJECT_BANDS = [
  {
    title: "Infrastructure & Site Preparation",
    subtitle: "Phase 1 | 2025–2026",
    description:
      "The foundation of APOZ begins with comprehensive infrastructure development, including roads, utilities, water systems, and power distribution networks.",
    points: [
      "Site grading and land preparation",
      "Utility infrastructure installation",
      "Road network development",
      "Drainage and water management systems",
      "Power distribution infrastructure",
      "Telecommunications backbone",
    ],
    image:
      "https://images.unsplash.com/photo-1613928270169-4e4462c75a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGV2ZWxvcG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NjU4ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imagePosition: "right",
  },
  {
    title: "Residential Communities",
    subtitle: "Affordable Housing for Growing Families",
    description:
      "APOZ's residential component addresses the critical need for affordable, quality housing in Greater Houston with modern single-family homes starting at $188,000.",
    points: [
      "Single-family homes from $188,000",
      "Three-bedroom standard units",
      "Multi-family housing options",
      "Community parks and green spaces",
      "Schools and educational facilities",
      "Family-friendly amenities",
    ],
    image:
      "https://images.unsplash.com/photo-1758304480344-f8d0de5f4f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbW11bml0eSUyMGFlcmlhbHxlbnwxfHx8fDE3NjQ1ODk5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imagePosition: "left",
  },
  {
    title: "Industrial & Logistics Parks",
    subtitle: "Free Trade Zone Facilities",
    description:
      "As a designated Free Trade Zone, APOZ will host world-class industrial facilities designed for advanced manufacturing, warehousing, distribution, and global trade operations.",
    points: [
      "Free Trade Zone facilities",
      "Advanced manufacturing spaces",
      "Warehousing and distribution centers",
      "Logistics and transportation hubs",
      "Import/export processing facilities",
      "Business incubation centers",
    ],
    image:
      "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjQ2NTg4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imagePosition: "right",
  },
  {
    title: "Commercial Core",
    subtitle: "Mixed-Use Development",
    description:
      "Mixed-use commercial development will create vibrant business districts within APOZ, featuring retail spaces, office buildings, dining establishments, and service centers.",
    points: [
      "Retail and shopping centers",
      "Office space and business parks",
      "Restaurants and dining venues",
      "Healthcare facilities",
      "Financial services centers",
      "Entertainment and recreation",
    ],
    image:
      "https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imagePosition: "left",
  },
];

const HeroSection = styled.section`
  position: relative;
  min-height: ${({ theme }) => theme.spacing.xxxl};
  height: 60vh;
  background: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  align-items: center;
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
const HeroBar = styled.div`
  width: ${({ theme }) => theme.spacing.dividerW};
  height: ${({ theme }) => theme.spacing.dividerH};
  background: ${({ theme }) => theme.colors.gold};
`;

const BandSection = styled.section<{ alt?: boolean }>`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: ${({ alt, theme }) => (alt ? theme.colors.backgroundAlt : theme.colors.white)};
`;
const BandGrid = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
`;
const BandImageWrap = styled.div<{ reverse?: boolean }>`
  order: ${({ reverse }) => (reverse ? 2 : 1)};
`;
const BandImage = styled.img`
  width: 100%;
  aspect-ratio: ${({ theme }) => theme.aspect.wide};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.card};
`;
const BandTextWrap = styled.div<{ reverse?: boolean }>`
  order: ${({ reverse }) => (reverse ? 1 : 2)};
`;
const BandSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
const BandTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.1;
`;
const BandDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;
const BandList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const BandListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
const BandBullet = styled.div`
  width: ${({ theme }) => theme.spacing.xs};
  height: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radii.full};
  margin-top: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;
`;
const BandPoint = styled.span`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const FutureSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: ${({ theme }) => theme.colors.darkBlue};
`;
const FutureTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;
const FutureBar = styled.div`
  width: ${({ theme }) => theme.spacing.dividerW};
  height: ${({ theme }) => theme.spacing.dividerH};
  background: ${({ theme }) => theme.colors.gold};
  margin: 0 auto ${({ theme }) => theme.spacing.xxl} auto;
`;
const FutureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  max-width: 800px;
  margin: 0 auto;
`;
const FutureCard = styled.div`
  background: ${({ theme }) => theme.colors.darkBlueAlt};
  padding: ${({ theme }) => theme.spacing.card};
  border-radius: ${({ theme }) => theme.radii.card};
  border: 1px solid ${({ theme }) => theme.colors.goldAccent}20;
`;
const FutureCardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
const FutureCardDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: ${({ theme }) => theme.colors.white};
`;
const CTATitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;
const CTADesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const CTAButton = styled.button`
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxxl};
  background: ${({ theme }) => theme.colors.goldAccent};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  border: none;
  transition: ${({ theme }) => theme.transition.button};
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccentHover};
  }
`;

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  return (
    <div>
      {/* HERO */}
      <HeroSection>
        <HeroBg
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613928270169-4e4462c75a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGV2ZWxvcG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NjU4ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080')",
          }}
        />
        <HeroContent>
          <HeroTitle>Projects & Developments</HeroTitle>
          <HeroBar />
        </HeroContent>
      </HeroSection>

      {/* PROJECT BANDS */}
      {PROJECT_BANDS.map((band, index) => (
        <BandSection key={index} alt={index % 2 !== 0}>
          <div style={{ maxWidth: '1320px', margin: "0 auto", padding: "0 1.5rem" }}>
            <BandGrid reverse={band.imagePosition === "left"}>
              <BandImageWrap reverse={band.imagePosition === "left"}>
                <div style={{ position: "relative" }}>
                  <BandImage src={band.image} alt={band.title} />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 24,
                      right: 24,
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                  >
                    <SkytowerArrow onClick={() => onNavigate("contact")} />
                  </div>
                </div>
              </BandImageWrap>
              <BandTextWrap reverse={band.imagePosition === "left"}>
                <BandSubtitle>{band.subtitle}</BandSubtitle>
                <BandTitle>{band.title}</BandTitle>
                <BandDesc>{band.description}</BandDesc>
                <BandList>
                  {band.points.map((point, pointIndex) => (
                    <BandListItem key={pointIndex}>
                      <BandBullet />
                      <BandPoint>{point}</BandPoint>
                    </BandListItem>
                  ))}
                </BandList>
              </BandTextWrap>
            </BandGrid>
          </div>
        </BandSection>
      ))}

      {/* FUTURE PHASES */}
      <FutureSection>
        <div style={{ maxWidth: '1320px', margin: "0 auto", padding: "0 1.5rem" }}>
          <FutureTitle>Future Phases</FutureTitle>
          <FutureBar />
          <FutureGrid>
            <FutureCard>
              <FutureCardTitle>Technology Integration</FutureCardTitle>
              <FutureCardDesc>
                Smart city infrastructure, IoT connectivity, and digital services to enhance quality of life and business efficiency.
              </FutureCardDesc>
            </FutureCard>
            <FutureCard>
              <FutureCardTitle>Green Innovation</FutureCardTitle>
              <FutureCardDesc>
                Renewable energy installations, sustainable transportation, and environmental conservation initiatives.
              </FutureCardDesc>
            </FutureCard>
            <FutureCard>
              <FutureCardTitle>Education & Training</FutureCardTitle>
              <FutureCardDesc>
                Workforce development centers, technical training facilities, and educational partnerships.
              </FutureCardDesc>
            </FutureCard>
            <FutureCard>
              <FutureCardTitle>Community Services</FutureCardTitle>
              <FutureCardDesc>
                Healthcare facilities, cultural centers, recreational amenities, and social infrastructure.
              </FutureCardDesc>
            </FutureCard>
          </FutureGrid>
        </div>
      </FutureSection>

      {/* CTA */}
      <CTASection>
        <div style={{ maxWidth: '1320px', margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <CTATitle>Ready to Get Involved?</CTATitle>
          <CTADesc>
            Contact us to learn about investment opportunities and partnership possibilities
          </CTADesc>
          <CTAButton onClick={() => onNavigate("contact")}>Contact Us</CTAButton>
        </div>
      </CTASection>
    // SectionContainer for layout consistency
    const SectionContainer = styled.div`
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 1.5rem;
    `;
    </div>
  );
}
