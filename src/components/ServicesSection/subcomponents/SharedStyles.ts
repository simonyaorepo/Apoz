import styled from "styled-components";

export const WhiteSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  overflow-x: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  }
`;

export const GreySection = styled.section`
  background: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: end;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
    align-items: center;
  }
`;

export const GreyContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      line-height: 1.6;
    }
  }
`;

export const TealSection = styled.section`
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.white} 50%, ${({ theme }) => theme.colors.grey} 50%);
  padding: ${({ theme }) => theme.spacing.xl} 0;
  position: relative;
  z-index: 10;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

export const TealBox = styled.div`
  background: ${({ theme }) => theme.gradients.teal};
  padding: ${({ theme }) => theme.spacing.xl};
  width: 54%;
  max-width: 75%;
  
  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.6;
    margin: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 85%;
    max-width: 100%;
    padding: ${({ theme }) => theme.spacing.lg};
    
    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 95%;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const IllustrationBox = styled.div`
  width: 50vw;
  margin-right: calc(-50vw + 50%);
  margin-left: 0;
  margin-top: -50px;
  aspect-ratio: 20 / 5;
  min-height: 140px;
  max-height: 180px;
  background: ${({ theme }) => theme.colors.greyDark};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing.lg};
  flex-shrink: 0;
  position: relative;
  
  svg {
    width: 80%;
    height: auto;
    transform: translate(-10%, -60px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    margin: 0;
    max-height: 150px;
    padding: ${({ theme }) => theme.spacing.md};
    
    svg {
      width: 100%;
      transform: none;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-height: 120px;
    padding: ${({ theme }) => theme.spacing.sm};
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
    aspect-ratio: 16 / 9;
  }
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "•";
      color: ${({ theme }) => theme.colors.accent};
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    li {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
`;

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

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

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
