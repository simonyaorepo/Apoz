import React from "react";
import styled from "styled-components";
import OverviewSection from "./OverviewSection";
import SummaryBlock from "./SummaryBlock";
import QuoteSection from "./QuoteSection";
import GoldDivider from "../../ui/GoldDivider";
import GreyDivider from "../../ui/GreyDivider";

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
`;

const ContentBlock = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $reverse }) => $reverse ? '1fr 1fr' : '1fr 1fr'};
  gap: ${({ theme }) => theme.spacing.xxxl};
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ImageWrapper = styled.div<{ $reverse?: boolean }>`
  order: ${({ $reverse }) => $reverse ? 2 : 1};
  
  @media (max-width: 968px) {
    order: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const TextContent = styled.div<{ $reverse?: boolean }>`
  order: ${({ $reverse }) => $reverse ? 1 : 2};
  
  @media (max-width: 968px) {
    order: 2;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.2;
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Phase2Section: React.FC = () => {
  return (
    <>
      <OverviewSection
        title="Phase 2"
        backgroundImage="https://images.unsplash.com/photo-1605146769289-440113cc3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbLabel="Phase 2"
      />
      
      <Section>
        <SummaryBlock
          content={[
            "Phase 2 focuses on residential development, delivering 1,500 affordable housing units across 210+ acres as part of our build-to-sell strategy.",
            "With homes starting at $188,000, Phase 2 provides working-class families the opportunity to invest in homeownership within the APOZ community, creating stable workforce housing that supports industrial growth.",
            "This development generates projected sales revenue of $282 million with a gross profit of $94.5 million, while strengthening the Greater Houston region with quality, affordable housing in one of the nation's fastest-growing metropolitan areas."
          ]}
          imageSrc="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80"
          imageAlt="Phase 2 Overview"
          reverse={true}
        />

        <GoldDivider />

        <ContentBlock>
          <ImageWrapper>
            <Image 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
              alt="Affordable Housing Development"
            />
          </ImageWrapper>
          <TextContent>
            <Title>1,500 Affordable Housing Units</Title>
            <Paragraph>
              Phase 2 delivers 1,500 affordable housing units across 210+ acres, providing quality homes starting at $188,000. 
              With an average lot size of 10,000 sq. ft., each 3-bedroom, 1,200 sq. ft. home offers working-class families 
              the opportunity to invest in their future within the APOZ community.
            </Paragraph>
            <Paragraph>
              This build-to-sell development generates projected gross profit of $94.5 million while creating stable 
              workforce housing that supports APOZ's industrial growth and strengthens the Greater Houston region.
            </Paragraph>
          </TextContent>
        </ContentBlock>

        <GreyDivider />

        <ContentBlock $reverse>
          <ImageWrapper $reverse>
            <Image 
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80" 
              alt="Community Integration"
            />
          </ImageWrapper>
          <TextContent $reverse>
            <Title>Community Integration & Workforce Stability</Title>
            <Paragraph>
              By providing affordable housing directly within APOZ, Phase 2 ensures employee retention and creates 
              a self-sustaining community ecosystem. Workers can live minutes from their jobs, reducing commute times 
              and strengthening community ties.
            </Paragraph>
            <Paragraph>
              This integrated approach combines economic opportunity with quality living, fostering a vibrant 
              residential environment that serves both APOZ tenants and the broader region.
            </Paragraph>
          </TextContent>
        </ContentBlock>

        <GreyDivider />

        <ContentBlock>
          <ImageWrapper>
            <Image 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
              alt="Economic Impact"
            />
          </ImageWrapper>
          <TextContent>
            <Title>Economic & Regional Impact</Title>
            <Paragraph>
              Phase 2's residential expansion contributes significantly to the Greater Houston area by delivering 
              hundreds of affordable homes in one of the nation's fastest-growing metropolitan regions. With projected 
              sales revenue of $282 million, this development drives measurable economic growth.
            </Paragraph>
            <Paragraph>
              The build-to-sell model ensures sustainable development while providing families with homeownership 
              opportunities that build generational wealth and community stability.
            </Paragraph>
          </TextContent>
        </ContentBlock>
      </Section>
      
      <GoldDivider />
      
      <QuoteSection quote="Phase 2 transforms APOZ into a complete community, delivering 1,500 affordable homes that create workforce stability and drive regional economic growth in Greater Houston." />
    </>
  );
};

export default Phase2Section;
