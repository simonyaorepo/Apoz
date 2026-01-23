import React from "react";
import { useTranslation } from 'react-i18next';
import SummarySection from "../../ui/SummarySection";

const InvestmentSummary: React.FC = () => {
  const { t } = useTranslation('investment');
  const summaryText = `${t('overview.description')} ${t('summary.fullText')}`;
  return <SummarySection text={summaryText} />;
};

export default InvestmentSummary;
