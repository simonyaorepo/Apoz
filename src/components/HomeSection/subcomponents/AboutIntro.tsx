import styled from "styled-components";

const Section = styled.section`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 80px 5vw;
  
  @media (max-width: 768px) {
    padding: 60px 5vw;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 400;
  line-height: 1.3;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.h2};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.goldAccent};
`;

const TagLine = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: 1.125rem;
  font-weight: 400;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
`;

const AboutIntro: React.FC = () => {
  return (
    <Section>
      <Container>
        <ImageWrapper>
          <StyledImage 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
            alt="APOZ Development" 
          />
        </ImageWrapper>
        <TextContent>
          <Title>Asia Pacific Opportunity Zone</Title>
          <Divider />
          <TagLine>Sustainable Growth and Global Connection</TagLine>
          <Description>
            The Asia Pacific Opportunity Zone (APOZ) is a bold, master-planned development 
            located in the Greater Houston area. Designed to address the region's urgent need 
            for affordable housing and industrial growth, APOZ integrates residential, commercial, 
            and industrial sectors into a unified, future-ready community.
          </Description>
          <Description>
            Spearheaded by ASC Global Inc., a subsidiary of Token Communities Ltd., APOZ reflects 
            a deep commitment to strategic growth, international trade, and equitable living. As 
            part of a designated Free Trade Zone, the project is positioned to become a hub for 
            commerce and innovation in the U.S. and beyond.
          </Description>
        </TextContent>
      </Container>
    </Section>
  );
};

export default AboutIntro;
