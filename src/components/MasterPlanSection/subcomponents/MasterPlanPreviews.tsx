import React from "react";
import { useTranslation } from 'react-i18next';
import PreviewsComponent from "../../ui/PreviewsComponent";

const MasterPlanPreviews: React.FC = () => {
  const { t } = useTranslation('masterPlan');
  
  const masterPlan = [
    {
      id: "international-hub",
      title: t('previews.internationalHub.title'),
      description: t('previews.internationalHub.description'),
      route: "/master-plan/international-hub"
    },
    {
      id: "ftz-zone",
      title: t('previews.ftzZone.title'),
      description: t('previews.ftzZone.description'),
      route: "/master-plan/ftz-zone"
    },
    {
      id: "qof-zone",
      title: t('previews.qofZone.title'),
      description: t('previews.qofZone.description'),
      route: "/master-plan/qof-zone"
    },
    {
      id: "qoz-zone",
      title: t('previews.qozZone.title'),
      description: t('previews.qozZone.description'),
      route: "/master-plan/qoz-zone"
    },
    {
      id: "industry-zone",
      title: t('previews.industryZone.title'),
      description: t('previews.industryZone.description'),
      route: "/master-plan/industry-zone"
    },
    {
      id: "affordable-living-zone",
      title: t('previews.affordableLivingZone.title'),
      description: t('previews.affordableLivingZone.description'),
      route: "/master-plan/affordable-living-zone"
    }
  ];

  return <PreviewsComponent items={masterPlan} />;
};

export default MasterPlanPreviews;
