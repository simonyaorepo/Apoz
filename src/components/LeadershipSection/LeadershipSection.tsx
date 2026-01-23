import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { LeaderCard } from "./subcomponents/LeaderCard";
import type { TeamMember } from "./subcomponents/LeaderCard";

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

  const teamMembers: TeamMember[] = [
    {
      id: "david-champ",
      title: t('teamMembers.davidChamp.title'),
      name: t('teamMembers.davidChamp.name'),
      photo: "/assets/images/profilePictures/David_Champ.png",
      bio: [
        t('teamMembers.davidChamp.bio1'),
        t('teamMembers.davidChamp.bio2'),
        t('teamMembers.davidChamp.bio3')
      ]
    },
    {
      id: "eric-fang",
      title: t('teamMembers.ericFang.title'),
      name: t('teamMembers.ericFang.name'),
      photo: "/assets/images/profilePictures/Erif_Fang.png",
      bio: [
        t('teamMembers.ericFang.bio1'),
        t('teamMembers.ericFang.bio2'),
        t('teamMembers.ericFang.bio3')
      ]
    },
    {
      id: "bo-collins",
      title: t('teamMembers.boCollins.title'),
      name: t('teamMembers.boCollins.name'),
      photo: "/assets/images/profilePictures/James_Robert_Collins.png",
      bio: [
        t('teamMembers.boCollins.bio1'),
        t('teamMembers.boCollins.bio2')
      ]
    },
    {
      id: "trey-boring",
      title: t('teamMembers.treyBoring.title'),
      name: t('teamMembers.treyBoring.name'),
      photo: "/assets/images/profilePictures/Trey_W_Boring.jpg",
      bio: [
        t('teamMembers.treyBoring.bio1'),
        t('teamMembers.treyBoring.bio2')
      ]
    },
    {
      id: "kenar-liu",
      title: t('teamMembers.kenarLiu.title'),
      name: t('teamMembers.kenarLiu.name'),
      photo: "/assets/images/profilePictures/Kenar_Lu.png",
      bio: [
        t('teamMembers.kenarLiu.bio1'),
        t('teamMembers.kenarLiu.bio2'),
        t('teamMembers.kenarLiu.bio3')
      ]
    },
    {
      id: "tina-wise",
      title: t('teamMembers.tinaWise.title'),
      name: t('teamMembers.tinaWise.name'),
      photo: "/assets/images/profilePictures/Tina_Pei_Wise.png",
      bio: [
        t('teamMembers.tinaWise.bio1'),
        t('teamMembers.tinaWise.bio2')
      ]
    }
  ];

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
