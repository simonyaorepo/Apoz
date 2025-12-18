import React from "react";
import OverviewSection from "./OverviewSection";

const Phase1Section: React.FC = () => {
  return (
    <OverviewSection
      title="Phase 1"
      overlayTitle="Infrastructure &"
      overlaySubtitle="Site Preparation"
      backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      breadcrumbLabel="Phase 1"
      content={[
        "The foundation of APOZ begins with Phase 1—a comprehensive infrastructure and site preparation initiative spanning 2025–2026. This critical phase establishes the physical groundwork for our master-planned development, ensuring that every subsequent phase is built upon a robust, future-ready foundation.",
        "Our infrastructure development includes the construction of essential roads, utilities, water systems, electrical grids, and telecommunications networks. These core systems are designed to support not only current development needs but also the scalable growth anticipated over the next decade. Every element is engineered with sustainability and efficiency at its core.",
        "Through strategic partnerships with local contractors and public agencies, APOZ ensures that our development aligns with regional infrastructure plans while creating immediate economic opportunities for Southeast Texas. Our approved master plan, submitted to Chambers County, reflects our commitment to responsible development that benefits both our project and the surrounding communities."
      ]}
      quote="Building the future starts with laying the right foundation—one that's sustainable, scalable, and designed for generations to come."
    />
  );
};

export default Phase1Section;
