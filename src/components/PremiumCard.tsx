import styled from "styled-components";
import { SkytowerArrow } from "./SkytowerArrow";

const Card = styled.div`
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.card};
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: 0 12px 48px rgba(0,0,0,0.16);
    transform: translateY(-10px);
  }
`;

const ImageBox = styled.div`
  position: relative;
  aspect-ratio: 4/5;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%);
  padding: 1.5rem;
`;

const Meta = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

const CardSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.white}CC;
  font-size: 0.95rem;
`;

const ArrowBox = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
`;

// Removed duplicate interface and function implementation

interface PremiumCardProps {
  image: string;
  title: string;
  subtitle?: string;
  meta?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function PremiumCard({ image, title, subtitle, meta, onClick, children }: PremiumCardProps) {
  // ...existing code...
  return (
    <Card onClick={onClick}>
      <ImageBox>
        <CardImage src={image} alt={title} />
        <GradientOverlay>
          {meta && <Meta>{meta}</Meta>}
          <CardTitle>{title}</CardTitle>
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        </GradientOverlay>
        <ArrowBox>
          <SkytowerArrow />
        </ArrowBox>
      </ImageBox>
      {children}
    </Card>
  );
}


