
import styled from "styled-components";

const Wrapper = styled.div``;

const Section = styled.div<{ bg?: string }>`
  background: ${({ bg }) => bg || "none"};
  padding: 4rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.card};
`;

const MissionText = styled.div`
  padding-left: 48px;
  border-left: 2px solid ${({ theme }) => theme.colors.goldAccent};
`;

const VisionText = styled.div`
  padding-right: 48px;
  border-right: 2px solid ${({ theme }) => theme.colors.goldAccent};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlueAlt};
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 24px;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: 20px;
  margin-bottom: 24px;
`;

const MissionVision: React.FC = () => (
  <Wrapper>
    {/* Mission */}
    <Section style={{ background: '#fff' }}>
      <Grid>
        <Img src="https://images.unsplash.com/photo-1758520144427-ddb02ac74e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ2NTg4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Mission" />
        <MissionText>
          <Title>Our Mission</Title>
          <Paragraph>
            To become the leading sustainable renewable industry park in North America, serving as 
            the gateway for Asia-Pacific enterprises to enter the U.S. market, integrate into global 
            supply chains, and access international capital markets while promoting green growth, 
            economic opportunity, and cross-border innovation.
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            We envision APOZ as a model industrial ecosystem that not only harnesses renewable energy 
            to power economic development, but also maximizes FTZ and QOZ incentives to enhance capital 
            efficiency, fostering ESG-aligned investments that create long-term social and economic impact 
            and serves as a platform for IPO readiness, supply chain finance, and global expansion.
          </Paragraph>
        </MissionText>
      </Grid>
    </Section>
    {/* Vision */}
    <Section>
      <Grid>
        <VisionText>
          <Title>Our Vision</Title>
          <Paragraph>
            Our vision is to position Houston APOZ as a world-class industrial and community hub that 
            fuels America's re-industrialization while creating global win-win partnerships. By offering 
            international companies a secure, policy-aligned, and innovation-driven environment, we 
            empower them to achieve strong returns on investment, expand their market presence, and 
            contribute directly to the U.S. industrial renaissance.
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            We envision APOZ as more than an industrial zone—it is a living model of sustainable growth. 
            By combining advanced manufacturing, trade facilitation, and modern township infrastructure, 
            APOZ aims to become a landmark destination where global enterprises, local communities, and 
            the United States economy grow together.
          </Paragraph>
        </VisionText>
        <Img src="https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ2MDkxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Vision" />
      </Grid>
    </Section>
  </Wrapper>
);

export default MissionVision;
