import React from "react";
import PageHero from "../components/PageHero";
import { LeadershipSection } from "../components/LeadershipSection/LeadershipSection";

interface LeadershipPageProps {
  onNavigate: (page: string) => void;
}

const LeadershipPage: React.FC<LeadershipPageProps> = () => {
  return (
    <>
      <PageHero
        title="Leadership"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Leadership" }
        ]}
      />
      
      <LeadershipSection />
    </>
  );
};

export default LeadershipPage;
