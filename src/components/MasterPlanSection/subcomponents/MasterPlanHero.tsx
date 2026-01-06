import React from "react";
import PageHero from "../../PageHero";

const MasterPlanHero: React.FC = () => (
  <PageHero
    backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
    title="Master Plan"
    breadcrumbs={[{ label: "Home", href: "/" }, { label: "Master Plan" }]}
  />
);

export default MasterPlanHero;
