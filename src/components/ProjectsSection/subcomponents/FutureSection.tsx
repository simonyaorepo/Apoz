import React from "react";
import OverviewSection from "./OverviewSection";

const FutureSection: React.FC = () => {
  return (
    <OverviewSection
      title="Future Developments"
      overlayTitle="Innovation &"
      overlaySubtitle="Sustainability"
      backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      breadcrumbLabel="Future Developments"
      content={[
        "Looking beyond our current development phases, APOZ is planning transformative future projects that will position our community at the forefront of sustainable development and technological innovation. Our Sustainability & Innovation District will showcase what's possible when environmental responsibility meets cutting-edge technology.",
        "This future district will feature smart city infrastructure including IoT-enabled utilities, intelligent traffic management, and data-driven resource optimization. Renewable energy integration—through solar arrays, wind generation, and energy storage systems—will reduce our carbon footprint while demonstrating the economic viability of clean energy. Tech incubators and co-working hubs will attract startups, innovators, and forward-thinking companies, creating a dynamic ecosystem of creativity and entrepreneurship.",
        "Education and workforce development are central to APOZ's long-term vision. We're planning partnerships with local universities, technical colleges, and training centers to create workforce pipelines directly aligned with the industries we're attracting. Trade schools will offer specialized training in advanced manufacturing, logistics, renewable energy, and technology—ensuring that our local community has access to the high-quality jobs our development creates. This isn't just development; it's investment in human potential and community prosperity."
      ]}
      quote="The future of development is sustainable, intelligent, and community-driven. APOZ is building not just for today, but for the generations who will call this place home."
    />
  );
};

export default FutureSection;
