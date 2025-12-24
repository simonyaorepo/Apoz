import styled from "styled-components";

interface IconCircleProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const sizes = {
  sm: '48px',
  md: '60px',
  lg: '64px'
};

const Circle = styled.div<{ $size: 'sm' | 'md' | 'lg' }>`
  width: ${({ $size }) => sizes[$size]};
  height: ${({ $size }) => sizes[$size]};
  background: ${({ theme }) => theme.gradients.teal};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-shrink: 0;
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const IconCircle: React.FC<IconCircleProps> = ({ size = 'md', children }) => {
  return <Circle $size={size}>{children}</Circle>;
};

export default IconCircle;
