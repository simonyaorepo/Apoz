import styled from "styled-components";

interface TimelineCardProps {
  period: string;
  title: string;
  description: string;
  status: string;
}

const TimelineCardWrapper = styled.div<{ status: string }>`
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
  background: ${({ status, theme }) =>
    status === "In Progress"
      ? theme.colors.statusInProgressBg || "#e8f5e9"
      : status === "Upcoming"
      ? theme.colors.statusUpcomingBg || "#e3f2fd"
      : theme.colors.statusDefaultBg || "#f5f5f5"};
  color: ${({ status, theme }) =>
    status === "In Progress"
      ? theme.colors.statusInProgressText || "#388e3c"
      : status === "Upcoming"
      ? theme.colors.statusUpcomingText || "#1976d2"
      : theme.colors.statusDefaultText || "#616161"};
`;

const TimelineTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
`;

const TimelineDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const TimelineCard: React.FC<TimelineCardProps> = ({ period, title, description, status }) => (
  <TimelineCardWrapper status={status}>
    <TimelineMeta>
      <TimelinePeriod>{period}</TimelinePeriod>
      <TimelineStatus status={status}>{status}</TimelineStatus>
    </TimelineMeta>
    <TimelineTitle>{title}</TimelineTitle>
    <TimelineDesc>{description}</TimelineDesc>
  </TimelineCardWrapper>
);

export default TimelineCard;
