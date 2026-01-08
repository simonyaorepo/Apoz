import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const BorderCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const OutlineCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
