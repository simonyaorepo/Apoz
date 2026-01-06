import { useParams } from "react-router-dom";
import MasterPlanSection from "../components/MasterPlanSection/MasterPlanSection";

interface MasterPlanPageProps {
  onNavigate: (page: string) => void;
}

export default function MasterPlanPage({ onNavigate }: MasterPlanPageProps) {
  const { section } = useParams<{ section?: string }>();
  return <MasterPlanSection section={section} onNavigate={onNavigate} />;
}
