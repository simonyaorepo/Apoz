import styled from "styled-components";

// Shared styled components for Phase sections to eliminate duplication

export const PhaseSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
`;

export const PhaseContentBlock = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  max-width: ${({ theme }) => theme.maxWidth.wide};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const PhaseImageWrapper = styled.div<{ $reverse?: boolean }>`
  order: ${({ $reverse }) => $reverse ? 2 : 1};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

export const PhaseImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;

export const PhaseTextContent = styled.div<{ $reverse?: boolean }>`
  order: ${({ $reverse }) => $reverse ? 1 : 2};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`;

export const PhaseTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.25;
`;

export const PhaseParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;
