import { useTranslation } from 'react-i18next';
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
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
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
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ projects, onNavigate }) => {
  const { t } = useTranslation('home');
  
  const projectTitles = [
    { title: t('projectPreviews.title1'), subtitle: t('projectPreviews.subtitle1') },
    { title: t('projectPreviews.title2'), subtitle: t('projectPreviews.subtitle2') },
    { title: t('projectPreviews.title3'), subtitle: t('projectPreviews.subtitle3') }
  ];
  
  return (
    <Wrapper>
      <Title>{t('projectPreviews.heading', 'Development Phases')}</Title>
      <Divider />
      <Grid>
        {projects.map((project, index) => (
          <PremiumCard
            key={index}
            image={project.image}
            title={projectTitles[index]?.title || project.title}
            subtitle={projectTitles[index]?.subtitle || project.subtitle}
            onClick={() => onNavigate('projects')}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default ProjectPreview;
