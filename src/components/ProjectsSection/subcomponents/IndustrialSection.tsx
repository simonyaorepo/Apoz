import React from "react";
import OverviewSection from "./OverviewSection";
import { PHASE_ONE_DATA } from "./projectsSectionData";

const IndustrialSection: React.FC = () => {
  return (
    <OverviewSection
      title="Industrial & Logistics"
      overlayTitle="FTZ #171"
      overlaySubtitle="Manufacturing Hub"
      backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      breadcrumbLabel="Industrial & Logistics"
      content={[
        `APOZ's industrial and logistics parks represent the cornerstone of our economic development strategy. Strategically located near the Port of Houston (the #1 marine port in the U.S.) and positioned on Interstate I-10, our Foreign Trade Zone #171 offers unparalleled access to both domestic and international markets.`,
        `Our industrial parks at full buildout will feature ${PHASE_ONE_DATA.totals.industrial} of industrial space across ${PHASE_ONE_DATA.acreage}. This development is designed to accommodate advanced manufacturing, warehousing, distribution centers, logistics operations, and global trade facilities.`,
        "As the only FTZ + QOZ dual-status business park in the U.S., APOZ offers unprecedented tax benefits and operational advantages. Companies benefit from duty deferral, reduction opportunities, streamlined logistics, plus QOZ benefits including capital gains deferral and potential 100% exclusion after 10 years.",
        "We're actively attracting forward-thinking companies that recognize the strategic advantage of Southeast Texas as a gateway between Asian Pacific markets and North American industry. With electricity costs 29% cheaper than the national average, minimum wage of only $7.25/hour, and no city or state taxes, APOZ provides the competitive advantages modern manufacturing requires."
      ]}
      quote="Strategic location meets world-class infrastructure. APOZ is where global supply chains connect, manufacturing thrives, and international commerce flows efficiently."
    />
  );
};

export default IndustrialSection;
