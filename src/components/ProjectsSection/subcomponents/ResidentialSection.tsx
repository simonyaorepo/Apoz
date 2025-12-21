import React from "react";
import OverviewSection from "./OverviewSection";
import { PHASE_TWO_DATA } from "./projectsSectionData";

const ResidentialSection: React.FC = () => {
  return (
    <OverviewSection
      title="Phase 2: Residential Communities"
      overlayTitle={PHASE_TWO_DATA.acreage}
      overlaySubtitle="Residential"
      backgroundImage="https://images.unsplash.com/photo-1605146769289-440113cc3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      breadcrumbLabel="Residential"
      content={[
        `${PHASE_TWO_DATA.description} This phase includes ${PHASE_TWO_DATA.details.units} residential units designed to provide affordable housing for working families and industrial employees.`,
        `With homes starting at ${PHASE_TWO_DATA.details.salesPrice}, APOZ makes homeownership accessible while maintaining quality construction and sustainable design. Our residential development is projected to generate ${PHASE_TWO_DATA.projectedProfit} in gross profit.`,
        `Each neighborhood within APOZ is thoughtfully planned to include essential amenities such as parks, green spaces, walking trails, community centers, and proximity to schools and services. We believe that true community development goes beyond housing—it's about creating environments where families can thrive.`,
        "Our commitment to energy-efficient construction means every home is built with modern insulation, energy-saving appliances, and sustainable materials that reduce utility costs and environmental impact. Green space integration throughout our residential zones ensures that nature remains accessible, promoting health, wellness, and quality of life for all residents."
      ]}
      quote="Home is where community begins. At APOZ, we're building neighborhoods that foster connection, sustainability, and opportunity for every family."
    />
  );
};

export default ResidentialSection;
