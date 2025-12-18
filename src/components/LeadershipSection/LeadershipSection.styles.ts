import styled from "styled-components";

export const WhiteSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  padding-bottom: 0;
`;

export const GreySection = styled.section`
  background: ${({ theme }) => theme.colors.grey};
  width: 100%;
  padding: 0 0 ${({ theme }) => theme.spacing.xxxl} 0;
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

export const Grid = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-columns: ${({ reverse }) => reverse ? '1fr 250px' : '250px 1fr'};
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const PhotoWrapper = styled.div<{ reverse?: boolean }>`
  order: ${({ reverse }) => reverse ? 2 : 1};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
  }
`;

export const ContentWrapper = styled.div<{ reverse?: boolean }>`
  order: ${({ reverse }) => reverse ? 1 : 2};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
  }
`;

export const LeaderTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const LeaderName = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;
`;

export const LeaderBio = styled.div<{ expanded: boolean }>`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ${({ expanded }) => !expanded && `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
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
