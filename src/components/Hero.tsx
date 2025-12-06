import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import styled, { useTheme } from "styled-components";

interface HeroProps {
  onNavigate: (page: string) => void;
}

// ...existing styled-components...

const HeroSection = styled.div`
  position: relative;
  min-height: 600px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
`;

const BgImage = styled.div<{ image: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.overlays.hero};
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.foreground};
`;

const Inner = styled.div`
  max-width: 48rem;
`;

const Tag = styled.div`
  margin-bottom: 1.5rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.accent};
  backdrop-filter: blur(4px);
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.05em;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  font-weight: 600;
`;

const Subtitle = styled.p`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  max-width: 40rem;
  line-height: 1.7;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.2);
`;

const StatTitle = styled.div`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const StatValue = styled.div`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const ArrowIcon = styled(ArrowRight)`
  margin-left: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.gold};
`;


export function Hero({ onNavigate }: HeroProps) {
  return (
    <HeroSection>
      <BgImage image="https://images.unsplash.com/photo-1764343875123-8d3f95a9a5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZSUyMHN1bnNldHxlbnwxfHx8fDE3NjQ2NTU1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
      <GradientOverlay />
      <Content>
        <Inner>
          <Tag>Building Tomorrow's Communities Today</Tag>
          <Title>Shaping the Future of Global Trade & Community Living</Title>
          <Subtitle>
            The Asia Pacific Opportunity Zone (APOZ) is more than just a development — it's a blueprint for sustainable economic growth and inclusive community building in Greater Houston. Strategically planned by ASC Global Inc., APOZ integrates residential, industrial, and commercial zones into a single, forward-looking ecosystem.
          </Subtitle>
          <ButtonRow>
            <Button onClick={() => onNavigate("contact")}>Invest Now <ArrowIcon size={20} /></Button>
            <Button onClick={() => onNavigate("projects")}>View Projects</Button>
          </ButtonRow>
          <StatsGrid>
            <div>
              <StatTitle>Homes Starting At</StatTitle>
              <StatValue>$188,000</StatValue>
            </div>
            <div>
              <StatTitle>Location</StatTitle>
              <StatValue>Greater Houston</StatValue>
            </div>
            <div>
              <StatTitle>Special Zone</StatTitle>
              <StatValue>Free Trade</StatValue>
            </div>
          </StatsGrid>
        </Inner>
      </Content>
    </HeroSection>
  );
}
