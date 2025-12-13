
import React from "react";
import { Award, Target, Users, TrendingUp, Leaf, Eye } from "lucide-react";
import { useTheme } from "styled-components";
import {
  Section,
  SectionTitle,
  SectionDivider,
  PillarGrid,
  PillarCard,
  PillarIcon,
  PillarTitle,
  PillarDesc
} from "../AboutSection.styles";

const CORE_PILLARS = [
  { icon: Award, title: "Affordable Housing", description: "High-quality homes starting at $188,000 to support working families" },
  { icon: Target, title: "Industrial Parks", description: "State-of-the-art facilities for manufacturing, warehousing, and distribution" },
  { icon: Users, title: "Commercial Development", description: "Mixed-use zones with retail, dining, and essential services" },
  { icon: TrendingUp, title: "Free Trade Zone Integration", description: "Ideal for global logistics, export/import, and business incentives" },
  { icon: Leaf, title: "Sustainability Focus", description: "Thoughtfully planned green spaces and long-term environmental resilience" },
  { icon: Eye, title: "Global Partnerships", description: "Collaboration with international trade organizations and local government" },
];

const CorePillars: React.FC = () => {
  const theme = useTheme();
  return (
    <Section bg={theme.colors.backgroundAlt}>
      <SectionTitle color={theme.colors.darkBlue} center>Core Pillars</SectionTitle>
      <SectionDivider color={theme.colors.gold} />
      <PillarGrid>
        {CORE_PILLARS.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <PillarCard key={index}>
              <PillarIcon><Icon size={32} color={theme.colors.goldAccent} /></PillarIcon>
              <PillarTitle color={theme.colors.darkBlue}>{pillar.title}</PillarTitle>
              <PillarDesc color={theme.colors.mutedForeground}>{pillar.description}</PillarDesc>
            </PillarCard>
          );
        })}
      </PillarGrid>
    </Section>
  );
};

export default CorePillars;
