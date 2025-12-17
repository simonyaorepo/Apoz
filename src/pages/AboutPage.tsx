
import { useParams } from "react-router-dom";
import AboutSection from "../components/AboutSection/AboutSection";


interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const { section } = useParams<{ section?: string }>();
  return <AboutSection onNavigate={onNavigate} section={section} />;
}
