import styled from "styled-components";

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
