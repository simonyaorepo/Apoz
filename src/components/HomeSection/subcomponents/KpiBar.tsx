
import styled from "styled-components";

interface KpiMetric {
  value: string;
  label: string;
}

interface KpiBarProps {
  metrics: KpiMetric[];
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.darkBlueAlt};
  padding: 4rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-left: 1px solid ${({ theme }) => theme.colors.goldAccent}20;
  border-right: 1px solid ${({ theme }) => theme.colors.goldAccent}20;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    border-left: none;
    border-right: none;
  }
`;

const Metric = styled.div<{ isLast: boolean }>`
  text-align: center;
  padding: 0 2rem;
  border-right: ${({ isLast, theme }) => isLast ? 'none' : `1px solid ${theme.colors.goldAccent}20`};
`;

const Value = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: 42px;
  margin-bottom: 8px;
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const KpiBar: React.FC<KpiBarProps> = ({ metrics }) => (
  <Wrapper>
    <Grid>
      {metrics.map((metric, index) => (
        <Metric key={index} isLast={index === metrics.length - 1}>
          <Value>{metric.value}</Value>
          <Label>{metric.label}</Label>
        </Metric>
      ))}
    </Grid>
  </Wrapper>
);

export default KpiBar;
