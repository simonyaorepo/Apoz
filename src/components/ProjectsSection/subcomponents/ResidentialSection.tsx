import React from "react";
import OverviewSection from "./OverviewSection";

const ResidentialSection: React.FC = () => {
  return (
    <OverviewSection
      title="Residential Communities"
      overlayTitle="Building"
      overlaySubtitle="Affordable Homes"
      backgroundImage="https://images.unsplash.com/photo-1605146769289-440113cc3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      breadcrumbLabel="Residential"
      content={[
        "APOZ is committed to creating inclusive, family-friendly residential communities that make homeownership accessible to working families across Southeast Texas. With affordable homes starting at $188,000, our residential developments provide quality housing without compromising on design, comfort, or sustainability.",
        "Each neighborhood within APOZ is thoughtfully planned to include essential amenities such as parks, green spaces, walking trails, community centers, and proximity to schools and services. We believe that true community development goes beyond housing—it's about creating environments where families can thrive, children can grow safely, and neighbors can build lasting connections.",
        "Our commitment to energy-efficient construction means every home is built with modern insulation, energy-saving appliances, and sustainable materials that reduce utility costs and environmental impact. Green space integration throughout our residential zones ensures that nature remains accessible, promoting health, wellness, and quality of life for all residents."
      ]}
      quote="Home is where community begins. At APOZ, we're building neighborhoods that foster connection, sustainability, and opportunity for every family."
    />
  );
};

export default ResidentialSection;
