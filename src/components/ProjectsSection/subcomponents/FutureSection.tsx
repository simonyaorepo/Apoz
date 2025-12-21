import React from "react";
import OverviewSection from "./OverviewSection";
import { PHASE_THREE_DATA } from "./projectsSectionData";

const FutureSection: React.FC = () => {
  return (
    <OverviewSection
      title="Phase 3: Future Innovation"
      overlayTitle="Innovation &"
      overlaySubtitle="Sustainability"
      backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      breadcrumbLabel="Future Developments"
      content={[
        PHASE_THREE_DATA.description,
        `${PHASE_THREE_DATA.components[0].name}: ${PHASE_THREE_DATA.components[0].description}`,
        `${PHASE_THREE_DATA.components[1].name}: ${PHASE_THREE_DATA.components[1].description}`,
        `${PHASE_THREE_DATA.components[2].name}: ${PHASE_THREE_DATA.components[2].description} This isn't just development; it's investment in human potential and community prosperity."
      ]}
      quote="The future of development is sustainable, intelligent, and community-driven. APOZ is building not just for today, but for the generations who will call this place home."
    />
  );
};

export default FutureSection;
