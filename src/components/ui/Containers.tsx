import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 1.5rem;
  }
`;

export const GreyContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
`;
