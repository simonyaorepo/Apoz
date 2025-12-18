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

const ProjectPreviews: React.FC = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: "phase1",
      title: "Phase 1 – Infrastructure & Site Preparation (2025–2026)",
      description: "Roads, utilities, and core infrastructure underway. Partnerships with local contractors and public agencies. Approved master plan submitted to Chambers County.",
      route: "/projects/phase1"
    },
    {
      id: "residential",
      title: "Residential Communities",
      description: "Affordable homes starting at $188,000. Family-friendly neighborhoods with parks, schools, and services. Energy-efficient construction and green space integration.",
      route: "/projects/residential"
    },
    {
      id: "commercial",
      title: "Commercial & Retail Zones",
      description: "Mixed-use developments for retail, dining, and office space. Designed for walkability and local entrepreneurship. Leasing available for early tenants and investors.",
      route: "/projects/commercial"
    },
    {
      id: "industrial",
      title: "Industrial & Logistics Parks",
      description: "Strategically located near ports and major highways. Zoned for manufacturing, warehousing, and global trade. Attracting companies focused on U.S.–Asia supply chain efficiency.",
      route: "/projects/industrial"
    },
    {
      id: "future",
      title: "Future Developments",
      description: "Sustainability & Innovation District with smart city infrastructure, renewable energy, and tech incubators. Education & Workforce Development including trade schools and university partnerships.",
      route: "/projects/future"
    }
  ];

  return (
    <Section>
      <Container>
        {projects.map((project) => (
          <SectionItem key={project.id} onClick={() => navigate(project.route)}>
            <Content>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>
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

export default ProjectPreviews;
