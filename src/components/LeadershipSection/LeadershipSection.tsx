import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { LeaderCard } from "./subcomponents/LeaderCard";
import type { TeamMember } from "./subcomponents/LeaderCard";
import { LEADERSHIP_METADATA } from "./leadershipMetadata";

export const LeadershipSection: React.FC = () => {
  const { t } = useTranslation('leadership');
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

  const teamMemberIds = ["david-champ", "eric-fang", "bo-collins", "trey-boring", "kenar-liu", "tina-wise"];
  const bioCountMap: Record<string, number> = {
    "david-champ": 3,
    "eric-fang": 3,
    "bo-collins": 2,
    "trey-boring": 2,
    "kenar-liu": 3,
    "tina-wise": 2
  };

  const teamMembers: TeamMember[] = teamMemberIds.map(memberId => {
    const metadata = LEADERSHIP_METADATA[memberId];
    const memberKey = memberId.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    
    const bioCount = bioCountMap[memberId];
    const bio = Array.from({ length: bioCount }, (_, i) => 
      t(`teamMembers.${memberKey}.bio${i + 1}`)
    );

    return {
      id: metadata.id,
      title: t(`teamMembers.${memberKey}.title`),
      name: t(`teamMembers.${memberKey}.name`),
      photo: metadata.photo,
      bio
    };
  });

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
