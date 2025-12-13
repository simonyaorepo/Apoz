
import styled from "styled-components";
import { SkytowerArrow } from "../../SkytowerArrow";

interface FeatureTile {
  title: string;
  date: string;
  image: string;
}

interface FeatureTilesProps {
  tiles: FeatureTile[];
  onNavigate: (page: string) => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Tile = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.card};
  overflow: hidden;
  cursor: pointer;
  &:hover img {
    transform: scale(1.05);
  }
`;

const TileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
`;

const TileOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
`;

const TileInfo = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: ${({ theme }) => theme.spacing.lg};
  right: 64px;
`;

const TileDate = styled.div`
  color: ${({ theme }) => theme.colors.goldAccent};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TileTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h4};
`;

const TileArrow = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
`;

const FeatureTiles: React.FC<FeatureTilesProps> = ({ tiles, onNavigate }) => (
  <Grid>
    {tiles.map((tile, index) => (
      <Tile key={index} onClick={() => onNavigate('news')}>
        <TileImg src={tile.image} alt={tile.title} />
        <TileOverlay />
        <TileInfo>
          <TileDate>{tile.date}</TileDate>
          <TileTitle>{tile.title}</TileTitle>
        </TileInfo>
        <TileArrow>
          <SkytowerArrow />
        </TileArrow>
      </Tile>
    ))}
  </Grid>
);

export default FeatureTiles;
