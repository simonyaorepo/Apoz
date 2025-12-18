import React from "react";
import OverviewSection from "./OverviewSection";

const CommercialSection: React.FC = () => {
  return (
    <OverviewSection
      title="Commercial & Retail"
      overlayTitle="Vibrant"
      overlaySubtitle="Business Districts"
      backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      breadcrumbLabel="Commercial & Retail"
      content={[
        "APOZ's commercial and retail zones are designed as vibrant mixed-use developments that bring together retail, dining, office space, and community gathering areas. These strategically planned districts create economic hubs that serve both residents and the broader regional community, fostering local entrepreneurship and attracting national brands.",
        "Walkability is at the heart of our commercial design philosophy. Wide sidewalks, pedestrian plazas, outdoor seating areas, and thoughtful landscaping create inviting environments where people naturally want to gather, shop, dine, and conduct business. Our commercial zones are built for human connection, not just transactions.",
        "We're actively seeking early tenants and investors who share our vision for sustainable, community-centered commerce. Leasing opportunities are available for retail shops, restaurants, professional offices, service providers, and innovative businesses looking to establish themselves in one of Southeast Texas's fastest-growing economic zones. APOZ offers the infrastructure, foot traffic, and strategic location that businesses need to thrive."
      ]}
      quote="Commerce thrives where communities gather. Our retail and business districts are designed to spark entrepreneurship, support local economy, and create lasting value."
    />
  );
};

export default CommercialSection;
