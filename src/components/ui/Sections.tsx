import styled from "styled-components";

export const WhiteSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  overflow-x: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  }
`;

export const GreySection = styled.section`
  background: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  }
`;

export const TealSection = styled.section`
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.white} 50%, ${({ theme }) => theme.colors.grey} 50%);
  padding: ${({ theme }) => theme.spacing.xl} 0;
  position: relative;
  z-index: 10;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

export const TealBox = styled.div`
  background: ${({ theme }) => theme.gradients.teal};
  padding: ${({ theme }) => theme.spacing.xl};
  width: 54%;
  max-width: 75%;
  
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.6;
    margin: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 85%;
    max-width: 100%;
    padding: ${({ theme }) => theme.spacing.lg};
    
    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 95%;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;
