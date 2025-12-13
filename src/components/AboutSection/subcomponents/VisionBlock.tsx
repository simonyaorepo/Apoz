
import React from "react";
import { useTheme } from "styled-components";
import { Eye } from "lucide-react";
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

const VisionBlock: React.FC = () => {
  const theme = useTheme();
  return (
    <Section bg={theme.colors.white}>
      <SectionContainer>
        <Grid>
          <SectionTextBlock rightBorder>
            <SectionTitleRow>
              <SectionIcon bg={theme.colors.goldAccent}><Eye size={32} color={theme.colors.darkBlueAlt} /></SectionIcon>
              <SectionTitle color={theme.colors.darkBlue}>Our Vision</SectionTitle>
            </SectionTitleRow>
            <SectionText color={theme.colors.darkBlue}>
              Our vision is to empower growth — not only for businesses but also for the communities they serve — by transforming underdeveloped land into high-value economic zones that support long-term prosperity and global collaboration.
            </SectionText>
            <SectionText color={theme.colors.grayAccent}>
              We envision APOZ as a beacon of opportunity, where international trade meets community development, and where sustainable practices create lasting value for generations to come.
            </SectionText>
          </SectionTextBlock>
          <SectionImage
            src="https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Vision"
          />
        </Grid>
      </SectionContainer>
    </Section>
  );
};

export default VisionBlock;
