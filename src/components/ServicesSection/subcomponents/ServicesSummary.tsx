import React from "react";
import SummarySection from "../../ui/SummarySection";
import { SERVICES_OVERVIEW_DATA } from "../servicesSectionData";

const SUMMARY_TEXT = `${SERVICES_OVERVIEW_DATA.content.intro[0]}

Our core service offerings include ${SERVICES_OVERVIEW_DATA.content.coreServices.map(s => s.title).join(', ')}, providing comprehensive support for industrial operations and workforce development.

We deliver specialized ${SERVICES_OVERVIEW_DATA.content.tradeLogistics.heading.toLowerCase()} encompassing ${SERVICES_OVERVIEW_DATA.content.tradeLogistics.services.map(s => s.title).join(', ')}, enabling efficient global supply chain operations.

For our tenants and partners, we provide ${SERVICES_OVERVIEW_DATA.content.tenantServices.services.slice(0, 2).join(', ')}, along with ${SERVICES_OVERVIEW_DATA.content.tenantServices.services[2]} and ${SERVICES_OVERVIEW_DATA.content.tenantServices.services[3]}, ensuring seamless operations and access to maximum incentives.`;

const ServicesSummary: React.FC = () => {
  return <SummarySection text={SUMMARY_TEXT} />;
};

export default ServicesSummary;
