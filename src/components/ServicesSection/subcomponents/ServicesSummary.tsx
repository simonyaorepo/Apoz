import React from "react";
import { useTranslation } from 'react-i18next';
import SummarySection from "../../ui/SummarySection";

const ServicesSummary: React.FC = () => {
  const { t } = useTranslation('services');
  return <SummarySection text={t('summary.text')} />;
};

export default ServicesSummary;
