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
        ...PHASE_THREE_DATA.vision,
        ...PHASE_THREE_DATA.goals.map(goal => `${goal.title}: ${goal.description}`)
      ]}
      quote="The future of development is sustainable, intelligent, and community-driven. APOZ is building not just for today, but for the generations who will call this place home."
    />
  );
};

export default FutureSection;
