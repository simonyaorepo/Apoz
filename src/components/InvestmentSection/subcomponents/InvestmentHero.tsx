import React from "react";
import PageHero from "../../PageHero";

const InvestmentHero: React.FC = () => {
  return (
    <PageHero
      title="Investment Opportunities"
      backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Investment Opportunities" }
      ]}
    />
  );
};

export default InvestmentHero;
