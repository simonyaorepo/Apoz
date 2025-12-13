
import React from "react";
import { useTheme } from "styled-components";
import { LeadershipCardWrapper, LeadershipText } from "../AboutSection.styles";

const LeadershipCard: React.FC = () => {
  const theme = useTheme();
  return (
    <LeadershipCardWrapper>
      <LeadershipText color={theme.colors.white}>
        APOZ is developed by ASC Global Inc., a subsidiary of Token Communities Ltd. (OTC: TKCM), bringing together decades of experience in international development, trade facilitation, and community planning.
      </LeadershipText>
      <LeadershipText color={theme.colors.mutedForeground} small>
        Our leadership team combines expertise in real estate development, international trade, sustainable infrastructure, and community engagement to deliver a project that sets new standards for integrated development in Southeast Texas.
      </LeadershipText>
    </LeadershipCardWrapper>
  );
};

export default LeadershipCard;
