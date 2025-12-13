
import AboutSection from "../components/AboutSection/AboutSection";


interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return <AboutSection onNavigate={onNavigate} />;
}
