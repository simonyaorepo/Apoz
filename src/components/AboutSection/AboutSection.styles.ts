import styled from "styled-components";

export const SectionWrapper = styled.div``;
export const Section = styled.section<{ bg?: string; pad?: string }>`
  background: ${({ bg, theme }) => bg || theme.colors.white};
  padding: ${({ pad, theme }) => pad || theme.spacing.section} 0;
`;
export const SectionContainer = styled.div<{ center?: boolean }>`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  ${({ center }) => center && 'text-align: center;'}
`;
export const IntroSection = styled(Section)`
  background: ${({ theme }) => theme.colors.white};
`;
export const IntroContainer = styled(SectionContainer)``;
export const IntroText = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;
`;
export const SectionImage = styled.img`
  width: 100%;
  aspect-ratio: ${({ theme }) => theme.aspect?.fourThree || '4/3'};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.card};
`;
export const SectionTextBlock = styled.div<{ leftBorder?: boolean; rightBorder?: boolean }>`
  position: relative;
  padding-left: ${({ leftBorder, theme }) => leftBorder ? theme.spacing.xxxl : 0};
  padding-right: ${({ rightBorder, theme }) => rightBorder ? theme.spacing.xxxl : 0};
  border-left: ${({ leftBorder, theme }) => leftBorder ? `2px solid ${theme.colors.goldAccent}` : 'none'};
  border-right: ${({ rightBorder, theme }) => rightBorder ? `2px solid ${theme.colors.goldAccent}` : 'none'};
`;
export const SectionTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;
export const SectionIcon = styled.div<{ bg: string }>`
  width: ${({ theme }) => theme.spacing.xxxl};
  height: ${({ theme }) => theme.spacing.xxxl};
  background: ${({ bg }) => bg};
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SectionTitle = styled.h2<{ color: string; center?: boolean }>`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: 0;
  text-align: ${({ center }) => center ? 'center' : 'left'};
`;
export const SectionText = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
export const SectionDivider = styled.div<{ color: string }>`
  width: ${({ theme }) => theme.spacing.xxl};
  height: ${({ theme }) => theme.spacing.dividerH};
  background: ${({ color }) => color};
  margin: 0 auto ${({ theme }) => theme.spacing.xxxl} auto;
`;
export const PillarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
`;
export const PillarCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.radii.card};
  border: 1px solid ${({ theme }) => theme.colors.grayBorder};
  transition: box-shadow 0.3s, border-color 0.3s;
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: ${({ theme }) => theme.colors.boxShadowGold};
  }
`;
export const PillarIcon = styled.div`
  width: ${({ theme }) => theme.spacing.xxxl};
  height: ${({ theme }) => theme.spacing.xxxl};
  background: ${({ theme }) => theme.gradients.hero};
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  transition: transform 0.3s;
  ${PillarCard}:hover & {
    transform: scale(1.1);
  }
`;
export const PillarTitle = styled.h3<{ color: string }>`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
export const PillarDesc = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSizes.h6};
`;
export const LeadershipCardWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.darkBlueAlt};
  padding: ${({ theme }) => theme.spacing.xxxl};
  border-radius: ${({ theme }) => theme.radii.card};
  border: 1px solid ${({ theme }) => theme.colors.gold}20;
`;
export const LeadershipText = styled.p<{ color: string; small?: boolean }>`
  color: ${({ color }) => color};
  font-size: ${({ small, theme }) => small ? theme.fontSizes.h6 : theme.fontSizes.lg};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
export const CTAButtonRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
`;
export const CTAButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xxxl}`};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition?.button || 'all 0.2s'};
  &.primary {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.darkBlue};
    border: none;
    &:hover {
      background: ${({ theme }) => theme.colors.goldAccentHover};
    }
  }
  &.secondary {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkBlue};
    border: 2px solid ${({ theme }) => theme.colors.darkBlue};
    &:hover {
      background: ${({ theme }) => theme.colors.darkBlue};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
