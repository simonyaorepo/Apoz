import React, { useState } from "react";
import { LeaderCard } from "./subcomponents/LeaderCard";
import { teamMembers } from "./leadershipData";

export const LeadershipSection: React.FC = () => {
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
