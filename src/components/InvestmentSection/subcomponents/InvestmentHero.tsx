import React from "react";
import { useTranslation } from 'react-i18next';
import PageHero from "../../PageHero";

const InvestmentHero: React.FC = () => {
  const { t } = useTranslation('investment');
  
  return (
    <PageHero
      title={t('hero.title', 'Investment Opportunities')}
      backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      breadcrumbs={[
        { label: t('nav.home', 'Home'), href: "/" },
        { label: t('hero.title', 'Investment Opportunities') }
      ]}
    />
  );
};

export default InvestmentHero;
