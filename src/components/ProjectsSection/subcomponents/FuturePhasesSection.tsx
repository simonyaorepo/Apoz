import styled, { useTheme } from "styled-components";

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

export interface FuturePhase {
  title: string;
  description: string;
}

const DEFAULT_PHASES: FuturePhase[] = [
  {
    title: "Technology Integration",
    description:
      "Smart city infrastructure, IoT connectivity, and digital services to enhance quality of life and business efficiency.",
  },
  {
    title: "Green Innovation",
    description:
      "Renewable energy installations, sustainable transportation, and environmental conservation initiatives.",
  },
  {
    title: "Education & Training",
    description:
      "Workforce development centers, technical training facilities, and educational partnerships.",
  },
  {
    title: "Community Services",
    description:
      "Healthcare facilities, cultural centers, recreational amenities, and social infrastructure.",
  },
];

const FuturePhasesSection: React.FC<{ phases?: FuturePhase[] }> = ({ phases = DEFAULT_PHASES }) => {
  const theme = useTheme();
  return (
    <FutureSection>
      <div style={{ maxWidth: '1320px', margin: "0 auto", padding: "0 1.5rem" }}>
        <FutureTitle>Future Phases</FutureTitle>
        <FutureBar />
        <FutureGrid>
          {phases.map((phase, idx) => (
            <FutureCard key={idx}>
              <FutureCardTitle>{phase.title}</FutureCardTitle>
              <FutureCardDesc>{phase.description}</FutureCardDesc>
            </FutureCard>
          ))}
        </FutureGrid>
      </div>
    </FutureSection>
  );
};

export default FuturePhasesSection;
