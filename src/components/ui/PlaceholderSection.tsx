import React from "react";
import TextHero from "../TextHero";
import styled from "styled-components";
import { WhiteSection } from "./Sections";
import { Container } from "./Containers";

const ContentSection = styled(WhiteSection)`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.section} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxxl} 0;
  }
`;

const PlaceholderContent = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxxl} ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.darkBlue};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const SubDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.7;
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

interface PlaceholderSectionProps {
  heroTitle: string;
  heroImage: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  title: string;
  description: string;
  subDescription: string;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({
  heroTitle,
  heroImage,
  breadcrumbs,
  title,
  description,
  subDescription,
}) => {
  return (
    <>
      <TextHero
        title={heroTitle}
        backgroundImage={heroImage}
        breadcrumbs={breadcrumbs}
      />
      
      <ContentSection>
        <Container>
          <PlaceholderContent>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <SubDescription>{subDescription}</SubDescription>
          </PlaceholderContent>
        </Container>
      </ContentSection>
    </>
  );
};

export default PlaceholderSection;
