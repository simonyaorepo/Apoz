import styled from "styled-components";

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  max-width: ${({ theme }) => theme.maxWidth.home};
  width: 100%;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  box-sizing: border-box;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
    align-items: center;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    min-width: 0;
    
    > * {
      min-width: 0;
      max-width: 100%;
    }
  }
`;

export const GreyContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  max-width: ${({ theme }) => theme.maxWidth.home};
  width: 100%;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  box-sizing: border-box;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    min-width: 0;
    
    > * {
      min-width: 0;
      max-width: 100%;
    }
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
