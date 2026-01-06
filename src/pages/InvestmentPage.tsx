import { useParams } from "react-router-dom";
import InvestmentSection from "../components/InvestmentSection/InvestmentSection";

interface InvestmentPageProps {
  onNavigate: (page: string) => void;
}

const InvestmentPage: React.FC<InvestmentPageProps> = ({ onNavigate }) => {
  const { section } = useParams<{ section?: string }>();
  return <InvestmentSection section={section} onNavigate={onNavigate} />;
};

export default InvestmentPage;
