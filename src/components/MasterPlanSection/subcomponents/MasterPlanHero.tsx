import React from "react";
import PageHero from "../../PageHero";

const MasterPlanHero: React.FC = () => (
  <PageHero
    title="Master Plan"
    backgroundImage="/assets/images/masterPlan/hero.jpg"
    breadcrumbs={[
      { label: "Home", href: "/" },
      { label: "Master Plan" }
    ]}
  />
);

export default MasterPlanHero;
