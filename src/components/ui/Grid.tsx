import styled from "styled-components";

// Reusable responsive grid components

interface ResponsiveGridProps {
  $columns?: number;
  $gap?: string;
}

/**
 * ResponsiveGrid - Responsive grid that adjusts columns based on breakpoints
 * @param $columns - Number of columns on desktop (default: 3)
 * @param $gap - Gap between grid items (default: theme.spacing.lg)
 * 
 * Automatically adjusts to:
 * - Desktop (lg+): specified number of columns
 * - Tablet (md-lg): min(columns, 2) columns
 * - Mobile (< md): 1 column
 */
export const ResponsiveGrid = styled.div<ResponsiveGridProps>`
  display: grid;
  grid-template-columns: repeat(${({ $columns = 3 }) => $columns}, 1fr);
  gap: ${({ theme, $gap }) => $gap || theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(${({ $columns = 3 }) => Math.min($columns, 2)}, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

interface AutoGridProps {
  $minWidth?: string;
  $gap?: string;
}

/**
 * AutoGrid - Truly responsive grid using auto-fit
 * @param $minWidth - Minimum width of grid items (default: 280px)
 * @param $gap - Gap between grid items (default: theme.spacing.lg)
 * 
 * Automatically fits as many columns as possible based on container width
 * No media queries needed - pure CSS grid magic!
 */
export const AutoGrid = styled.div<AutoGridProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ $minWidth }) => $minWidth || '280px'}, 1fr));
  gap: ${({ theme, $gap }) => $gap || theme.spacing.lg};
`;

/**
 * TwoColumnGrid - Simple two-column layout that stacks on mobile
 */
export const TwoColumnGrid = styled.div<{ $gap?: string; $reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme, $gap }) => $gap || theme.spacing.xl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  
  ${({ $reverse, theme }) => $reverse && `
    > :first-child {
      order: 2;
    }
    > :last-child {
      order: 1;
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      > :first-child {
        order: 1;
      }
      > :last-child {
        order: 2;
      }
    }
  `}
`;
