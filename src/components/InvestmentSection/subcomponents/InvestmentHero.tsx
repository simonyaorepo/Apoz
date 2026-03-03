import React from "react";
import { useTranslation } from 'react-i18next';
import PageHero from "../../PageHero";

const InvestmentHero: React.FC = () => {
  const { t } = useTranslation('investment');
  
  return (
    <PageHero
      title={t('hero.title', 'Investment Opportunities')}
      backgroundImage="/assets/images/investment/hero.png"
      breadcrumbs={[
        { label: t('nav.home', 'Home'), href: "/" },
        { label: t('hero.title', 'Investment Opportunities') }
      ]}
    />
  );
};

export default InvestmentHero;
