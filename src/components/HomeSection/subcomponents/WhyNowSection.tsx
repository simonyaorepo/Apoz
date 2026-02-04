import { useTranslation } from 'react-i18next';
import styled from "styled-components";

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxl} 0;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const DataCard = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
`;

const DataTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const DataStat = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
`;

const DataDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const DataImpact = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.6;
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
