import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Tag = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.foreground};
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

export const Grid = styled.div`
  display: grid;
  gap: 3rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InfoTitle = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const InfoCard = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const InfoIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const InfoLabel = styled.div`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 0.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const InfoText = styled.div`
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;
`;

export const OfficeHoursCard = styled.div`
  background: ${({ theme }) => theme.colors.gold};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.xl};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const OfficeHoursTitle = styled.div`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const OfficeHoursText = styled.div`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const FormTitle = styled.h3`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.md};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
  }
`;
