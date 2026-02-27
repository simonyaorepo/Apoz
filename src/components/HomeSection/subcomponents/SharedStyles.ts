import styled from "styled-components";

// Home-specific components only
// Common components (WhiteSection, GreySection, Container, ContentGrid, etc.) 
// are now imported from ui folder

export const TealSection = styled.section`
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.white} 50%, ${({ theme }) => theme.colors.grey} 50%);
  position: relative;
  z-index: 10;
`;

export const TextContent = styled.div`
  p {
    color: ${({ theme }) => theme.colors.foreground};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.7;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      line-height: 1.6;
    }
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
