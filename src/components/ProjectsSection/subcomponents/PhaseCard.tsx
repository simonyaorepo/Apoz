import styled from "styled-components";

interface PhaseCardProps {
  phase: string;
  title: string;
  description: string;
  status: string;
  image: string;
}

const PhaseCardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  overflow: hidden;
  margin-bottom: 2rem;
`;

const PhaseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: ${({ theme }) => theme.radii.xl};
  border-top-right-radius: ${({ theme }) => theme.radii.xl};
`;

const PhaseContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const PhaseTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const PhaseDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PhaseStatus = styled.span`
  display: inline-block;
  padding: 0.25em 0.75em;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.grayBorder};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, title, description, status, image }) => (
  <PhaseCardWrapper>
    <PhaseImage src={image} alt={title} />
    <PhaseContent>
      <PhaseTitle>{phase}: {title}</PhaseTitle>
      <PhaseDesc>{description}</PhaseDesc>
      <PhaseStatus>{status}</PhaseStatus>
    </PhaseContent>
  </PhaseCardWrapper>
);

export default PhaseCard;
