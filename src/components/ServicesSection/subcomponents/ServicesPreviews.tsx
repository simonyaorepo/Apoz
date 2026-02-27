import React from "react";
import { useTranslation } from 'react-i18next';
import PreviewsComponent from "../../ui/PreviewsComponent";

const ServicesPreviews: React.FC = () => {
  const { t } = useTranslation('services');
  
  const services = [
    {
      id: "overview",
      title: t('previews.overview_title'),
      description: t('previews.overview_description'),
      route: "/services/overview"
    },
    {
      id: "community",
      title: t('previews.community_title'),
      description: t('previews.community_description'),
      route: "/services/community-management"
    },
    {
      id: "industry",
      title: t('previews.industry_title'),
      description: t('previews.industry_description'),
      route: "/services/industry-zone-management"
    },
    {
      id: "residential",
      title: t('previews.residential_title'),
      description: t('previews.residential_description'),
      route: "/services/residential-management"
    }
  ];

  return <PreviewsComponent items={services} />;
};

export default ServicesPreviews;
