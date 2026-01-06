import { useParams } from "react-router-dom";
import ServicesSection from "../components/ServicesSection/ServicesSection";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { section } = useParams<{ section?: string }>();
  return <ServicesSection section={section} onNavigate={onNavigate} />;
}
