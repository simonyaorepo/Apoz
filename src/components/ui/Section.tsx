import styled from "styled-components";

interface SectionProps {
  $background?: 'white' | 'grey';
}

export const Section = styled.section<SectionProps>`
  background: ${({ theme, $background }) => 
    $background === 'grey' ? theme.colors.grey : theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxl} 5vw;
`;

export const Container = styled.div<{ $maxWidth?: string }>`
  max-width: ${({ $maxWidth }) => $maxWidth || '1200px'};
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;

export const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.foreground};
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxxl};
  line-height: 1.7;
`;
