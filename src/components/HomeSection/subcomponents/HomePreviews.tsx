import React from "react";
import styled from "styled-components";
import GoldButton from "../../ui/GoldButton";

const Section = styled.section`
  background: linear-gradient(rgba(10, 40, 45, 0.85), rgba(10, 40, 45, 0.85)),
    url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80') center/cover;
  padding: 100px 5vw;
  
  @media (max-width: 768px) {
    padding: 60px 5vw;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Title = styled.h2`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
`;

const Divider = styled.div`
  width: 100%;
  max-width: 500px;
  height: 1px;
  background: ${({ theme }) => theme.colors.goldAccent};
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  margin: 0;
  max-width: 550px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavBoxItem = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.goldAccent};
  border-radius: 0;
  padding: 24px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;
  color: white;
  
  &:hover {
    background: rgba(201, 162, 77, 0.1);
    transform: translateX(4px);
  }
`;

const NavBoxLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Icon = styled.svg`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.goldAccent};
  stroke: currentColor;
  fill: none;
  stroke-width: 1.5;
  flex-shrink: 0;
`;

const NavTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 400;
`;

const Arrow = styled.svg`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.goldAccent};
  transition: transform 0.2s ease;
  flex-shrink: 0;
  
  ${NavBoxItem}:hover & {
    transform: translate(4px, -4px);
  }
`;

interface HomePreviewsProps {
  onNavigate: (page: string) => void;
}

const IconOverview = () => (
  <Icon viewBox="0 0 24 24">
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12h.01M12 8v2" strokeLinecap="round"/>
  </Icon>
);

const IconWhoWeAre = () => (
  <Icon viewBox="0 0 24 24">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

const IconVision = () => (
  <Icon viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7z"/>
  </Icon>
);

const IconMission = () => (
  <Icon viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="M17 7l3-3M20 4l-3 3m3-3v3m0-3h-3" strokeLinecap="round"/>
  </Icon>
);

const IconManagement = () => (
  <Icon viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
  </Icon>
);

const HomePreviews: React.FC<HomePreviewsProps> = ({ onNavigate }) => {
  const navItems = [
    { Icon: IconOverview, title: "Overview", route: "home/overview" },
    { Icon: IconWhoWeAre, title: "Who We Are", route: "home/who-are-we" },
    { Icon: IconVision, title: "Our Vision", route: "home/vision" },
    { Icon: IconMission, title: "Our Mission", route: "home/mission" },
    { Icon: IconManagement, title: "Management", route: "home/management" },
  ];
  
  return (
    <Section>
      <Container>
        <LeftContent>
          <Title>Learn More About APOZ</Title>
          <Divider />
          <Description>
            Explore the strategic advantages, mission, vision, and leadership behind Houston APOZ—
            America's premier gateway for international manufacturers seeking to establish operations 
            in the United States through our unique FTZ and QOZ dual-status platform.
          </Description>
          <div>
            <GoldButton onClick={() => onNavigate('master-plan')}>View Master Plan</GoldButton>
          </div>
        </LeftContent>
        <RightContent>
          {navItems.map((item) => (
            <NavBoxItem key={item.route} onClick={() => onNavigate(item.route)}>
              <NavBoxLeft>
                <item.Icon />
                <NavTitle>{item.title}</NavTitle>
              </NavBoxLeft>
              <Arrow viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </Arrow>
            </NavBoxItem>
          ))}
        </RightContent>
      </Container>
    </Section>
  );
};

export default HomePreviews;
