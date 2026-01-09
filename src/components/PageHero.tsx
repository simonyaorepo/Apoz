import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: ${({ theme }) => theme.dimensions.heroMin};
  height: 60vh;
  max-height: ${({ theme }) => theme.dimensions.heroMax};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.darkBlue};
  margin-top: ${({ theme }) => theme.spacing.xxxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    min-height: ${({ theme }) => theme.dimensions.heroMinMd};
    height: 55vh;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: ${({ theme }) => theme.dimensions.heroMinSm};
    height: 50vh;
    margin-top: ${({ theme }) => theme.spacing.xxl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.dimensions.heroMinXs};
    height: 45vh;
    margin-top: ${({ theme }) => theme.spacing.xl};
  }
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  filter: contrast(1.02) saturate(1.05);
  image-rendering: -webkit-optimize-contrast;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    object-fit: cover;
    object-position: center center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 2;
`;

const ContentBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px);
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxxl};
  width: ${({ theme }) => theme.dimensions.contentBoxWidth};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints['2xl']}) {
    width: ${({ theme }) => theme.dimensions.contentBoxWidthMd};
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: ${({ theme }) => theme.dimensions.contentBoxWidthLg};
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    width: 85%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    width: 90%;
  }
`;

const Breadcrumb = styled.nav`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  letter-spacing: 0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  opacity: 0.8;
  
  a {
    color: ${({ theme }) => theme.colors.foreground};
    text-decoration: none;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 0.7;
    }
  }
  
  .separator {
    margin: 0 ${({ theme }) => theme.spacing.sm};
  }
  
  .current {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkBlue};
  line-height: 1.2;
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['1.75']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

interface PageHeroProps {
  title: string;
  backgroundImage: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  backgroundImage,
  breadcrumbs = [{ label: "Home", href: "/" }],
}) => {
  return (
    <HeroSection>
      <HeroImage src={backgroundImage} alt={title} fetchPriority="high" loading="eager" />
      <Overlay />
      <ContentBox>
        <Breadcrumb>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.href ? (
                <a href={crumb.href}>{crumb.label}</a>
              ) : (
                <span className="current">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span className="separator">›</span>}
            </React.Fragment>
          ))}
        </Breadcrumb>
        <Title>{title}</Title>
      </ContentBox>
    </HeroSection>
  );
};

export default PageHero;
