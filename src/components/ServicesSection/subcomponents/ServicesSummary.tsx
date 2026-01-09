import React from "react";
import SummarySection from "../../ui/SummarySection";
import { SERVICES_OVERVIEW_DATA } from "../servicesSectionData";

const SUMMARY_TEXT = `APOZ (Asia Pacific Opportunity Zone) is a one-stop business and investment hub in Winnie, Texas, integrating industrial, residential, and trade services. Our comprehensive service portfolio spans industrial park development, Foreign Trade Zone operations, Qualified Opportunity Zone investment access, and affordable workforce housing. We deliver specialized trade logistics, customs facilitation, and tenant support services that enable efficient global supply chain operations while ensuring seamless access to regulatory compliance and tax incentives.`;

const ServicesSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default ServicesSummary;
