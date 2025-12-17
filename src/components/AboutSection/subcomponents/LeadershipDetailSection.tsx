import React from "react";
import TextHero from "../../TextHero";
import styled from "styled-components";
import GoldButton from "../../ui/GoldButton";
import {
  Section,
  Container,
  PageTitle,
  GoldDivider,
  ContentGrid,
  TextBlock,
  Paragraph,
  ButtonContainer,
} from "./SharedComponents";

const LeaderBox = styled.div`
  background: linear-gradient(135deg, #0a3a3f 0%, #0d4a50 100%);
  padding: ${({ theme }) => theme.spacing.xxxl};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin: ${({ theme }) => theme.spacing.xxxl} 0;
  border: 2px solid ${({ theme }) => theme.colors.goldAccent};
`;

const LeaderTitle = styled.h3`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const LeaderText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xxxl} 0;
`;

const PartnerCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.goldAccent};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.xxl};
  text-align: center;
  transition: ${({ theme }) => theme.transition.fast};
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
    border-color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

const PartnerIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PartnerName = styled.h4`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PartnerDescription = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.7;
  margin: 0;
`;

interface LeadershipDetailSectionProps {
  onNavigate: (page: string) => void;
}

const LeadershipDetailSection: React.FC<LeadershipDetailSectionProps> = ({ onNavigate }) => {
  const partners = [
    {
      id: "itc",
      icon: "🌏",
      name: "International Trade Center – Houston",
      description: "Facilitating cross-border commerce, providing market intelligence, and connecting Asian manufacturers with North American opportunities."
    },
    {
      id: "city",
      icon: "🏛️",
      name: "City of Houston",
      description: "Collaborative planning, infrastructure coordination, and regulatory support ensuring APOZ aligns with regional development goals."
    },
    {
      id: "asia",
      icon: "🌸",
      name: "Asia Pacific Partners",
      description: "Strategic investors and manufacturers from China, Japan, South Korea, and Southeast Asia bringing capital, technology, and global market access."
    },
    {
      id: "north-america",
      icon: "🦅",
      name: "North American Networks",
      description: "Logistics providers, financial institutions, construction firms, and professional services supporting seamless development execution."
    }
  ];

  return (
    <>
      <TextHero
        title="Leadership & Partners"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Leadership & Partners" }
        ]}
      />
      <Section>
        <Container>
          <PageTitle>Experienced Leadership, Strategic Partnerships</PageTitle>
          <GoldDivider />
          
          <LeaderBox>
            <LeaderTitle>ASC Global Inc. — Driving the APOZ Initiative</LeaderTitle>
            <LeaderText>
              At the forefront of the Asia Pacific Opportunity Zone is ASC Global Inc., a development 
              company with deep expertise in international trade, real estate development, and 
              cross-border investment facilitation.
            </LeaderText>
            <LeaderText>
              Our leadership team brings decades of combined experience in Asian markets, American 
              development practices, and the complex regulatory landscape of Foreign Trade Zones. 
              This expertise positions APOZ uniquely to bridge continents and create value for 
              stakeholders on both sides of the Pacific.
            </LeaderText>
            <LeaderText>
              ASC Global Inc. is committed to transparency, integrity, and long-term value creation. 
              We don't just develop land — we build relationships, foster communities, and create 
              opportunities that last generations.
            </LeaderText>
          </LeaderBox>

          <ContentGrid>
            <TextBlock>
              <Paragraph>
                The success of APOZ depends on strategic collaboration with government agencies, 
                trade organizations, financial institutions, and private sector partners. We've 
                assembled a network of trusted allies who share our vision of sustainable, inclusive 
                economic development.
              </Paragraph>
              <Paragraph>
                Our partnerships extend beyond transactional relationships — they're built on shared 
                values, mutual respect, and a common commitment to creating lasting positive impact 
                in Southeast Texas and beyond.
              </Paragraph>
            </TextBlock>
            <TextBlock>
              <Paragraph>
                Each partner brings unique capabilities that strengthen APOZ: market access, technical 
                expertise, financial resources, regulatory knowledge, and community connections. Together, 
                we're building something greater than any single organization could achieve alone.
              </Paragraph>
              <Paragraph>
                As APOZ grows, we continue expanding our network of partners, welcoming organizations 
                that align with our mission of sustainable development and community empowerment.
              </Paragraph>
            </TextBlock>
          </ContentGrid>

          <PartnersGrid>
            {partners.map((partner) => (
              <PartnerCard key={partner.id}>
                <PartnerIcon>{partner.icon}</PartnerIcon>
                <PartnerName>{partner.name}</PartnerName>
                <PartnerDescription>{partner.description}</PartnerDescription>
              </PartnerCard>
            ))}
          </PartnersGrid>

          <ButtonContainer>
            <GoldButton onClick={() => onNavigate('/contact')}>
              Become a Partner
            </GoldButton>
            <GoldButton onClick={() => onNavigate('/projects')}>
              Our Projects
            </GoldButton>
          </ButtonContainer>
        </Container>
      </Section>
    </>
  );
};

export default LeadershipDetailSection;
