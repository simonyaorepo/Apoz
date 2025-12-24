import styled from "styled-components";

interface CardProps {
  variant?: 'basic' | 'hover' | 'image-overlay';
  children: React.ReactNode;
  onClick?: () => void;
}

const BasicCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  transition: all 0.3s ease;
`;

const HoverCard = styled(BasicCard)`
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const ImageOverlayCard = styled.div<{ $image?: string }>`
  position: relative;
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${({ $image }) => $image}) center/cover;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
`;

export const Card: React.FC<CardProps & { $image?: string }> = ({ 
  variant = 'hover', 
  children, 
  onClick,
  $image 
}) => {
  if (variant === 'image-overlay') {
    return <ImageOverlayCard onClick={onClick} $image={$image}>{children}</ImageOverlayCard>;
  }
  
  if (variant === 'hover') {
    return <HoverCard onClick={onClick}>{children}</HoverCard>;
  }
  
  return <BasicCard onClick={onClick}>{children}</BasicCard>;
};

export const CardTitle = styled.h3<{ $color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $color }) => $color || theme.colors.darkBlue};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const CardDescription = styled.p<{ $color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme, $color }) => $color || theme.colors.foreground};
  line-height: 1.7;
  margin: 0;
`;

export default Card;
