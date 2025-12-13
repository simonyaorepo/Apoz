import React from "react";
import { useTheme } from "styled-components";
import { IntroSection as StyledIntroSection, IntroContainer, IntroText } from "../AboutSection.styles";

const IntroSection: React.FC = () => {
  const theme = useTheme();
  return (
    <StyledIntroSection>
      <IntroContainer>
        <IntroText color={theme.colors.darkBlue}>
          The Asia Pacific Opportunity Zone (APOZ) is a strategic development integrating industrial, commercial, and residential infrastructure in Southeast Texas.
        </IntroText>
        <IntroText color={theme.colors.grayAccent}>
          Spearheaded by ASC Global Inc., APOZ addresses the region's growing need for affordable housing, manufacturing space, and global trade connectivity.
        </IntroText>
      </IntroContainer>
    </StyledIntroSection>
  );
};

export default IntroSection;
