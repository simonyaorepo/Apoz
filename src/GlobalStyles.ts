import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamilies.body};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.foreground};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fontFamilies.heading};
    margin: 0;
    line-height: 1.2;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    
    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.h2};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    
    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.h3};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    
    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.h4};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.h4};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSizes.h5};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSizes.h6};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }

  p {
    font-family: ${({ theme }) => theme.fontFamilies.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.7;
    margin: 0 0 1rem 0;
  }

  a {
    font-family: ${({ theme }) => theme.fontFamilies.body};
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: ${({ theme }) => theme.fontFamilies.body};
  }

  input, textarea, select {
    font-family: ${({ theme }) => theme.fontFamilies.body};
  }

  strong, b {
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;

export default GlobalStyles;
