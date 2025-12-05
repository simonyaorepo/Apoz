import styled from "styled-components";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { breakpoints } from "../theme";
import type { DefaultTheme } from "styled-components";
const FeatureList = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const CheckCircle2Styled = styled(CheckCircle2)<{ theme?: DefaultTheme }>`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme?.colors.secondary};
  flex-shrink: 0;
  margin-top: 0.125rem;
`;

const Section = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: ${breakpoints.sm}) {
    padding: 0 1.5rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    padding: 0 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: center;
  margin-bottom: 5rem;
  grid-template-columns: 1fr;
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const BlueText = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.75rem;
  letter-spacing: 0.05em;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: 1.5rem;
`;

const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
`;

const FeatureBox = styled.div`
  background: ${({ theme }) => theme.gradients.feature};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radii.lg};
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const FeatureText = styled.span`
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
`;

const BlueBlob = styled.div`
  position: absolute;
  bottom: -1.5rem;
  right: -1.5rem;
  width: 12rem;
  height: 12rem;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.lg};
  z-index: -1;
`;

export function AboutSection() {
  const features = [
    "Affordable Housing – High-quality homes starting at $188,000 to support working families",
    "Industrial and Business Parks – Attracting international manufacturers, distributors, and innovators",
    "Commercial Development – Mixed-use zones with retail, dining, and essential services",
    "Free Trade Zone Integration – Ideal for global logistics, export/import, and business incentives",
    "Sustainability Focus – Thoughtfully planned green spaces and long-term environmental resilience",
  ];

  return (
    <Section>
      <Container>
        {/* Mission & Vision */}
        <Grid>
          <div>
            <BlueText>About APOZ</BlueText>
            <Title>Our Mission & Vision</Title>
            <Paragraph>
              The Asia Pacific Opportunity Zone (APOZ) is a bold, master-planned development located in the Greater Houston area.
              Designed to address the region's urgent need for affordable housing and industrial growth, APOZ integrates
              residential, commercial, and industrial sectors into a unified, future-ready community. Spearheaded by ASC Global Inc.,
              a subsidiary of Token Communities Ltd., APOZ reflects a deep commitment to strategic growth, international trade,
              and equitable living.
            </Paragraph>
            <div>
              <SubTitle>Mission</SubTitle>
              <Paragraph>
                APOZ is dedicated to creating a dynamic, sustainable, and innovation-driven industrial and residential community
                in Southeast Texas. By integrating smart infrastructure, green energy, and global partnerships, APOZ aims to
                become a hub for advanced manufacturing, international trade, and inclusive housing.
              </Paragraph>
            </div>
            <div>
              <SubTitle>Vision</SubTitle>
              <Paragraph>
                Our vision is to empower growth — not only for businesses but also for the communities they serve — by transforming
                underdeveloped land into high-value economic zones that support long-term prosperity and global collaboration.
              </Paragraph>
            </div>
          </div>
          <ImageWrapper>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2NDY0MTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="APOZ Partnership"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <BlueBlob />
          </ImageWrapper>
        </Grid>
        {/* Core Features */}
        <FeatureBox>
          <SubTitle as="h3" style={{ textAlign: "center", marginBottom: "2rem" }}>Core Features</SubTitle>
          <FeatureList>
            {features.map((feature, index) => (
              <FeatureRow key={index}>
                <CheckCircle2Styled />
                <FeatureText>{feature}</FeatureText>
              </FeatureRow>
            ))}
          </FeatureList>
        </FeatureBox>
      </Container>
    </Section>
  );
}
