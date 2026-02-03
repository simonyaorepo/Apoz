import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 1.5rem;
  }
`;

export const GreyContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
`;
