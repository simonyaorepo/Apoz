import React from "react";
import { useTranslation } from 'react-i18next';
import PreviewsComponent from "../../ui/PreviewsComponent";

const PhasePreviews: React.FC = () => {
  const { t } = useTranslation('development');
  
  const phases = [
    {
      id: "phase1",
      title: t('previews.phase1_title'),
      description: t('previews.phase1_description'),
      route: "/development/phase1"
    },
    {
      id: "phase2",
      title: t('previews.phase2_title'),
      description: t('previews.phase2_description'),
      route: "/development/phase2"
    },
    {
      id: "phase3",
      title: t('previews.phase3_title'),
      description: t('previews.phase3_description'),
      route: "/development/phase3"
    }
  ];

  return <PreviewsComponent items={phases} />;
};

export default PhasePreviews;
