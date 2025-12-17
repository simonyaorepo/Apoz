import React from "react";
import { LeaderPhoto } from "./LeaderPhoto";
import {
  WhiteSection,
  GreySection,
  Container,
  Grid,
  PhotoWrapper,
  ContentWrapper,
  LeaderTitle,
  LeaderName,
  LeaderBio,
  ReadMoreButton,
} from "../LeadershipSection.styles";

export interface TeamMember {
  id: string;
  title: string;
  name: string;
  photo: string;
  bio: string[];
}

interface LeaderCardProps {
  member: TeamMember;
  reverse: boolean;
  expanded: boolean;
  onToggleExpanded: (id: string) => void;
}

export const LeaderCard: React.FC<LeaderCardProps> = ({
  member,
  reverse,
  expanded,
  onToggleExpanded,
}) => {
  return (
    <React.Fragment>
      <WhiteSection>
        <Container>
          <Grid reverse={reverse}>
            <PhotoWrapper reverse={reverse}>
              <LeaderPhoto photo={member.photo} name={member.name} half="top" />
            </PhotoWrapper>
            <ContentWrapper reverse={reverse}>
              <LeaderTitle>{member.title}</LeaderTitle>
              <LeaderName>{member.name}</LeaderName>
            </ContentWrapper>
          </Grid>
        </Container>
      </WhiteSection>
      
      <GreySection>
        <Container>
          <Grid reverse={reverse}>
            <PhotoWrapper reverse={reverse}>
              <LeaderPhoto photo={member.photo} name={member.name} half="bottom" />
            </PhotoWrapper>
            <ContentWrapper reverse={reverse}>
              <LeaderBio expanded={expanded}>
                {member.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </LeaderBio>
              <ReadMoreButton onClick={() => onToggleExpanded(member.id)}>
                {expanded ? 'READ LESS' : 'READ MORE'}
              </ReadMoreButton>
            </ContentWrapper>
          </Grid>
        </Container>
      </GreySection>
    </React.Fragment>
  );
};
