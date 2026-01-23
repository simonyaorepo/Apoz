import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import TextHero from "../../TextHero";
import { LeaderCard } from "../../../components/LeadershipSection/subcomponents/LeaderCard";
import type { TeamMember } from "../../../components/LeadershipSection/subcomponents/LeaderCard";

interface ManagementSectionProps {
  onNavigate: (page: string) => void;
}

const ManagementSection: React.FC<ManagementSectionProps> = ({ onNavigate: _onNavigate }) => {
  const { t } = useTranslation('home');
  const { t: tCommon } = useTranslation('common');
  const { t: tLeadership } = useTranslation('leadership');
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
      title: tLeadership('teamMembers.davidChamp.title'),
      name: tLeadership('teamMembers.davidChamp.name'),
      photo: "/assets/images/profilePictures/David_Champ.png",
      bio: [
        tLeadership('teamMembers.davidChamp.bio1'),
        tLeadership('teamMembers.davidChamp.bio2'),
        tLeadership('teamMembers.davidChamp.bio3')
      ]
    },
    {
      id: "eric-fang",
      title: tLeadership('teamMembers.ericFang.title'),
      name: tLeadership('teamMembers.ericFang.name'),
      photo: "/assets/images/profilePictures/Erif_Fang.png",
      bio: [
        tLeadership('teamMembers.ericFang.bio1'),
        tLeadership('teamMembers.ericFang.bio2'),
        tLeadership('teamMembers.ericFang.bio3')
      ]
    },
    {
      id: "bo-collins",
      title: tLeadership('teamMembers.boCollins.title'),
      name: tLeadership('teamMembers.boCollins.name'),
      photo: "/assets/images/profilePictures/James_Robert_Collins.png",
      bio: [
        tLeadership('teamMembers.boCollins.bio1'),
        tLeadership('teamMembers.boCollins.bio2')
      ]
    },
    {
      id: "trey-boring",
      title: tLeadership('teamMembers.treyBoring.title'),
      name: tLeadership('teamMembers.treyBoring.name'),
      photo: "/assets/images/profilePictures/Trey_W_Boring.jpg",
      bio: [
        tLeadership('teamMembers.treyBoring.bio1'),
        tLeadership('teamMembers.treyBoring.bio2')
      ]
    },
    {
      id: "kenar-liu",
      title: tLeadership('teamMembers.kenarLiu.title'),
      name: tLeadership('teamMembers.kenarLiu.name'),
      photo: "/assets/images/profilePictures/Kenar_Lu.png",
      bio: [
        tLeadership('teamMembers.kenarLiu.bio1'),
        tLeadership('teamMembers.kenarLiu.bio2'),
        tLeadership('teamMembers.kenarLiu.bio3')
      ]
    },
    {
      id: "tina-wise",
      title: tLeadership('teamMembers.tinaWise.title'),
      name: tLeadership('teamMembers.tinaWise.name'),
      photo: "/assets/images/profilePictures/Tina_Pei_Wise.png",
      bio: [
        tLeadership('teamMembers.tinaWise.bio1'),
        tLeadership('teamMembers.tinaWise.bio2')
      ]
    }
  ];

  return (
    <>
      <TextHero
        title={t('management.title')}
        backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: tCommon('breadcrumbs.home'), href: '/' },
          { label: t('management.title') }
        ]}
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
