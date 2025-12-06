import { Building2, Home, Factory, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import styled from "styled-components";


const phases = [
  {
    icon: Building2,
    title: "Phase 1 — Infrastructure & Site Preparation",
    period: "2025–2026",
    description: "The foundation of APOZ begins with comprehensive infrastructure development, including roads, utilities, water systems, and power distribution networks. This critical phase establishes the groundwork for all future development.",
    details: [
      "Site grading and land preparation",
      "Utility infrastructure installation",
      "Road network development",
      "Drainage and water management systems",
      "Power distribution infrastructure",
      "Telecommunications backbone",
    ],
    image: "https://images.unsplash.com/photo-1613928270169-4e4462c75a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGV2ZWxvcG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NjU4ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Home,
    title: "Residential Development",
    period: "Planned",
    description: "APOZ's residential component addresses the critical need for affordable, quality housing in Greater Houston. Our planned communities feature modern single-family homes starting at $188,000, designed for working families and first-time homebuyers.",
    details: [
      "Single-family homes from $188,000",
      "Three-bedroom standard units",
      "Multi-family housing options",
      "Community parks and green spaces",
      "Schools and educational facilities",
      "Family-friendly amenities",
    ],
    image: "https://images.unsplash.com/photo-1758304480344-f8d0de5f4f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbW11bml0eSUyMGFlcmlhbHxlbnwxfHx8fDE3NjQ1ODk5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Building2,
    title: "Commercial Zones",
    period: "Planned",
    description: "Mixed-use commercial development will create vibrant business districts within APOZ, featuring retail spaces, office buildings, dining establishments, and service centers that support both residents and businesses.",
    details: [
      "Retail and shopping centers",
      "Office space and business parks",
      "Restaurants and dining venues",
      "Healthcare facilities",
      "Financial services centers",
      "Entertainment and recreation",
    ],
    image: "https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Factory,
    title: "Industrial & Logistics Parks",
    period: "Planned",
    description: "As a designated Free Trade Zone, APOZ will host world-class industrial facilities designed for advanced manufacturing, warehousing, distribution, and global trade operations, attracting international businesses and creating thousands of jobs.",
    details: [
      "Free Trade Zone facilities",
      "Advanced manufacturing spaces",
      "Warehousing and distribution centers",
      "Logistics and transportation hubs",
      "Import/export processing facilities",
      "Business incubation centers",
    ],
    image: "https://images.unsplash.com/photo-1505624198937-c704aff72608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjQ2NTg4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

// Styled Components
const PhaseIcon = styled.svg`
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.colors.gold};
`;

const TrendingUpIcon = styled(TrendingUp)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.gold};
`;
const PageWrapper = styled.div``;

const HeroSection = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.gradients.hero};
`;

const HeroContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  text-align: center;
`;

const HeroTag = styled.div`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.pill};
  background: ${({ theme }) => theme.colors.goldAccent};
  backdrop-filter: blur(4px);
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const HeroTagText = styled.span`
  color: ${({ theme }) => theme.colors.gold};
  letter-spacing: 0.05em;
`;

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
`;

const HeroDivider = styled.div`
  width: ${({ theme }) => theme.spacing.dividerW};
  height: ${({ theme }) => theme.spacing.dividerH};
  background: ${({ theme }) => theme.colors.gold};
  margin: 0 auto ${({ theme }) => theme.spacing.xl} auto;
`;

const HeroDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  max-width: 64rem;
  margin: 0 auto;
  line-height: 1.7;
`;

const PhaseSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: ${({ theme }) => theme.colors.background};
`;

const PhaseContainer = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PhaseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const PhaseGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  align-items: center;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const PhaseImageBox = styled.div<{ even: boolean }>`
  position: relative;
  aspect-ratio: 4/3;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  order: ${({ even }) => (even ? 1 : 2)};
`;

const PhaseImage = styled(ImageWithFallback)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PhaseBgAccent = styled.div<{ even: boolean }>`
  position: absolute;
  bottom: -2rem;
  ${({ even }) => (even ? "right: -2rem;" : "left: -2rem;")}
  width: 16rem;
  height: 16rem;
  background: ${({ even }) => (even ? "rgba(212,175,55,0.05)" : "rgba(10,22,40,0.05)")};
  border-radius: ${({ theme }) => theme.radii.lg};
  z-index: 0;
`;

const PhaseContent = styled.div<{ even: boolean }>`
  order: ${({ even }) => (even ? 2 : 1)};
`;

const PhaseIconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const PhaseIconBox = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: ${({ theme }) => theme.gradients.hero};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhasePeriod = styled.div`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.pill};
  background: ${({ theme }) => theme.colors.goldAccent};
  border-radius: ${({ theme }) => theme.radii.full};
`;

const PhasePeriodText = styled.span`
  color: ${({ theme }) => theme.colors.gold};
  letter-spacing: 0.05em;
`;

const PhaseTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PhaseDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PhaseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const PhaseDetailRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const PhaseDetailDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radii.full};
  margin-top: ${({ theme }) => theme.spacing.xs};
  flex-shrink: 0;
`;

const PhaseDetailText = styled.span`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const FutureSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: ${({ theme }) => theme.colors.accent};
`;

const FutureContainer = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FutureHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const FutureIconRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const FutureIconBox = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.gradients.hero};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FutureTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FutureDivider = styled.div`
  width: ${({ theme }) => theme.spacing.dividerW};
  height: ${({ theme }) => theme.spacing.dividerH};
  background: ${({ theme }) => theme.colors.gold};
  margin: 0 auto ${({ theme }) => theme.spacing.lg} auto;
`;

const FutureCardGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FutureCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;

const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const CTAContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CTADesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.7;
`;

const CTAButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const CTAButton = styled.button<{ primary?: boolean }>`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border: ${({ primary, theme }) => (primary ? "none" : `2px solid ${theme.colors.white}`)};
  background: ${({ primary, theme }) => (primary ? theme.colors.gold : "transparent")};
  color: ${({ primary, theme }) => (primary ? theme.colors.primary : theme.colors.white)};
  &:hover {
    background: ${({ primary, theme }) => (primary ? theme.colors.goldAccentHover : theme.colors.accent)};
    color: ${({ primary, theme }) => (primary ? theme.colors.white : theme.colors.white)};
  }
`;

export function ProjectsPage() {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroContent>
          <HeroTag>
            <HeroTagText>Development Roadmap</HeroTagText>
          </HeroTag>
          <HeroTitle>Projects & Developments</HeroTitle>
          <HeroDivider />
          <HeroDesc>
            Explore the comprehensive phases of APOZ development, from infrastructure groundwork to residential communities, commercial zones, and industrial facilities designed for the future.
          </HeroDesc>
        </HeroContent>
      </HeroSection>
      <PhaseSection>
        <PhaseContainer>
          <PhaseList>
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const even = index % 2 === 0;
              return (
                <PhaseGrid key={index}>
                  <PhaseImageBox even={even}>
                    <PhaseImage src={phase.image} alt={phase.title} />
                    <PhaseBgAccent even={even} />
                  </PhaseImageBox>
                  <PhaseContent even={even}>
                    <PhaseIconRow>
                      <PhaseIconBox>
                        <PhaseIcon as={Icon} />
                      </PhaseIconBox>
                      <PhasePeriod>
                        <PhasePeriodText>{phase.period}</PhasePeriodText>
                      </PhasePeriod>
                    </PhaseIconRow>
                    <PhaseTitle>{phase.title}</PhaseTitle>
                    <PhaseDesc>{phase.description}</PhaseDesc>
                    <PhaseDetails>
                      {phase.details.map((detail, idx) => (
                        <PhaseDetailRow key={idx}>
                          <PhaseDetailDot />
                          <PhaseDetailText>{detail}</PhaseDetailText>
                        </PhaseDetailRow>
                      ))}
                    </PhaseDetails>
                  </PhaseContent>
                </PhaseGrid>
              );
            })}
          </PhaseList>
        </PhaseContainer>
      </PhaseSection>
      <FutureSection>
        <FutureContainer>
          <FutureHeader>
            <FutureIconRow>
                <FutureIconBox>
                  <TrendingUpIcon />
                </FutureIconBox>
            </FutureIconRow>
            <FutureTitle>Future Build-Out & Expansion</FutureTitle>
            <FutureDivider />
          </FutureHeader>
          <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
            <FutureCardGrid>
              <FutureCard>
                <h3>Technology Integration</h3>
                <p>Smart city infrastructure, IoT connectivity, and digital services to enhance quality of life and business efficiency.</p>
              </FutureCard>
              <FutureCard>
                <h3>Green Innovation</h3>
                <p>Renewable energy installations, sustainable transportation, and environmental conservation initiatives.</p>
              </FutureCard>
              <FutureCard>
                <h3>Education & Training</h3>
                <p>Workforce development centers, technical training facilities, and educational partnerships.</p>
              </FutureCard>
              <FutureCard>
                <h3>Community Services</h3>
                <p>Healthcare facilities, cultural centers, recreational amenities, and social infrastructure.</p>
              </FutureCard>
            </FutureCardGrid>
          </div>
        </FutureContainer>
      </FutureSection>
      <CTASection>
        <CTAContainer>
          <CTATitle>Ready to Get Involved?</CTATitle>
          <CTADesc>
            Whether you're interested in residential investment, commercial opportunities, or industrial development, APOZ offers diverse pathways for participation in this transformative project.
          </CTADesc>
          <CTAButtonRow>
            <CTAButton primary>Contact Us</CTAButton>
            <CTAButton>Download Brochure</CTAButton>
          </CTAButtonRow>
        </CTAContainer>
      </CTASection>
    </PageWrapper>
  );
}
