import styled from "styled-components";

export const WhiteSection = styled.section<{ $isFirst?: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xxxl} 0 0 0;
  
  ${({ $isFirst }) => $isFirst && `
    margin-top: 5rem;
    
    @media (max-width: 768px) {
      margin-top: 4rem;
    }
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const GreySection = styled.section<{ $index?: number }>`
  background: ${({ theme }) => theme.colors.grey};
  width: 100%;
  padding: 0;
  margin-top: 0;
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

export const Grid = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $reverse }) => $reverse ? '1fr minmax(250px, 250px)' : 'minmax(250px, 250px) 1fr'};
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const PhotoWrapper = styled.div<{ $reverse?: boolean }>`
  order: ${({ $reverse }) => $reverse ? 2 : 1};
  width: 250px;
  flex-shrink: 0;
  
  &.mobile-hide-photo {
    @media (max-width: 992px) {
      display: none !important;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }
`;

export const ContentWrapper = styled.div<{ $reverse?: boolean }>`
  order: ${({ $reverse }) => $reverse ? 1 : 2};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

export const GreyContentWrapper = styled(ContentWrapper)<{ $index?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  ${({ theme, $index }) => {
    if ($index === undefined) {
      return `padding: ${theme.spacing.xl} 0;`;
    }
    
    // Equal top and bottom padding for balanced spacing
    const verticalPadding = [
      theme.spacing.xl,  // David Champ - normal
      `calc(${theme.spacing.xl} + 2rem)`,  // Eric Fang - taller
      `calc(${theme.spacing.xl} - 0.5rem)`,  // Bo Collins - shorter
      `calc(${theme.spacing.xl} + 0.75rem)`,  // Trey Boring - slightly taller
      `calc(${theme.spacing.xl} + 1.5rem)`,  // Kenar Liu - taller
      `calc(${theme.spacing.xl} - 0.25rem)`,  // Tina Wise - shorter
    ];
    
    return `padding: ${verticalPadding[$index]} 0;`;
  }}
`;

export const LeaderTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.7;
`;

export const LeaderName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const LeaderBio = styled.div<{ $expanded: boolean; $index?: number }>`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ${({ $expanded, $index }) => {
    if ($expanded) return '';
    
    // Line clamp values that match the grey section heights
    const lineClamps = [
      3,  // David Champ - normal
      5,  // Eric Fang - much taller, show more text
      2,  // Bo Collins - shorter, show less text
      4,  // Trey Boring - slightly taller
      5,  // Kenar Liu - taller, show more text
      2,  // Tina Wise - shorter, show less text
    ];
    
    const clampValue = $index !== undefined ? lineClamps[$index] : 3;
    
    return `
      display: -webkit-box;
      -webkit-line-clamp: ${clampValue};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `;
  }}
`;

export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    opacity: 0.8;
  }
  
  &::after {
    content: '→';
    transition: transform 0.2s;
  }
  
  &:hover::after {
    transform: translateX(4px);
  }
`;
