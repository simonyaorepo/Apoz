
import styled from "styled-components";

interface TimelineItem {
  period: string;
  label: string;
  description: string;
}

interface TimelineBarProps {
  items: TimelineItem[];
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.darkBlueAlt};
  padding: 4rem 0;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h4};
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

const Item = styled.div`
  text-align: center;
  position: relative;
`;

const NumberCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.goldAccent};
  border: 4px solid ${({ theme }) => theme.colors.darkBlueAlt};
  margin: 0 auto 24px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 20px;
`;

const Period = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Label = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: 15px;
`;

const TimelineBar: React.FC<TimelineBarProps> = ({ items }) => (
  <Wrapper>
    <Title>Project Timeline</Title>
    <Divider />
    <Grid>
      {items.map((item, index) => (
        <Item key={index}>
          <NumberCircle>{index + 1}</NumberCircle>
          <Period>{item.period}</Period>
          <Label>{item.label}</Label>
          <Description>{item.description}</Description>
        </Item>
      ))}
    </Grid>
  </Wrapper>
);

export default TimelineBar;
