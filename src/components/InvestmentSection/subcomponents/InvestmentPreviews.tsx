import React from "react";
import PreviewsComponent from "../../ui/PreviewsComponent";

const InvestmentPreviews: React.FC = () => {
  const investments = [
    {
      id: "overview",
      title: "Investment Overview",
      description: "Comprehensive investment structure, capital strategy, investor benefits (QOZ tax deferral + FTZ advantages), IRR potential (15-18% + 3-5% uplift), and exit pathways (REIT, Strategic Sale, IPO).",
      route: "/investment/overview"
    },
    {
      id: "infrastructure",
      title: "Infrastructure Investment",
      description: "Core infrastructure development across transportation, utilities, digital connectivity, FTZ facilities, residential amenities, and environmental systems. Phase 1 & 2 timeline with QOF, municipal, federal, and private funding sources.",
      route: "/investment/infrastructure"
    }
  ];

  return <PreviewsComponent items={investments} />;
};

export default InvestmentPreviews;
