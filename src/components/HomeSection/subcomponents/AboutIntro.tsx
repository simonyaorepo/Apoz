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
          <Title>Join America's New Industrial Revolution</Title>
          <Divider />
          <TagLine>Partnering in U.S. Re-Industrialization</TagLine>
          <Description>
            The United States is embarking on a bold re-industrialization journey, and we, at APOZ, 
            invite manufacturers, enterprises, and investors from around the world to be part of it. 
            Today, "Made in USA" is more than a label—it is a symbol of market access, innovation, 
            and long-term growth. By localizing production in America, global partners can tap into 
            the world's largest consumer market, align with forward-looking U.S. policies, and create 
            sustainable value for their businesses and communities.
          </Description>
          <Description>
            For Chinese, Korean, Taiwanese, and Japanese manufacturers, this is the moment to 
            expand beyond exports and establish a direct presence in the U.S. Local production 
            reduces risks from trade barriers, strengthens customer trust, and unlocks new 
            opportunities in high-demand sectors such as semiconductors, automotive, clean energy, 
            pharmaceuticals, and advanced machinery.
          </Description>
          <Description>
            Saudi Arabian and Middle East enterprises are also uniquely positioned to seize this 
            opportunity with investment. Aligned with Vision 2030, Saudi investors and industrial 
            champions can extend their capabilities into the U.S. by localizing energy, chemicals, 
            advanced materials, and green technologies. This partnership bridges two transforming 
            economies, amplifying growth in both markets while reinforcing the global strength of 
            "Made in USA."
          </Description>
        </TextContent>
      </Container>
    </Section>
  );
};

export default AboutIntro;
