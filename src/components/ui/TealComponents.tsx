import styled from "styled-components";

export const TealTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const TealSubtitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const TealText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: white;
  opacity: 0.95;
  line-height: 1.7;
  margin: 0;
  
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const TealContentBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;
