import styled from "styled-components";

// Breakpoints
export const breakpoints = {
  mobile: '768px',
  tablet: '968px',
};

export const WhiteSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  }
`;

export const GreySection = styled.section`
  background: #f5f5f5;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  position: relative;
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const GreyContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: start;
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
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
  
  @media (max-width: ${breakpoints.mobile}) {
    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      line-height: 1.6;
    }
  }
`;

export const TealSection = styled.section`
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.white} 50%, #f5f5f5 50%);
  padding: ${({ theme }) => theme.spacing.xl} 0;
  position: relative;
  z-index: 10;
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

export const TealBox = styled.div`
  background: linear-gradient(135deg, #0a3a3f 0%, #0d4a50 100%);
  padding: ${({ theme }) => theme.spacing.xl};
  width: 54%;
  max-width: 75%;
  
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.6;
    margin: 0;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    width: 85%;
    max-width: 100%;
    padding: ${({ theme }) => theme.spacing.lg};
    
    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    width: 95%;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const IllustrationBox = styled.div`
  width: 45vw;
  margin-right: -50vw;
  margin-left: 0;
  aspect-ratio: 8 / 3;
  min-height: 120px;
  max-height: 180px;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  flex-shrink: 0;
  
  svg {
    width: 100%;
    max-width: 200px;
    height: auto;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin: 0;
    max-height: 150px;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  max-width: 65%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    aspect-ratio: 16 / 9;
  }
`;
