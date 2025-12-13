import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import styled, { useTheme } from "styled-components";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface HeroProps {
  backgroundImage: string;
  breadcrumbs?: Breadcrumb[];
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
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


export default function Hero({ backgroundImage, breadcrumbs, title, subtitle, children }: HeroProps) {
  return (
    <HeroSection>
      <BgImage image={backgroundImage} />
      <GradientOverlay />
      <Content>
        <Inner>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
              <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0, color: '#fff', fontSize: '1rem', opacity: 0.9 }}>
                {breadcrumbs.map((crumb, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                    {crumb.href ? (
                      <a href={crumb.href} style={{ color: '#fff', textDecoration: 'underline', opacity: 0.9 }}>{crumb.label}</a>
                    ) : (
                      <span style={{ color: '#fff', opacity: 0.9 }}>{crumb.label}</span>
                    )}
                    {idx < breadcrumbs.length - 1 && <span style={{ margin: '0 0.5rem' }}>&gt;</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <Title style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>{title}</Title>
          {subtitle && <Subtitle style={{ color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.12)' }}>{subtitle}</Subtitle>}
          {children}
        </Inner>
      </Content>
    </HeroSection>
  );
}
