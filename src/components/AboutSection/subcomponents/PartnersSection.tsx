import React from "react";
import styled from "styled-components";
import { Building2, Phone, MapPin } from "lucide-react";
import { PARTNERS_DATA } from "./aboutSectionData";

const PartnersContainer = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.8;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const PartnerCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.teal};
  }
`;

const Category = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FirmName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  svg {
    color: ${({ theme }) => theme.colors.teal};
    flex-shrink: 0;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.foreground};
  
  svg {
    color: ${({ theme }) => theme.colors.teal};
    flex-shrink: 0;
  }
`;

const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.foreground};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  opacity: 0.8;
`;

const Contact = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.teal};
  margin: 0;
`;

const PartnersSection: React.FC = () => {
  return (
    <PartnersContainer>
      <Container>
        <Header>
          <Title>{PARTNERS_DATA.title}</Title>
          <Subtitle>{PARTNERS_DATA.subtitle}</Subtitle>
        </Header>
        
        <PartnersGrid>
          {PARTNERS_DATA.partners.map((partner, index) => (
            <PartnerCard key={index}>
              <Category>{partner.category}</Category>
              <FirmName>
                <Building2 size={20} />
                {partner.firm}
              </FirmName>
              <Role>{partner.role}</Role>
              {partner.contact && <Contact>{partner.contact}</Contact>}
              
              <ContactInfo>
                {partner.location && (
                  <InfoRow>
                    <MapPin size={16} />
                    <span>{partner.location}</span>
                  </InfoRow>
                )}
                {partner.phone && (
                  <InfoRow>
                    <Phone size={16} />
                    <span>{partner.phone}</span>
                  </InfoRow>
                )}
              </ContactInfo>
            </PartnerCard>
          ))}
        </PartnersGrid>
      </Container>
    </PartnersContainer>
  );
};

export default PartnersSection;
