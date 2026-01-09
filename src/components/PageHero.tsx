import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 550px;
  height: 60vh;
  max-height: 750px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.darkBlue};
  margin-top: 5rem;
  
  @media (max-width: 1024px) {
    min-height: 500px;
    height: 55vh;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 400px;
    height: 50vh;
    margin-top: 4rem;
  }
  
  @media (max-width: 480px) {
    min-height: 350px;
    height: 45vh;
    margin-top: 3.5rem;
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
  width: 580px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: 1200px) {
    width: 520px;
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
  }
  
  @media (max-width: 992px) {
    width: 480px;
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
  }
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    width: 85%;
  }
  
  @media (max-width: 480px) {
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
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.goldAccent};
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
  letter-spacing: 0;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
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
