import styled from "styled-components";

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

export const IntroTextContent = styled(TextContent)`
  margin-bottom: ${({ theme }) => theme.spacing.xxxl}; /* Extra space before grid sections */
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const IntroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacing.xxl} 0 ${({ theme }) => theme.spacing.lg};
  line-height: 1.25;
  
  &:first-child {
    margin-top: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
`;

export const SubsectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.25;
  
  &:first-child {
    margin-top: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h5};
  }
`;
