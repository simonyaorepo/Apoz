

import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  return <ProjectsSection onNavigate={onNavigate} />;
}

export default ProjectsPage;
