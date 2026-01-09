import styled from "styled-components";

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.goldAccent};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border: none;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-feature-settings: 'liga', 'kern';
  text-rendering: optimizeLegibility;
  
  &::after {
    content: '→';
    font-size: 1em;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    background: ${({ theme }) => theme.colors.goldAccentHover};
    transform: translateX(2px);
    box-shadow: 0 4px 12px rgba(201, 162, 77, 0.2);
  }
  
  &:hover::after {
    transform: translateX(4px);
  }
`;

const GoldButton: React.FC<GoldButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default GoldButton;
