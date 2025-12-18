import { useParams } from "react-router-dom";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export function ProjectsPage({ onNavigate: _onNavigate }: ProjectsPageProps) {
  const { section } = useParams();
  return <ProjectsSection section={section} />;
}

export default ProjectsPage;
