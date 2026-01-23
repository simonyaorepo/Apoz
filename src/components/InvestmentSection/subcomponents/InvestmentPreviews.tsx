import React from "react";
import { useTranslation } from 'react-i18next';
import PreviewsComponent from "../../ui/PreviewsComponent";

const InvestmentPreviews: React.FC = () => {
  const { t } = useTranslation('investment');
  
  const investments = [
    {
      id: "overview",
      title: t('previews.overview.title'),
      description: t('previews.overview.description'),
      route: "/investment/overview"
    },
    {
      id: "infrastructure",
      title: t('previews.infrastructure.title'),
      description: t('previews.infrastructure.description'),
      route: "/investment/infrastructure"
    },
    {
      id: "industry-zone",
      title: t('previews.industryZone.title'),
      description: t('previews.industryZone.description'),
      route: "/investment/industry-zone"
    },
    {
      id: "residential-zone",
      title: t('previews.residentialZone.title'),
      description: t('previews.residentialZone.description'),
      route: "/investment/residential-zone"
    }
  ];

  return <PreviewsComponent items={investments} />;
};

export default InvestmentPreviews;
