import React from "react";
import PreviewsComponent from "../../ui/PreviewsComponent";

const MasterPlanPreviews: React.FC = () => {
  const masterPlan = [
    {
      id: "international-hub",
      title: "International Hub",
      description: "Global business gateway integrating FTZ operations with international partnerships. Trade facilitation, business services, cultural exchange, and cross-border collaboration platform.",
      route: "/master-plan/international-hub"
    },
    {
      id: "ftz-zone",
      title: "FTZ Zone",
      description: "Foreign Trade Zone with customs advantages, duty deferral, streamlined logistics, and regulatory flexibility. Supporting international manufacturing, distribution, and value-added operations.",
      route: "/master-plan/ftz-zone"
    },
    {
      id: "qof-zone",
      title: "QOF Zone",
      description: "Qualified Opportunity Fund structure enabling capital gains tax deferral and exclusion. Long-term investment vehicle targeting 10+ year hold periods with QOZ tax benefits and community impact.",
      route: "/master-plan/qof-zone"
    },
    {
      id: "qoz-zone",
      title: "QOZ Zone",
      description: "Qualified Opportunity Zone designation providing tax incentives for long-term investment. Capital gains deferral, basis step-up (10%), and permanent exclusion (10 years+) driving community development.",
      route: "/master-plan/qoz-zone"
    },
    {
      id: "industry-zone",
      title: "Industry Zone",
      description: "Manufacturing and industrial district leveraging FTZ advantages for international trade and production. Advanced manufacturing, logistics, and value-added processing facilities.",
      route: "/master-plan/industry-zone"
    },
    {
      id: "affordable-living-zone",
      title: "Affordable Living Zone",
      description: "Sustainable residential development providing workforce housing and community amenities. Mixed-income housing, green spaces, educational facilities, and social infrastructure.",
      route: "/master-plan/affordable-living-zone"
    }
  ];

  return <PreviewsComponent items={masterPlan} />;
};

export default MasterPlanPreviews;
