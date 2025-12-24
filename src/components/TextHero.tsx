import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 350px;
  height: 45vh;
  max-height: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.darkBlue};
  
  @media (max-width: 768px) {
    min-height: 250px;
    height: 35vh;
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
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const ContentBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxxl};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  }
`;

const Breadcrumb = styled.nav`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  letter-spacing: 0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  opacity: 0.9;
  
  a {
    color: ${({ theme }) => theme.colors.white};
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
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.2;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.h2};
  }
`;

interface TextHeroProps {
  title: string;
  backgroundImage: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

const TextHero: React.FC<TextHeroProps> = ({
  title,
  backgroundImage,
  breadcrumbs = [{ label: "Home", href: "/" }],
}) => {
  return (
    <HeroSection>
      <HeroImage src={backgroundImage} alt={title} />
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

export default TextHero;
