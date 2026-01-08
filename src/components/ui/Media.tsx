import styled from "styled-components";

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
