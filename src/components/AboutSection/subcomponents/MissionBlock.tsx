
import React from "react";
import { useTheme } from "styled-components";
import { Target } from "lucide-react";
import {
  Section,
  SectionContainer,
  Grid,
  SectionImage,
  SectionTextBlock,
  SectionTitleRow,
  SectionIcon,
  SectionTitle,
  SectionText
} from "../AboutSection.styles";

const MissionBlock: React.FC = () => {
  const theme = useTheme();
  return (
    <Section bg={theme.colors.backgroundAlt}>
      <SectionContainer>
        <Grid>
          <SectionImage
            src="https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mission"
          />
          <SectionTextBlock leftBorder>
            <SectionTitleRow>
              <SectionIcon bg={theme.colors.goldAccent}><Target size={32} color={theme.colors.darkBlueAlt} /></SectionIcon>
              <SectionTitle color={theme.colors.darkBlue}>Our Mission</SectionTitle>
            </SectionTitleRow>
            <SectionText color={theme.colors.darkBlue}>
              APOZ is dedicated to creating a dynamic, sustainable, and innovation-driven industrial and residential community in Southeast Texas.
            </SectionText>
            <SectionText color={theme.colors.darkBlue}>
              By integrating smart infrastructure, green energy, and global partnerships, APOZ aims to become a hub for advanced manufacturing, international trade, and inclusive housing.
            </SectionText>
            <SectionText color={theme.colors.grayAccent}>
              Our commitment extends beyond development — we're building ecosystems where businesses thrive, families flourish, and communities grow stronger through strategic planning and sustainable practices.
            </SectionText>
          </SectionTextBlock>
        </Grid>
      </SectionContainer>
    </Section>
  );
};

export default MissionBlock;
