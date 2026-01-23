import React from "react";
import { useTranslation } from 'react-i18next';
import SummarySection from "../../ui/SummarySection";

const MasterPlanSummary: React.FC = () => {
  const { t } = useTranslation('masterPlan');
  return <SummarySection text={t('summary.text')} />;
};

export default MasterPlanSummary;
