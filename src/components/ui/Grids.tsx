import styled from "styled-components";

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  max-width: ${({ theme }) => theme.maxWidth.wide};
  width: 100%;
  margin: 0 auto;
  padding: 0 5vw; /* Only horizontal padding - vertical spacing provided by parent section */
  align-items: center;
  box-sizing: border-box;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
    padding: 0 5vw;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    min-width: 0;
    
    > * {
      min-width: 0;
      max-width: 100%;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const GreyContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  max-width: ${({ theme }) => theme.maxWidth.wide};
  width: 100%;
  margin: 0 auto;
  padding: 0 5vw; /* Only horizontal padding - vertical spacing provided by parent section */
  align-items: center;
  box-sizing: border-box;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: 0 5vw;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    min-width: 0;
    
    > * {
      min-width: 0;
      max-width: 100%;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;
