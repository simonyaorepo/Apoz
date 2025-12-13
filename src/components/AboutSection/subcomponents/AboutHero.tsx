import React from "react";

import Hero from "../../Hero";

interface AboutHeroProps {
  title?: string;
  paragraph?: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  title = "About Asia Pacific Opportunity Zone",
  paragraph = "The Asia Pacific Opportunity Zone (APOZ) is a strategic development integrating industrial, commercial, and residential infrastructure in Southeast Texas.",
}) => {
  return (
    <Hero
      backgroundImage="https://images.unsplash.com/photo-1758799073949-0547a39c12f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidXNpbmVzcyUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
      title={title}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      subtitle={paragraph}
    />
  );
};

export default AboutHero;
