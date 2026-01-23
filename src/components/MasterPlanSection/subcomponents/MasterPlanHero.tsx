import React from "react";
import { useTranslation } from 'react-i18next';
import PageHero from "../../PageHero";

const MasterPlanHero: React.FC = () => {
  const { t } = useTranslation('masterPlan');
  
  return (
    <PageHero
      title={t('hero.title', 'Master Plan')}
      backgroundImage="/assets/images/masterPlan/hero.jpg"
      breadcrumbs={[
        { label: t('nav.home', 'Home'), href: "/" },
        { label: t('hero.title', 'Master Plan') }
      ]}
    />
  );
};

export default MasterPlanHero;
