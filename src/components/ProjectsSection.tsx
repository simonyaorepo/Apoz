import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import styled from "styled-components";

// Icon styled-components
const CalendarIcon = styled(Calendar)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ArrowRightIcon = styled(ArrowRight)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ArrowRightIconSpaced = styled(ArrowRightIcon)`
  margin-left: ${({ theme }) => theme.spacing.xs};
`;

const timeline = [
  {
    period: "Q2 2025",
    title: "Architectural Design Completion",
    description: "Completion of Phase 1.1 architectural design and submission of plans to Chambers County for approval.",
    status: "In Progress",
  },
  {
    period: "Q4 2025",
    title: "Construction Commencement",
    description: "Groundbreaking and commencement of construction following approval from Chambers County.",
    status: "Upcoming",
  },
  {
    period: "2026 and Beyond",
    title: "Development of Residential and Commercial Areas",
    description: "Ongoing development of residential communities, commercial zones, and industrial facilities.",
    status: "Planned",
  },
];

const projects = [
  {
    phase: "Phase 1",
    title: "Infrastructure & Site Preparation",
    description: "Foundation work including roads, utilities, and essential infrastructure to support future development phases.",
    status: "2025–2026",
    image: "https://images.unsplash.com/photo-1614366324821-cfa7713a5163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwZGV2ZWxvcG1lbnQlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0NjU4MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    phase: "Phase 2",
    title: "Residential Communities",
    description: "Family-friendly neighborhoods with modern homes starting at $188,000, parks, schools, and community facilities.",
    status: "Planned",
    image: "https://images.unsplash.com/photo-1747555094127-9a922d56a64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NDYyMTg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    phase: "Phase 3",
    title: "Commercial & Retail Zones",
    description: "Mixed-use developments featuring office spaces, retail centers, restaurants, and entertainment venues.",
    status: "Planned",
    image: "https://images.unsplash.com/photo-1692118459258-0b90b2b691fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NjU2MTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    phase: "Phase 4",
    title: "Industrial & Logistics Parks",
    description: "Free trade zone facilities with warehousing, manufacturing, and distribution capabilities for global commerce.",
    status: "Planned",
    image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbG9naXN0aWNzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2NDY1ODA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

interface ProjectsSectionProps {
  onNavigate: (page: string) => void;
}

const Section = styled.section`
  background: ${({ theme }) => theme.colors.background};
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

const TimelineGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  margin-bottom: 5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TimelineCard = styled.div<{ status: string }>`
  position: relative;
  background: ${({ theme }) => theme.gradients.feature};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.xl};
  border: 2px solid ${({ theme }) => theme.colors.grayBorder};
`;

const TimelineMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TimelinePeriod = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

const TimelineStatus = styled.span<{ status: string }>`
  margin-left: auto;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background: ${({ status }) =>
    status === "In Progress"
      ? "#e8f5e9"
      : status === "Upcoming"
      ? "#e3f2fd"
      : "#f5f5f5"};
  color: ${({ status }) =>
    status === "In Progress"
      ? "#388e3c"
      : status === "Upcoming"
      ? "#1976d2"
      : "#616161"};
`;

const TimelineTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
`;

const TimelineDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const PhasesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PhasesGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const PhaseCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: box-shadow 0.2s, border-color 0.2s;
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const PhaseImageBox = styled.div`
  aspect-ratio: 16/9;
  overflow: hidden;
`;

const PhaseImage = styled(ImageWithFallback)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  ${PhaseCard}:hover & {
    transform: scale(1.05);
  }
`;

const PhaseContent = styled.div`
  padding: 1.5rem;
`;

const PhaseMetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const PhaseMeta = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

const PhaseStatus = styled.span`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: #f5f5f5;
  color: #616161;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const PhaseTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
`;

const PhaseDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 1rem;
`;

const LearnMoreBtn = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const PartnershipCTA = styled.div`
  background: ${({ theme }) => theme.gradients.hero};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

const PartnershipTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PartnershipDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  max-width: 48rem;
  margin: 0 auto ${({ theme }) => theme.spacing.xl} auto;
`;

export function ProjectsSection({ onNavigate }: ProjectsSectionProps) {
  return (
    <Section>
      <Container>
        <Header>
          <Tag>Project Timeline</Tag>
          <Title>Development Roadmap</Title>
          <Subtitle>
            Our phased development approach ensures sustainable growth and delivers value at every stage of the APOZ master plan.
          </Subtitle>
        </Header>
        <TimelineGrid>
          {timeline.map((item, index) => (
            <TimelineCard key={index} status={item.status}>
              <TimelineMeta>
                <CalendarIcon />
                <TimelinePeriod>{item.period}</TimelinePeriod>
                <TimelineStatus status={item.status}>{item.status}</TimelineStatus>
              </TimelineMeta>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineDesc>{item.description}</TimelineDesc>
            </TimelineCard>
          ))}
        </TimelineGrid>
        <PhasesHeader>
          <Title as="h3">Development Phases</Title>
        </PhasesHeader>
        <PhasesGrid>
          {projects.map((project, index) => (
            <PhaseCard key={index}>
              <PhaseImageBox>
                <PhaseImage src={project.image} alt={project.title} />
              </PhaseImageBox>
              <PhaseContent>
                <PhaseMetaRow>
                  <PhaseMeta>{project.phase}</PhaseMeta>
                  <PhaseStatus>{project.status}</PhaseStatus>
                </PhaseMetaRow>
                <PhaseTitle>{project.title}</PhaseTitle>
                <PhaseDesc>{project.description}</PhaseDesc>
                <LearnMoreBtn>
                  Learn More
                  <ArrowRightIcon />
                </LearnMoreBtn>
              </PhaseContent>
            </PhaseCard>
          ))}
        </PhasesGrid>
        <PartnershipCTA>
          <PartnershipTitle>Partnership Opportunities</PartnershipTitle>
          <PartnershipDesc>
            Whether you're a developer, investor, or community leader, there's a place for you in the APOZ vision. Our projects are designed not just to build — but to transform. Contact us to learn about active bids, investment opportunities, or how to get involved in shaping the next chapter of APOZ.
          </PartnershipDesc>
          <Button onClick={() => onNavigate("contact")}> 
            Get Involved
            <ArrowRightIconSpaced />
          </Button>
        </PartnershipCTA>
      </Container>
    </Section>
  );
}

