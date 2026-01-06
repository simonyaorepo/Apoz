import React from "react";
import { useParams } from "react-router-dom";
import HomeSection from "../components/HomeSection/HomeSection";

interface HomePageProps {
  onNavigate: (page: string) => void;
}


const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { section } = useParams<{ section?: string }>();
  return <HomeSection onNavigate={onNavigate} section={section} />;
};

export default HomePage;

