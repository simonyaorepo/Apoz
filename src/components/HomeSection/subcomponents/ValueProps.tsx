import { useTranslation } from 'react-i18next';
import styled from "styled-components";

interface ValueProp {
  title: string;
  text: string;
}

interface ValuePropsProps {
  propsList: ValueProp[];
}

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  line-height: 1.25;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
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

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.radii.card};
  border: 1px solid ${({ theme }) => theme.colors.grayBorder};
  box-shadow: ${({ theme }) => theme.colors.boxShadowGold};
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  line-height: 1.6;
`;

const ValueProps: React.FC<ValuePropsProps> = ({ propsList: _propsList }) => {
  const { t } = useTranslation('home');
  
  const propKeys = ['tradeHub', 'infrastructure', 'affordable', 'sustainability', 'partnerships', 'investmentReady'];
  
  return (
    <div>
      <SectionTitle>{t('valueProps.sectionTitle', 'What Sets APOZ Apart')}</SectionTitle>
      <Divider />
      <Grid>
        {propKeys.map((key, index) => (
          <Card key={index}>
            <CardTitle>{t(`valueProps.${key}.title`)}</CardTitle>
            <CardText>{t(`valueProps.${key}.text`)}</CardText>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default ValueProps;
