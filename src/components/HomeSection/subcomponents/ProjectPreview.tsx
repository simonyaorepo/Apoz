
import styled from "styled-components";
import { PremiumCard } from "../../PremiumCard";

interface ProjectPreviewItem {
  title: string;
  subtitle: string;
  image: string;
}

interface ProjectPreviewProps {
  projects: ProjectPreviewItem[];
  onNavigate: (page: string) => void;
}

const Wrapper = styled.div``;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const Divider = styled.div`
  width: 96px;
  height: 4px;
  background: ${({ theme }) => theme.colors.goldAccent};
  margin: 0 auto 64px auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ projects, onNavigate }) => (
  <Wrapper>
    <Title>Development Phases</Title>
    <Divider />
    <Grid>
      {projects.map((project, index) => (
        <PremiumCard
          key={index}
          image={project.image}
          title={project.title}
          subtitle={project.subtitle}
          onClick={() => onNavigate('projects')}
        />
      ))}
    </Grid>
  </Wrapper>
);

export default ProjectPreview;
