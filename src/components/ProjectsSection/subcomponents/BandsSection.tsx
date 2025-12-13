import styled from "styled-components";
import { SkytowerArrow } from "../../SkytowerArrow";

export interface ProjectBand {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
  imagePosition: "left" | "right";
}

const BandSection = styled.section<{ alt?: boolean }>`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: ${({ alt, theme }) => (alt ? theme.colors.backgroundAlt : theme.colors.white)};
`;
const BandContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
const BandGrid = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
`;
const BandImageWrap = styled.div<{ reverse?: boolean }>`
  order: ${({ reverse }) => (reverse ? 2 : 1)};
`;
const BandImage = styled.img`
  width: 100%;
  aspect-ratio: ${({ theme }) => theme.aspect.wide};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.card};
`;
const BandTextWrap = styled.div<{ reverse?: boolean }>`
  order: ${({ reverse }) => (reverse ? 1 : 2)};
`;
const BandSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
const BandTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.1;
`;
const BandDesc = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.h6};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;
const BandList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const BandListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
const BandBullet = styled.div`
  width: ${({ theme }) => theme.spacing.xs};
  height: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radii.full};
  margin-top: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;
`;

const BandArrow = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
`;
const BandPoint = styled.span`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const BandsSection: React.FC<{ bands: ProjectBand[]; onNavigate: (page: string) => void }> = ({ bands, onNavigate }) => {
  // Removed unused theme variable
  return (
    <>
      {bands.map((band, index) => (
        <BandSection key={index} alt={index % 2 !== 0}>
          <BandContainer>
            <BandGrid reverse={band.imagePosition === "left"}>
              <BandImageWrap reverse={band.imagePosition === "left"}>
                <BandImage src={band.image} alt={band.title} />
                <BandArrow>
                  <SkytowerArrow onClick={() => onNavigate("contact")} />
                </BandArrow>
              </BandImageWrap>
              <BandTextWrap reverse={band.imagePosition === "left"}>
                <BandSubtitle>{band.subtitle}</BandSubtitle>
                <BandTitle>{band.title}</BandTitle>
                <BandDesc>{band.description}</BandDesc>
                <BandList>
                  {band.points.map((point, pointIndex) => (
                    <BandListItem key={pointIndex}>
                      <BandBullet />
                      <BandPoint>{point}</BandPoint>
                    </BandListItem>
                  ))}
                </BandList>
              </BandTextWrap>
            </BandGrid>
          </BandContainer>
        </BandSection>
      ))}
    </>
  );
};

export default BandsSection;
