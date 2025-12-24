
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

const ValueProps: React.FC<ValuePropsProps> = ({ propsList }) => (
  <div>
    <SectionTitle>What Sets APOZ Apart</SectionTitle>
    <Divider />
    <Grid>
      {propsList.map((prop, index) => (
        <Card key={index}>
          <CardTitle>{prop.title}</CardTitle>
          <CardText>{prop.text}</CardText>
        </Card>
      ))}
    </Grid>
  </div>
);

export default ValueProps;
