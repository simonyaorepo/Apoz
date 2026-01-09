import React from "react";
import TextHero from "../../TextHero";
import styled from "styled-components";
import { SERVICES_OVERVIEW_DATA } from "../servicesSectionData";
import { TealSection, TealBox } from "../../ui/Sections";
import { IllustrationBox } from "../../ui/Media";

const WhiteSection = styled.section`
  background: white;
  padding: ${({ theme }) => theme.spacing.xxl} 5vw;
`;

const GreySection = styled.section`
  background: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spacing.xxl} 5vw;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.content};
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div``;

const ServicesList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ServiceCard = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.goldAccent};
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(10, 58, 63, 0.03);
  
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.foreground};
    margin: 0;
  }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.goldAccent};
  
  h4 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 0;
  }
`;

interface ServicesOverviewSectionProps {
  onNavigate: (page: string) => void;
}

const ServicesOverviewSection: React.FC<ServicesOverviewSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <>
      <TextHero
        title={SERVICES_OVERVIEW_DATA.title}
        backgroundImage={SERVICES_OVERVIEW_DATA.backgroundImage}
        breadcrumbs={SERVICES_OVERVIEW_DATA.breadcrumbs}
      />
      
      <WhiteSection>
        <Container>
          <ContentGrid>
            <TextContent>
              {SERVICES_OVERVIEW_DATA.content.intro.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Key Offerings</h3>
              <ServicesList>
                {SERVICES_OVERVIEW_DATA.content.coreServices.map((service, idx) => (
                  <ServiceCard key={idx}>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </ServiceCard>
                ))}
              </ServicesList>
            </TextContent>
            <IllustrationBox>
              <svg viewBox="0 0 650 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ground line */}
                <line x1="30" y1="310" x2="620" y2="310" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Industrial building */}
                <rect x="60" y="200" width="100" height="110" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="75" y="220" width="20" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="110" y="220" width="20" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="75" y="260" width="20" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                <rect x="110" y="260" width="20" height="25" stroke="#0a3a3f" strokeWidth="1.5" fill="none"/>
                
                {/* Residential homes */}
                <path d="M 190 240 L 215 215 L 240 240" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="195" y="240" width="40" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <rect x="205" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                <rect x="220" y="255" width="10" height="12" stroke="#0a3a3f" strokeWidth="1" fill="none"/>
                
                {/* Trade/logistics icon */}
                <rect x="280" y="240" width="80" height="70" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="320" cy="275" r="25" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <path d="M 305 275 L 335 275 M 320 260 L 320 290" stroke="#0a3a3f" strokeWidth="2"/>
                
                {/* Investment/money icon */}
                <circle cx="420" cy="260" r="40" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <text x="420" y="275" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#0a3a3f">$</text>
                
                {/* Services hub */}
                <rect x="490" y="220" width="90" height="90" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <circle cx="535" cy="265" r="15" stroke="#0a3a3f" strokeWidth="2" fill="none"/>
                <line x1="520" y1="265" x2="510" y2="265" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="550" y1="265" x2="560" y2="265" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="535" y1="250" x2="535" y2="240" stroke="#0a3a3f" strokeWidth="2"/>
                <line x1="535" y1="280" x2="535" y2="290" stroke="#0a3a3f" strokeWidth="2"/>
              </svg>
            </IllustrationBox>
          </ContentGrid>
        </Container>
      </WhiteSection>

      <TealSection>
        <TealBox>
          <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>{SERVICES_OVERVIEW_DATA.content.tradeLogistics.heading}</h3>
          {SERVICES_OVERVIEW_DATA.content.tradeLogistics.services.map((service, idx) => (
            <div key={idx} style={{ marginBottom: idx === SERVICES_OVERVIEW_DATA.content.tradeLogistics.services.length - 1 ? '0' : '1.5rem' }}>
              <h4 style={{ color: 'white', fontSize: '1.125rem', marginBottom: '0.5rem' }}>{service.title}</h4>
              <p style={{ color: 'white', fontSize: '0.9375rem', opacity: 0.95, margin: 0 }}>{service.description}</p>
            </div>
          ))}
        </TealBox>
      </TealSection>
      
      <GreySection>
        <Container>
          <TextContent>
            <h3 style={{ marginBottom: '1.5rem' }}>{SERVICES_OVERVIEW_DATA.content.tenantServices.heading}</h3>
            {SERVICES_OVERVIEW_DATA.content.tenantServices.services.map((service, idx) => (
              <p key={idx} style={{ marginBottom: '0.75rem' }} dangerouslySetInnerHTML={{ __html: service }} />
            ))}
          </TextContent>
        </Container>
      </GreySection>

      <GreySection>
        <Container>
          <TextContent>
            <h3 style={{ marginBottom: '1.5rem' }}>APOZ Service Advantage</h3>
            <AdvantagesGrid>
              {SERVICES_OVERVIEW_DATA.content.advantages.map((item, idx) => (
                <AdvantageCard key={idx}>
                  <h4>{item.feature}</h4>
                  <p>{item.edge}</p>
                </AdvantageCard>
              ))}
            </AdvantagesGrid>
          </TextContent>
        </Container>
      </GreySection>
    </>
  );
};

export default ServicesOverviewSection;
