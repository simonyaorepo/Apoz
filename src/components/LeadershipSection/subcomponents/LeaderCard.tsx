import React from "react";
import { LeaderPhoto } from "./LeaderPhoto";
import {
  WhiteSection,
  GreySection,
  Container,
  Grid,
  PhotoWrapper,
  ContentWrapper,
  GreyContentWrapper,
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
  index: number;
  reverse: boolean;
  expanded: boolean;
  onToggleExpanded: (id: string) => void;
}

export const LeaderCard: React.FC<LeaderCardProps> = ({
  member,
  index,
  reverse,
  expanded,
  onToggleExpanded,
}) => {
  return (
    <React.Fragment>
      <WhiteSection $isFirst={index === 0}>
        <Container>
          <Grid $reverse={reverse}>
            <PhotoWrapper $reverse={reverse}>
              <LeaderPhoto photo={member.photo} name={member.name} half="top" mobile="full" />
            </PhotoWrapper>
            <ContentWrapper $reverse={reverse}>
              <LeaderTitle>{member.title}</LeaderTitle>
              <LeaderName>{member.name}</LeaderName>
            </ContentWrapper>
          </Grid>
        </Container>
      </WhiteSection>
      
      <GreySection $index={index}>
        <Container>
          <Grid $reverse={reverse}>
            <PhotoWrapper $reverse={reverse} className="mobile-hide-photo">
              <LeaderPhoto photo={member.photo} name={member.name} half="bottom" />
            </PhotoWrapper>
            <GreyContentWrapper $reverse={reverse} $index={index}>
              <LeaderBio $expanded={expanded} $index={index}>
                {member.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </LeaderBio>
              <ReadMoreButton onClick={() => onToggleExpanded(member.id)}>
                {expanded ? 'READ LESS' : 'READ MORE'}
              </ReadMoreButton>
            </GreyContentWrapper>
          </Grid>
        </Container>
      </GreySection>
    </React.Fragment>
  );
};
