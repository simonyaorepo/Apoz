import styled from "styled-components";
import { ArrowRight } from "lucide-react";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Tag = styled.div`
  color: ${({ theme }) => theme.colors.accentForeground};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 600;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  max-width: 40rem;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
`;

export const TimelineGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  margin-bottom: 5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PhasesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const PhasesGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PartnershipCTA = styled.div`
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

export const PartnershipTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const PartnershipDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  max-width: 48rem;
  margin: 0 auto ${({ theme }) => theme.spacing.xl} auto;
`;

export const ArrowRightIcon = styled(ArrowRight)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ArrowRightIconSpaced = styled(ArrowRightIcon)`
  margin-left: ${({ theme }) => theme.spacing.xs};
`;
