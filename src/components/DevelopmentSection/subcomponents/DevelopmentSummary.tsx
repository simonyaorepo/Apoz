import React from "react";
import { useTranslation } from "react-i18next";
import SummarySection from "../../ui/SummarySection";

const DevelopmentSummary: React.FC = () => {
  const { t } = useTranslation('development');
  
  return <SummarySection text={t('summary.text')} />;
};

export default DevelopmentSummary;
