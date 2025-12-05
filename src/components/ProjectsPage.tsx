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
  max-width: 64rem;
  margin: 0 auto;
  line-height: 1.7;
`;

const PhaseSection = styled.section`
  padding: 6rem 0;
  background: #fff;
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
  background: linear-gradient(135deg, #0A1628 0%, #1a2942 100%);
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhasePeriod = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(212,175,55,0.10);
  border-radius: 999px;
`;

const PhasePeriodText = styled.span`
  color: #D4AF37;
  letter-spacing: 0.05em;
`;

const PhaseTitle = styled.h2`
  color: #0A1628;
  margin-bottom: 1.5rem;
`;

const PhaseDesc = styled.p`
  color: #333;
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
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
  background: #D4AF37;
  border-radius: 999px;
  margin-top: 0.5rem;
  flex-shrink: 0;
`;

const PhaseDetailText = styled.span`
  color: #666;
`;

const FutureSection = styled.section`
  padding: 6rem 0;
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
  background: linear-gradient(135deg, #0A1628 0%, #1a2942 100%);
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FutureTitle = styled.h2`
  color: #0A1628;
  margin-bottom: 1rem;
`;

const FutureDivider = styled.div`
  width: 4rem;
  height: 0.25rem;
  background: #D4AF37;
  margin: 0 auto 1.5rem auto;
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
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  color: #0A1628;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
`;

const CTASection = styled.section`
  padding: 6rem 0;
  background: #0A1628;
  color: #fff;
`;

const CTAContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  color: #fff;
  margin-bottom: 1.5rem;
`;

const CTADesc = styled.p`
  color: #b3b3b3;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const CTAButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const CTAButton = styled.button<{ primary?: boolean }>`
  padding: 2rem 3rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  border: ${({ primary }) => (primary ? "none" : "2px solid #fff")};
  background: ${({ primary }) => (primary ? "#D4AF37" : "transparent")};
  color: ${({ primary }) => (primary ? "#0A1628" : "#fff")};
  &:hover {
    background: ${({ primary }) => (primary ? "#AA8A2E" : "rgba(255,255,255,0.08)")};
    color: ${({ primary }) => (primary ? "#fff" : "#fff")};
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
                        <Icon size={28} color="#D4AF37" />
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
                <TrendingUp size={24} color="#D4AF37" />
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
