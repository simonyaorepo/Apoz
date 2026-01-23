import React from "react";
import { useTranslation } from 'react-i18next';
import PageHero from "../../PageHero";

const ServicesHero: React.FC = () => {
  const { t } = useTranslation('services');
  
  return (
    <PageHero
      backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      title={t('overview.title')}
      breadcrumbs={[{ label: t('nav.home', 'Home'), href: "/" }, { label: t('overview.title') }]}
    />
  );
};

export default ServicesHero;
