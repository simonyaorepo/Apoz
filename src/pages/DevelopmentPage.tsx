import { useParams } from "react-router-dom";
import DevelopmentSection from "../components/DevelopmentSection/DevelopmentSection";

interface DevelopmentPageProps {
  onNavigate?: (page: string) => void;
}

export function DevelopmentPage({ onNavigate }: DevelopmentPageProps) {
  const { section } = useParams();
  return <DevelopmentSection section={section} onNavigate={onNavigate} />;
}

export default DevelopmentPage;

