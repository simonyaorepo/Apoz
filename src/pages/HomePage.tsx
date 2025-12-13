import React from "react";
import HomeSection from "../components/HomeSection/HomeSection";

interface HomePageProps {
  onNavigate: (page: string) => void;
}


const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return <HomeSection onNavigate={onNavigate} />;
};

export default HomePage;

