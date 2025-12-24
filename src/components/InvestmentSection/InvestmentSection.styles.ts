import styled from "styled-components";

export const Section = styled.section<{ $background?: string }>`
  background: ${({ $background, theme }) => 
    $background === "grey" ? theme.colors.grey : theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.foreground};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const SectionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.foreground};
`;
