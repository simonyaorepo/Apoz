import styled from "styled-components";

// Shared section wrapper
export const Section = styled.section<{ $altBackground?: boolean }>`
  padding: ${({ theme }) => theme.spacing.section} 5vw ${({ theme }) => theme.spacing.xxxl};
  background: ${({ theme, $altBackground }) => 
    $altBackground ? theme.colors.background : theme.colors.white};
`;

// Shared container
export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
`;

// Shared page title
export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

// Shared gold divider
export const GoldDivider = styled.div`
  width: ${({ theme }) => theme.spacing.dividerW};
  height: ${({ theme }) => theme.spacing.dividerH};
  background: ${({ theme }) => theme.colors.goldAccent};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

// Shared two-column content grid
export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

// Shared text block
export const TextBlock = styled.div`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
`;

// Shared paragraph
export const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

// Shared feature/card grid
export const CardGrid = styled.div<{ $minWidth?: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ $minWidth }) => $minWidth || '280px'}, 1fr));
  gap: ${({ theme }) => theme.spacing.card};
  margin-top: ${({ theme }) => theme.spacing.xxxl};
`;

// Shared feature card
export const FeatureCard = styled.div`
  padding: ${({ theme }) => theme.spacing.card};
  border: 1px solid ${({ theme }) => theme.colors.goldAccent};
  background: ${({ theme }) => theme.colors.background};
  transition: ${({ theme }) => theme.transition.fast};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.boxShadowGold};
    transform: translateY(-4px);
  }
`;

// Shared icon wrapper for emojis
export const IconWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// Shared card title
export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

// Shared card text
export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
`;

// Shared intro paragraph (larger text)
export const IntroText = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  max-width: 900px;
`;

// Shared button container
export const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxxl};
`;

// Shared highlight box
export const HighlightBox = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.darkBlue} 0%, rgba(10, 22, 40, 0.9) 100%);
  padding: ${({ theme }) => theme.spacing.xxxl};
  margin: ${({ theme }) => theme.spacing.xxxl} 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.goldAccent};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  }
`;

// Shared highlight text
export const HighlightText = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
`;
