import React, { useState } from "react";
import TextHero from "../../TextHero";
import { MANAGEMENT_DATA } from "./homeSectionData";
import { LeaderCard } from "../../../components/LeadershipSection/subcomponents/LeaderCard";
import { teamMembers } from "../../../components/LeadershipSection/leadershipData";

interface ManagementSectionProps {
  onNavigate: (page: string) => void;
}

const ManagementSection: React.FC<ManagementSectionProps> = ({ onNavigate: _onNavigate }) => {
  const [expandedMembers, setExpandedMembers] = useState<Set<string>>(new Set());
  
  const toggleExpanded = (id: string) => {
    setExpandedMembers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
      <TextHero
        title={MANAGEMENT_DATA.title}
        backgroundImage={MANAGEMENT_DATA.backgroundImage}
        breadcrumbs={MANAGEMENT_DATA.breadcrumbs}
      />
      
      {teamMembers.map((member, index) => (
        <LeaderCard
          key={member.id}
          member={member}
          index={index}
          reverse={index % 2 === 1}
          expanded={expandedMembers.has(member.id)}
          onToggleExpanded={toggleExpanded}
        />
      ))}
    </>
  );
};

export default ManagementSection;
