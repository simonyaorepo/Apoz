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
    },
    {
      id: "industry-zone",
      title: "Industry Zone Investment",
      description: "Manufacturing and industrial facilities within FTZ framework. Advanced manufacturing, logistics operations, value-added processing, and international trade facilitation with customs and duty advantages.",
      route: "/investment/industry-zone"
    },
    {
      id: "residential-zone",
      title: "Residential Zone Investment",
      description: "Affordable housing development within QOZ framework. Mixed-income residential communities, workforce housing, and community amenities driving long-term appreciation and social impact.",
      route: "/investment/residential-zone"
    }
  ];

  return <PreviewsComponent items={investments} />;
};

export default InvestmentPreviews;
