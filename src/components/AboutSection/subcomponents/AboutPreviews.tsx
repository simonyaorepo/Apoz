import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  background: ${({ theme }) => theme.gradients.tealOverlay},
    url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920') center/cover;
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: ${({ theme }) => theme.spacing.xxxl};
    left: 5vw;
    right: 5vw;
    height: 2px;
    background: ${({ theme }) => theme.colors.goldAccent};
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: ${({ theme }) => theme.spacing.xxxl};
    left: 5vw;
    right: 5vw;
    height: 2px;
    background: ${({ theme }) => theme.colors.goldAccent};
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.home};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.fast};
  
  &:hover {
    padding-left: ${({ theme }) => theme.spacing.md};
    
    .arrow-button {
      transform: translate(4px, -4px);
      background: rgba(255, 255, 255, 0.15);
    }
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: 0;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  margin: 0;
  max-width: 700px;
`;

const ArrowButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transition.fast};
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.white};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50px;
    height: 50px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

interface AboutPreviewsProps {
  onNavigate: (page: string) => void;
}

const AboutPreviews: React.FC<AboutPreviewsProps> = ({ onNavigate: _onNavigate }) => {
  const navigate = useNavigate();
  
  const sections = [
    {
      id: "mission",
      title: "Our Mission",
      description: "APOZ (Asia Pacific Opportunity Zone) is dedicated to creating a dynamic, sustainable, and innovation-driven industrial and residential community in Southeast Texas. By integrating smart infrastructure, green energy, and global partnerships, APOZ aims to become a hub for advanced manufacturing, international trade, and inclusive housing.",
      route: "/about/mission"
    },
    {
      id: "vision",
      title: "Our Vision",
      description: "Our vision is to empower growth — not only for businesses but also for the communities they serve — by transforming underdeveloped land into high-value economic zones that support long-term prosperity and global collaboration.",
      route: "/about/vision"
    },
    {
      id: "approach",
      title: "Our Approach",
      description: "From affordable housing to industrial parks, free trade zones, and sustainable development — APOZ delivers comprehensive infrastructure designed to attract investment and create lasting community value through strategic planning and execution.",
      route: "/about/approach"
    },
    {
      id: "partnership",
      title: "Our Partnership",
      description: "At the forefront of the APOZ initiative is ASC Global Inc., supported by collaboration with the International Trade Center – Houston, City of Houston leadership, and strategic partners from Asia Pacific and North America.",
      route: "/about/partnership"
    }
  ];

  return (
    <Section>
      <Container>
        {sections.map((section) => (
          <SectionItem key={section.id} onClick={() => navigate(section.route)}>
            <Content>
              <Title>{section.title}</Title>
              <Description>{section.description}</Description>
            </Content>
            <ArrowButton className="arrow-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </ArrowButton>
          </SectionItem>
        ))}
      </Container>
    </Section>
  );
};

export default AboutPreviews;
