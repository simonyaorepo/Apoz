import React from "react";
import PageHero from "../../PageHero";

const ServicesHero: React.FC = () => (
  <PageHero
    backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
    title="Our Services"
    breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
  />
);

export default ServicesHero;
