import { useTranslation } from 'react-i18next';
import styled from "styled-components";

const Section = styled.section`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: ${({ theme }) => theme.spacing.xxxl} 5vw;
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxl} 5vw;
  }
`;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.618fr;
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
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
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1.25;
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.goldAccent};
`;

const TagLine = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 400;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayAccent};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  margin: 0;
`;

const AboutIntro: React.FC = () => {
  const { t } = useTranslation('home');
  
  return (
    <Section>
      <Container>
        <ImageWrapper>
          <StyledImage 
            src="/assets/images/home/intro.jpg" 
            alt="APOZ Development" 
          />
        </ImageWrapper>
        <TextContent>
          <Title>{t('intro.title')}</Title>
          <Divider />
          <TagLine>{t('intro.tagline')}</TagLine>
          <Description>
            {t('intro.description1')}
          </Description>
          <Description>
            {t('intro.description2')}
          </Description>
          <Description>
            {t('intro.description3')}
          </Description>
        </TextContent>
      </Container>
    </Section>
  );
};

export default AboutIntro;
