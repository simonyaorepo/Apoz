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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxl} 5vw;
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
    padding: ${({ theme }) => theme.spacing.xl} 0;
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
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  margin: 0;
  max-width: 700px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
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

interface PreviewItem {
  id: string;
  title: string;
  description: string;
  route: string;
}

interface PreviewsComponentProps {
  items: PreviewItem[];
}

const PreviewsComponent: React.FC<PreviewsComponentProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        {items.map((item) => (
          <SectionItem key={item.id} onClick={() => navigate(item.route)}>
            <Content>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
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

export default PreviewsComponent;
