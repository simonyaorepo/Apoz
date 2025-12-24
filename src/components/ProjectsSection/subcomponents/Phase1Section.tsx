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

const Phase1Section: React.FC = () => {
  return (
    <>
      <OverviewSection
        title="Phase 1"
        overlayTitle="436 Acres"
        overlaySubtitle="Industrial Park"
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbLabel="Phase 1"
      />
      
      <Section>
        <SummaryBlock
          content={[
            "Phase One of APOZ consists of 436 acres and is the cornerstone of our transformative vision—positioning APOZ as a world-class industrial park with significant residential integration.",
            "Stage One (2026) includes 400,000 sq. ft. of industrial/office space across 31 acres, establishing the framework for larger development with FTZ Zone Operator headquarters and demonstration facilities.",
            "Stage Two (2027-2030) represents full build-out featuring 9.8 million sq. ft. of industrial space, 700,000 sq. ft. of commercial facilities, and 1,500 residential units across the development.",
            "Our projected annual income at full buildout is $234.4 million, combining industrial lease revenue of $176.4 million, commercial income of $21 million, and residential revenue of $27 million."
          ]}
          imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
          imageAlt="Phase 1 Overview"
          reverse={true}
        />

        <GoldDivider />

        <ContentBlock>
          <ImageWrapper>
            <Image 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
              alt="Stage One Development"
            />
          </ImageWrapper>
          <TextContent>
            <Title>Stage One: Foundation & Infrastructure (2026)</Title>
            <Paragraph>
              Stage One covers 31 acres and includes three concrete buildings totaling 400,000 sq. ft.: two buildings of 100,000 sq. ft. each and one building of 200,000 sq. ft. These facilities will house APOZ management offices (FTZ #171 Zone Operator Office) and serve as the initial demonstration of the park's ability to support 500+ future manufacturing tenants under a flexible leasing model.
            </Paragraph>
            <Paragraph>
              The total Stage One project cost is $30.6 million, including land acquisition ($7.2M), soft costs ($600K), building construction ($20M), utilities ($550K), and site improvements ($2M). This establishes the critical infrastructure foundation required for full county approval and future expansion.
            </Paragraph>
          </TextContent>
        </ContentBlock>

        <GreyDivider />

        <ContentBlock $reverse>
          <ImageWrapper $reverse>
            <Image 
              src="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800&q=80" 
              alt="Industrial Development"
            />
          </ImageWrapper>
          <TextContent $reverse>
            <Title>Stage Two: Full Buildout (2027-2030)</Title>
            <Paragraph>
              Stage Two represents the complete development of the remaining 405 acres with 9.4 million sq. ft. of industrial space, 700,000 sq. ft. of commercial facilities, and 1,500 residential units. The total project cost is $644.5 million, creating a fully integrated industrial ecosystem.
            </Paragraph>
            <Paragraph>
              Industrial spaces utilize a 50% floor area ratio at $1.50/sq. ft./month ($1.00 rent + $0.50 TICAM), generating $176.4M annual income. Commercial spaces use a 40% FAR at $2.50/sq. ft./month, producing $21M annually. The residential component provides built-in workforce housing at $1,500/month per unit, contributing $27M annually.
            </Paragraph>
          </TextContent>
        </ContentBlock>

        <GreyDivider />

        <ContentBlock>
          <ImageWrapper>
            <Image 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
              alt="Residential Integration"
            />
          </ImageWrapper>
          <TextContent>
            <Title>Residential Workforce Housing</Title>
            <Paragraph>
              Phase 1 includes 1,500 affordable housing units as part of the build-to-lease model, providing workforce housing that enhances employee retention and creates a stable community. Each unit averages 1,200 sq. ft. and rents for $1,500/month, generating $18,000 per unit annually.
            </Paragraph>
            <Paragraph>
              This integrated approach ensures that APOZ tenants have access to quality, affordable housing for their employees within the development, reducing commute times and strengthening the community ecosystem. The residential revenue stream contributes $27 million annually to the total projected income.
            </Paragraph>
          </TextContent>
        </ContentBlock>
      </Section>
      
      <GoldDivider />
      
      <QuoteSection quote="Phase One establishes APOZ as the premier FTZ+QOZ dual-status business park, creating unprecedented economic opportunity in Southeast Texas with 9.8M sq. ft. of industrial space and integrated workforce housing." />
    </>
  );
};

export default Phase1Section;
