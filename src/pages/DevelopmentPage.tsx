import { useParams } from "react-router-dom";
import DevelopmentSection from "../components/DevelopmentSection/DevelopmentSection";

export function DevelopmentPage() {
  const { section } = useParams();
  return <DevelopmentSection section={section} />;
}

export default DevelopmentPage;

