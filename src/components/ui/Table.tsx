import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  thead {
    background: ${({ theme }) => theme.colors.primary};
    
    tr th {
      color: ${({ theme }) => theme.colors.white};
      text-align: left;
      padding: ${({ theme }) => theme.spacing.md};
      font-weight: ${({ theme }) => theme.fontWeights.semibold};
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
  
  tbody {
    tr {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
      
      &:last-child {
        border-bottom: none;
      }
      
      &:hover {
        background: ${({ theme }) => theme.colors.backgroundAlt};
      }
      
      td {
        padding: ${({ theme }) => theme.spacing.md};
        color: ${({ theme }) => theme.colors.foreground};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        vertical-align: top;
        
        &:first-child {
          font-weight: ${({ theme }) => theme.fontWeights.medium};
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    thead tr th,
    tbody tr td {
      padding: ${({ theme }) => theme.spacing.sm};
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;
