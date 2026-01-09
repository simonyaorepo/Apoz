import React from "react";
import styled from "styled-components";
import GoldButton from "../../ui/GoldButton";

const Section = styled.section`
  background: linear-gradient(rgba(10, 40, 45, 0.85), rgba(10, 40, 45, 0.85)),
    url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80') center/cover;
  padding: ${({ theme }) => theme.spacing.section} 5vw;
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxl} 5vw;
  }
`;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.618fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
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

interface WhoWeAreProps {
  onNavigate: (page: string) => void;
}

const IconApproach = () => (
  <Icon viewBox="0 0 24 24">
    <path d="M12 2v20M2 12h20" strokeLinecap="round"/>
    <path d="M12 7l-2-2m2 2l2-2M12 17l-2 2m2-2l2 2M7 12l-2-2m2 2l-2 2M17 12l2-2m-2 2l2 2" strokeLinecap="round"/>
  </Icon>
);

const IconPartnership = () => (
  <Icon viewBox="0 0 24 24">
    <path d="M9 11a4 4 0 014-4 4 4 0 014 4M7 15c0-1.5 1-2.5 2.5-2.5h.5a3 3 0 013 3v3.5h-6V15z"/>
    <path d="M15 15c0-1.5 1-2.5 2.5-2.5h.5a3 3 0 013 3v3.5h-6V15z"/>
    <path d="M11 13.5c.5.5 2 .5 2.5 0"/>
  </Icon>
);

const IconVision = () => (
  <Icon viewBox="0 0 24 24">
    <circle cx="8" cy="12" r="4"/>
    <circle cx="16" cy="12" r="4"/>
    <path d="M8 8c-2-2-5-2-6 0M16 8c2-2 5-2 6 0"/>
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

const WhoWeAre: React.FC<WhoWeAreProps> = ({ onNavigate }) => {
  const navItems = [
    { Icon: IconApproach, title: "Our Approach", route: "/about/approach" },
    { Icon: IconPartnership, title: "Our Partnership", route: "/about/partnership" },
    { Icon: IconVision, title: "Our Vision", route: "home/vision" },
    { Icon: IconMission, title: "Our Mission", route: "home/mission" },
  ];
  return (
    <Section>
      <Container>
        <LeftContent>
          <Title>Who We Are</Title>
          <Divider />
          <Description>
            The Houston APOZ Free Trade Zone located in Winnie, Texas, within U.S. Foreign 
            Trade Zone (FTZ) 171 is being established as a strategic gateway for global 
            manufacturers and investors to participate in the United States' re-industrialization 
            movement. Designed with both Free Trade Zone (FTZ) and Qualified Opportunity Zone 
            (QOZ) benefits, APOZ offers an unmatched platform for enterprises from China, Korea, 
            Japan, Saudi Arabia, and other international partners to localize production investment 
            and proudly manufacture under the "Made in USA" brand.
          </Description>
          <Description>
            Beyond its economic advantages, APOZ is conceived as a sustainable growth 
            community—integrating industrial infrastructure with residential, commercial, and 
            township development. This forward-looking ecosystem ensures that companies, 
            workers, and families can thrive together, creating not only industrial prosperity but also 
            vibrant communities that support long-term growth.
          </Description>
          <div>
            <GoldButton onClick={() => onNavigate('about')}>Learn More</GoldButton>
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

export default WhoWeAre;
