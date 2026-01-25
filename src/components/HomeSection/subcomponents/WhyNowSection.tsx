import { useTranslation } from 'react-i18next';
import styled from "styled-components";

const Section = styled.section`
  background: ${({ theme }) => theme.gradients.tealOverlay};
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
  position: relative;
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxl} 5vw;
  }
`;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const DataCard = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: ${({ theme }) => theme.colors.goldAccent};
  }
`;

const DataTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const DataStat = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.goldAccent};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const DataDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const DataImpact = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.goldAccent};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.5;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const WhyNowSection: React.FC = () => {
  const { t } = useTranslation('home');
  
  return (
    <Section>
      <Container>
        <Title>{t('whyNow.title')}</Title>
        <DataGrid>
          <DataCard>
            <DataTitle>{t('whyNow.tariff_title')}</DataTitle>
            <DataStat>{t('whyNow.tariff_stat')}</DataStat>
            <DataDescription>{t('whyNow.tariff_description')}</DataDescription>
            <DataImpact>{t('whyNow.tariff_impact')}</DataImpact>
          </DataCard>

          <DataCard>
            <DataTitle>{t('whyNow.reshoring_title')}</DataTitle>
            <DataStat>{t('whyNow.reshoring_stat')}</DataStat>
            <DataDescription>{t('whyNow.reshoring_description')}</DataDescription>
            <DataImpact>{t('whyNow.reshoring_trend')}</DataImpact>
          </DataCard>

          <DataCard>
            <DataTitle>{t('whyNow.policy_title')}</DataTitle>
            <DataDescription>{t('whyNow.policy_description')}</DataDescription>
            <DataImpact>{t('whyNow.policy_benefit')}</DataImpact>
            <DataDescription style={{ marginTop: '1rem' }}>
              <strong>{t('whyNow.policy_timing')}</strong>
            </DataDescription>
          </DataCard>

          <DataCard>
            <DataTitle>{t('whyNow.window_title')}</DataTitle>
            <DataDescription>{t('whyNow.window_description')}</DataDescription>
            <DataImpact>{t('whyNow.window_urgency')}</DataImpact>
            <DataDescription style={{ marginTop: '1rem', fontWeight: 600 }}>
              {t('whyNow.window_action')}
            </DataDescription>
          </DataCard>
        </DataGrid>
      </Container>
    </Section>
  );
};

export default WhyNowSection;
