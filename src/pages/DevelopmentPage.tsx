import { useParams } from "react-router-dom";
import DevelopmentSection from "../components/DevelopmentSection/DevelopmentSection";

interface DevelopmentPageProps {
  onNavigate: (page: string) => void;
}

export function DevelopmentPage({ onNavigate: _onNavigate }: DevelopmentPageProps) {
  const { section } = useParams();
  return <DevelopmentSection section={section} />;
}

export default DevelopmentPage;
