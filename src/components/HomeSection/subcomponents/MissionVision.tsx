
import { useTranslation } from 'react-i18next';
import styled from "styled-components";

const Wrapper = styled.div``;

const Section = styled.div<{ bg?: string }>`
  background: ${({ bg }) => bg || "none"};
  padding: 4rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.card};
`;

const MissionText = styled.div`
  padding-left: 48px;
  border-left: 2px solid ${({ theme }) => theme.colors.goldAccent};
`;

const VisionText = styled.div`
  padding-right: 48px;
  border-right: 2px solid ${({ theme }) => theme.colors.goldAccent};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.25;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: 20px;
  margin-bottom: 24px;
`;

const MissionVision: React.FC = () => {
  const { t } = useTranslation('home');
  
  return (
  <Wrapper>
    {/* Mission */}
    <Section style={{ background: '#fff' }}>
      <Grid>
        <Img src="https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Mission" />
        <MissionText>
          <Title>{t('mission.title')}</Title>
          <Paragraph>
            {t('mission.paragraph1')}
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            {t('mission.paragraph2')}
          </Paragraph>
        </MissionText>
      </Grid>
    </Section>
    {/* Vision */}
    <Section>
      <Grid>
        <VisionText>
          <Title>{t('vision.title')}</Title>
          <Paragraph style={{ marginBottom: 0 }}>
            {t('vision.paragraph')}
          </Paragraph>
        </VisionText>
        <Img src="https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Vision" />
      </Grid>
    </Section>
  </Wrapper>
  );
};

export default MissionVision;
