import React from "react";
import PageHero from "../../PageHero";

const AboutHero: React.FC = () => {
  return (
    <PageHero
      title="About Us"
      backgroundImage="https://images.unsplash.com/photo-1758799073949-0547a39c12f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Us" }
      ]}
    />
  );
};

export default AboutHero;
