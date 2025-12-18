import React from "react";
import OverviewSection from "./OverviewSection";

const IndustrialSection: React.FC = () => {
  return (
    <OverviewSection
      title="Industrial & Logistics"
      overlayTitle="Global Trade"
      overlaySubtitle="Manufacturing Hub"
      backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      breadcrumbLabel="Industrial & Logistics"
      content={[
        "APOZ's industrial and logistics parks represent the cornerstone of our economic development strategy. Strategically located near major ports, highways, and transportation corridors, our industrial zones offer unparalleled access to both domestic and international markets. This positioning makes APOZ an ideal location for companies seeking to optimize their U.S.–Asia supply chain operations.",
        "Our industrial parks are zoned and designed to accommodate a diverse range of operations including advanced manufacturing, warehousing, distribution centers, logistics operations, and global trade facilities. With modern infrastructure, flexible lot sizes, and build-to-suit opportunities, we can support operations of all scales—from emerging manufacturers to Fortune 500 corporations.",
        "We're actively attracting forward-thinking companies that recognize the strategic advantage of Southeast Texas as a gateway between Asian Pacific markets and North American industry. APOZ offers the land, infrastructure, workforce access, and regulatory support that modern manufacturing and logistics operations require. Our industrial zones are designed not just for today's needs, but for the next generation of global commerce."
      ]}
      quote="Strategic location meets world-class infrastructure. APOZ is where global supply chains connect, manufacturing thrives, and international commerce flows efficiently."
    />
  );
};

export default IndustrialSection;
